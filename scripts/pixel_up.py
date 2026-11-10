"""
pixel_up.py: crop a small pixel-art GIF/PNG around the drawing and enlarge it
with nearest neighbor (crisp pixels, no blur).

Usage:
    python3 pixel_up.py input.gif output.gif            # x8, auto-crop
    python3 pixel_up.py input.gif output.gif 8 32       # x8, crop to 32x32
    python3 pixel_up.py input.gif output.gif 8 0        # x8, no crop (keep canvas)
"""
import sys
import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)
from PIL import Image, ImageChops, ImageSequence

MARGIN = 2  # empty pixels kept around the drawing (and under the feet)


def load_frames(path):
    im = Image.open(path)
    frames, durations = [], []
    for f in ImageSequence.Iterator(im):
        frames.append(f.convert('RGBA'))
        durations.append(f.info.get('duration', 120))
    return frames, durations


def crop_box(frames, size):
    """One square box (same for every frame) with the feet MARGIN px above the bottom."""
    boxes = [f.getbbox() for f in frames if f.getbbox()]
    x0 = min(b[0] for b in boxes); y0 = min(b[1] for b in boxes)
    x1 = max(b[2] for b in boxes); y1 = max(b[3] for b in boxes)
    if size == 0:
        return None
    if size is None:  # auto: smallest square that fits, rounded up to a multiple of 8
        need = max(x1 - x0, y1 - y0) + MARGIN * 2
        size = -(-need // 8) * 8
    cx = (x0 + x1) // 2
    left = cx - size // 2
    bottom = y1 + MARGIN
    return (left, bottom - size, left + size, bottom)


def merge_holds(frames, durations):
    """Identical frames in a row (a 'hold') become one frame with the summed duration.
    Completely empty frames are skipped (their time goes to the previous frame)."""
    pairs = [(f, d) for f, d in zip(frames, durations)]
    while pairs and pairs[0][0].getbbox() is None:   # drop empty frames at the start
        pairs.pop(0)
    out_f, out_d = [pairs[0][0]], [pairs[0][1]]
    for f, d in pairs[1:]:
        if f.getbbox() is None:
            print('  (skipped an empty frame - check the end of your CSP timeline)')
            out_d[-1] += d
        elif ImageChops.difference(f, out_f[-1]).getbbox() is None:
            out_d[-1] += d
        else:
            out_f.append(f)
            out_d.append(d)
    return out_f, out_d


def save_gif(frames, durations, path):
    frames, durations = merge_holds(frames, durations)
    colors = []
    for fr in frames:
        for c in fr.getdata():
            if c[3] >= 128 and c[:3] not in colors:
                colors.append(c[:3])
    if len(colors) > 64:
        sys.exit(f'{len(colors)} colors: this looks blurred already. Export from CSP at 100% instead.')
    lut = {c: i + 1 for i, c in enumerate(colors)}  # index 0 = transparent
    pal = [0, 0, 0] + [v for c in colors for v in c]
    pal += [0] * (768 - len(pal))
    out = []
    for fr in frames:
        p = Image.new('P', fr.size, 0)
        p.putpalette(pal)
        p.putdata([lut[c[:3]] if c[3] >= 128 else 0 for c in fr.getdata()])
        out.append(p)
    out[0].save(path, save_all=True, append_images=out[1:], duration=durations,
                loop=0, transparency=0, disposal=2, optimize=False)
    return len(colors), len(out), sum(durations)


def main():
    src, dst = sys.argv[1], sys.argv[2]
    scale = int(sys.argv[3]) if len(sys.argv) > 3 else 8
    size = int(sys.argv[4]) if len(sys.argv) > 4 else None

    frames, durations = load_frames(src)
    box = crop_box(frames, size)
    if box:
        frames = [f.crop(box) for f in frames]  # crop() pads with transparency if needed
    frames = [f.resize((f.width * scale, f.height * scale), Image.NEAREST) for f in frames]

    if dst.lower().endswith('.png'):
        frames[0].save(dst)
        n = len(set(c for c in frames[0].getdata() if c[3] >= 128))
        print(f'{dst}: {frames[0].width}x{frames[0].height}, {n} colors')
    else:
        n, count, total = save_gif(frames, durations, dst)
        print(f'{dst}: {frames[0].width}x{frames[0].height}, {count} frames, {n} colors, {total / 1000:.2f}s per loop')


if __name__ == '__main__':
    main()

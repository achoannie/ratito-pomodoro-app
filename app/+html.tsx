import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>Ratito</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#F3E5BE" />
            <link rel="apple-touch-icon" href="/icons/icon-192.png" />

            <ScrollViewStyleReset />

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                          if ('serviceWorker' in navigator) {
                            window.addEventListener('load', function () {
                              navigator.serviceWorker.register('/sw.js');
                            });
                          }`,
                }}
            />
        </head>
        <body>{children}</body>
        </html>
    );
}
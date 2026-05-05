import './globals.css';

export const metadata = {
  title: 'Halal Rizq — Earn Extra Halal Income in Lagos',
  description:
    'Discover simple, Shariah-compliant side hustles that regular Muslims are using to make ₦50,000–₦150,000+ monthly from their phone.',
  openGraph: {
    title: 'Halal Rizq — Earn Extra Halal Income in Lagos',
    description:
      'Shariah-compliant side hustles making ₦50k–₦150k+ monthly. No riba. No gambling. Pure barakah.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '967389422604324');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=967389422604324&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}

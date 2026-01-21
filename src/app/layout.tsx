// This root layout is required by Next.js App Router.
// It simply passes children through to the [locale] layout which handles the actual HTML structure.
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

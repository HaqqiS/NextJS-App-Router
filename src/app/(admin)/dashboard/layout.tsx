export default function Layout({
    children,
    products,
    analytics,
    payments,
}: {
    children: React.ReactNode;
    products: React.ReactNode;
    analytics: React.ReactNode;
    payments: React.ReactNode;
}) {
    return (
        <div className="p-5 gap-5 grid grid-cols-2 ">
            <div className="col-span-2">{children}</div>
            <div>{products}</div>
            <div>{analytics}</div>
            <div className="col-span-2">{payments}</div>
        </div>
    );
}

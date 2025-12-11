export function BackgroundBlobs() {
    return (
        <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-60" />
            <div className="absolute top-48 -right-24 w-80 h-80 bg-rose-200 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-50" />
        </div>
    );
}
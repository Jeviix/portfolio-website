export const PixelBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        {/* Organic golden blob shape */}
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/4 -translate-y-1/4 opacity-90"
          style={{
            background: `radial-gradient(circle at 30% 30%, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 40%, hsl(var(--primary) / 0.6) 60%, hsl(var(--primary) / 0.3) 80%, transparent 100%)`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'blob 20s ease-in-out infinite'
          }}
        />
        
        {/* Subtle secondary blob */}
        <div 
          className="absolute top-1/2 right-0 w-[400px] h-[400px] translate-x-1/4 -translate-y-1/2 opacity-30"
          style={{
            background: `radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.5) 50%, transparent 100%)`,
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            animation: 'blob 25s ease-in-out infinite reverse'
          }}
        />
      </div>
    </div>
  );
};
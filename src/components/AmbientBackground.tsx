export function AmbientBackground() {
  return (
    <div className="ambient-glow" aria-hidden="true">
      <span
        style={{
          top: '-10%',
          left: '10%',
          width: 420,
          height: 420,
          background: 'var(--color-accent)',
        }}
      />
      <span
        style={{
          top: '25%',
          right: '5%',
          width: 380,
          height: 380,
          background: 'var(--color-accent-2)',
        }}
      />
      <span
        style={{
          bottom: '5%',
          left: '20%',
          width: 460,
          height: 460,
          background: 'var(--color-accent)',
        }}
      />
    </div>
  )
}

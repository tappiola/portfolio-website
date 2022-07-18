export function SectionTitle({ children }) {
  return (
    <h1
      className="text-3xl font-bold mb-12 text-stone-300 mx-auto w-fit leading-relaxed lowercase"
      style={{
        fontWeight: 300,
        fontFamily: 'Source Code Pro',
        letterSpacing: '0.08em',
      }}
    >
      -
      {' '}
      {children}
      {' '}
      -
    </h1>
  );
}

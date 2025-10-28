export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="blue"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      {/* Base da pirâmide */}
      <line x1="20" y1="80" x2="80" y2="80" />

      {/* Lado esquerdo */}
      <line x1="20" y1="80" x2="50" y2="30" />

      {/* Lado direito */}
      <line x1="80" y1="80" x2="50" y2="30" />

      {/* Linha de sombra lateral para dar perspectiva */}
      <line x1="50" y1="30" x2="60" y2="80" stroke="blue" />
    </svg>
  );
}

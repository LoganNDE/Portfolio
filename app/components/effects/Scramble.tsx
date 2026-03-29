"use client";
import { useScramble } from "use-scramble";

export function ScrambleText({ text }: { text: string }) {
  const { ref } = useScramble({
    text,
    speed: 0.4,    // más lento (0-1, cuanto menor más suave)
    tick: 1,       // frames entre cada update
    step: 1,       // letras que revela por tick (1 = muy suave)
    scramble: 4,   // veces que scramble cada letra antes de revelar
    seed: 2,       // letras aleatorias visibles al inicio
    chance: 0.8,   // probabilidad de scramble por letra (0-1)
    overdrive: false, // evita el efecto brusco final
  });

  return <span ref={ref} />;
}
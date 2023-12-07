import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  const [count, setCount] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const countDown = setInterval(() => {
      setCount((s) => s - 1);
    }, 1000);
    if (count < 1) router.push("/", { scroll: false });
    return () => {
      clearInterval(countDown);
    };
  }, [count]);

  return (
    <div className="z-40 flex h-screen items-center justify-center text-white">
      <h2>Pagina Não Encontrada retornando em : {count}</h2>
    </div>
  );
}

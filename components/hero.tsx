import Logo from '@/app/logo'

export default function Hero() {
  return (

    <section className="h-screen flex flex-col items-center justify-center animate-fade-in">
<h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center font-sans">
<span className="text-neutral-400">{'['}</span>
<span className="mx-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 animate-wave">


         seu nome aqui
        </span>
        <span className="text-neutral-400">{']'}</span>
      </h1>
        <Logo className="w-74 h-74 mt--22 animate-pulse text-blue-600" />
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center font-sans">
  
      </h1>
      <p className="mt-6 text-xl text-neutral-300"></p>
    </section>
  )
}

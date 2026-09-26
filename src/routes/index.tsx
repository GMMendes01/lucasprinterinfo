import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, MapPin, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-printer.svg";
import heroImage from "@/assets/printer-source-0.jpg.asset.json";
import deliveryImage from "@/assets/printer-source-2.jpg.asset.json";
import consumablesImage from "@/assets/printer-source-4.jpg.asset.json";
import partsImage from "@/assets/printer-source-3.jpg.asset.json";
import wifiImage from "@/assets/printer-source-5.jpg.asset.json";

const whatsapp = "https://wa.me/5511990153067";
const whatsappService = (service: string) => `${whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de informações sobre ${service}.`)}`;

const services = [
  { number: "01", title: "Troca de consumíveis", category: "SUPRIMENTOS", image: consumablesImage.url, alt: "Técnico substituindo o toner de uma impressora", href: whatsappService("troca de consumíveis") },
  { number: "02", title: "Troca de peças", category: "MANUTENÇÃO", image: partsImage.url, alt: "Manutenção das peças internas de uma impressora", href: whatsappService("troca de peças") },
  { number: "03", title: "Configuração Wi-Fi", category: "CONECTIVIDADE", image: wifiImage.url, alt: "Pessoa utilizando um celular para conexão sem fio", href: whatsappService("configuração de impressora no Wi-Fi") },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Printer Informática | Conserto e manutenção de impressoras em São Paulo" },
      { name: "description", content: "Manutenção de impressoras delivery em São Paulo. Visita técnica, troca de consumíveis, troca de peças e configuração Wi-Fi. Fale com a Printer Informática." },
      { property: "og:title", content: "Printer Informática | Manutenção de impressoras" },
      { property: "og:description", content: "Conserto de impressoras com visita técnica no local em São Paulo. Agende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-hidden bg-background">
      <header className="relative z-20 bg-ink text-ink-foreground">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 md:h-28 md:px-10">
          <a href="#inicio" className="block w-44 shrink-0 md:w-56" aria-label="Printer Informática — início">
            <img src={logo} alt="Printer Informática" className="h-auto w-full" />
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-[13px] font-semibold uppercase text-ink-foreground/75 lg:flex">
            <a className="transition-colors hover:text-signal" href="#servicos">Serviços</a>
            <a className="transition-colors hover:text-signal" href="#atendimento">Atendimento</a>
            <a className="transition-colors hover:text-signal" href="#sobre">Sobre nós</a>
            <a className="transition-colors hover:text-signal" href="#contato">Contato</a>
          </nav>
          <Button asChild className="h-11 rounded-sm bg-signal px-4 text-xs font-bold uppercase text-signal-foreground shadow-none hover:bg-signal/90 md:px-6">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">Agendar visita <ArrowUpRight aria-hidden="true" /></a>
          </Button>
        </div>
      </header>

      <section id="inicio" className="relative isolate min-h-[620px] bg-ink text-ink-foreground sm:min-h-[660px] lg:min-h-[690px]">
        <img src={heroImage.url} alt="Técnico atendendo uma impressora" className="absolute inset-0 -z-20 h-full w-full object-cover object-[42%_center]" fetchPriority="high" />
        <div className="hero-shade absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-6 pb-16 pt-8 sm:min-h-[660px] sm:pt-16 md:px-10 lg:min-h-[690px]">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase text-signal"><span className="h-2 w-2 bg-signal" /> PRINTER INFORMÁTICA · SÃO PAULO</p>
            <h1 className="font-display text-[3.5rem] font-bold uppercase leading-[0.87] text-ink-foreground sm:text-[clamp(4rem,8vw,8rem)]">Sua impressora<br /><span className="text-signal">funcionando.</span><br />Seu dia fluindo.</h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ink-foreground/85 md:text-lg">Conserto e manutenção de impressoras com atendimento no local. Qualidade, praticidade e eficiência para você seguir em frente.</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button asChild className="h-14 rounded-sm bg-signal px-7 text-sm font-bold uppercase text-signal-foreground shadow-none hover:bg-signal/90">
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">Agendar visita técnica <ArrowUpRight aria-hidden="true" /></a>
              </Button>
              <a href="#servicos" className="inline-flex items-center gap-2 border-b border-ink-foreground/50 pb-1 text-sm font-semibold text-ink-foreground transition-colors hover:border-signal hover:text-signal">Conheça os serviços <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-ink-foreground/25 bg-ink/70 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 text-[11px] font-semibold uppercase text-ink-foreground/80 md:px-10">
            <span>Atendimento onde você estiver</span><span className="hidden sm:block">Visita técnica & diagnóstico no local</span><span>Desde 2016</span>
          </div>
        </div>
      </section>

      <section id="atendimento" className="bg-ink py-10 text-ink-foreground md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1fr_1.05fr] md:gap-20 md:px-10">
          <div className="relative aspect-[5/4] overflow-hidden bg-secondary md:aspect-[4/4]">
            <img src={deliveryImage.url} alt="Impressora multifuncional para atendimento técnico" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute bottom-0 left-0 bg-signal px-6 py-4 font-display text-2xl font-bold uppercase text-signal-foreground">Atendimento delivery</div>
          </div>
          <div>
            <p className="mb-5 text-xs font-bold uppercase text-signal">01 / NOSSO JEITO DE ATENDER</p>
            <h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] font-bold uppercase leading-[0.91]">A solução vai <span className="text-signal">até você.</span></h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/70 md:text-lg">Manutenção de impressoras delivery com atendimento personalizado. Nossa equipe vai até o seu local, realiza a visita técnica e faz o diagnóstico do equipamento.</p>
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-ink-foreground/20 pt-7 text-sm text-ink-foreground/80">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 shrink-0 text-signal" size={19} aria-hidden="true" /> Visita técnica no local</div>
              <div className="flex items-start gap-3"><Wrench className="mt-0.5 shrink-0 text-signal" size={19} aria-hidden="true" /> Diagnóstico personalizado</div>
            </div>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 border-b border-signal pb-2 text-sm font-bold uppercase text-signal transition-opacity hover:opacity-75">Fale com a gente <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end">
            <div><p className="mb-4 text-xs font-bold uppercase text-muted-foreground">02 / O QUE FAZEMOS</p><h2 className="font-display text-[clamp(3.75rem,7vw,7rem)] font-bold uppercase leading-[0.9]">Nossos serviços<span className="text-signal">.</span></h2></div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:pb-2">Cuidado técnico para a sua impressora, da reposição de componentes à conexão com seus dispositivos.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="group bg-card">
                <a href={service.href} target="_blank" rel="noopener noreferrer" aria-label={`Consultar ${service.title} pelo WhatsApp`} className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  <div className="relative aspect-[1.22] overflow-hidden bg-muted"><img src={service.image} alt={service.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute left-5 top-5 bg-ink px-3 py-2 font-display text-xl font-bold text-ink-foreground">{service.number}</span></div>
                  <div className="border border-border border-t-0 p-6 md:p-7"><p className="text-[11px] font-bold uppercase text-muted-foreground">{service.category}</p><div className="mt-3 flex min-h-16 items-center justify-between gap-4"><h3 className="font-display text-3xl font-bold uppercase leading-none md:text-4xl">{service.title}</h3><ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={25} aria-hidden="true" /></div><p className="mt-6 border-t border-border pt-4 text-xs font-semibold uppercase text-muted-foreground">Consultar disponibilidade <span aria-hidden="true">↗</span></p></div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-signal py-16 text-signal-foreground md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-end md:px-10">
          <div><p className="mb-4 text-xs font-bold uppercase">03 / VISITA TÉCNICA</p><h2 className="max-w-3xl font-display text-[clamp(3.5rem,6vw,6rem)] font-bold uppercase leading-[0.9]">Vamos fazer sua impressora voltar a trabalhar.</h2><p className="mt-6 max-w-xl text-sm leading-relaxed md:text-base">Agende pelo WhatsApp. O valor da visita técnica pode variar conforme a localidade.</p></div>
          <Button asChild className="h-14 shrink-0 rounded-sm bg-ink px-7 text-sm font-bold uppercase text-ink-foreground shadow-none hover:bg-ink/85"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp <ArrowUpRight aria-hidden="true" /></a></Button>
        </div>
      </section>

      <section id="sobre" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-10">
          <div><p className="mb-5 text-xs font-bold uppercase text-muted-foreground">04 / SOBRE NÓS</p><h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] font-bold uppercase leading-[0.9]">Compromisso com cada <span className="text-muted-foreground">impressão.</span></h2></div>
          <div className="flex flex-col justify-end"><p className="max-w-2xl text-lg leading-relaxed md:text-2xl">Desde 2016, a Printer Informática atende às necessidades de manutenção de impressoras na região de São Paulo. Profissionalismo, qualidade e eficiência em cada atendimento.</p><div className="mt-10 flex items-end justify-between gap-5 border-t border-border pt-7"><div><span className="font-display text-6xl font-bold leading-none md:text-7xl">2016</span><p className="mt-2 text-xs font-semibold uppercase text-muted-foreground">Ano de fundação</p></div><ArrowRight size={40} strokeWidth={1.5} aria-hidden="true" /></div></div>
        </div>
      </section>

      <footer id="contato" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16 md:px-10 md:py-20">
          <div><img src={logo} alt="Printer Informática" className="w-56" /><p className="mt-7 max-w-xs text-sm leading-relaxed text-ink-foreground/60">Qualidade, praticidade e eficiência em manutenção de impressoras.</p></div>
          <div><h2 className="mb-5 text-xs font-bold uppercase text-signal">Contato</h2><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg font-semibold hover:text-signal"><Phone size={18} aria-hidden="true" /> (11) 99015-3067</a><p className="mt-4 flex items-center gap-3 text-sm text-ink-foreground/60"><MapPin size={18} aria-hidden="true" /> Região de São Paulo</p></div>
          <div><h2 className="mb-5 text-xs font-bold uppercase text-signal">Horário de atendimento</h2><p className="flex items-start gap-3 text-sm leading-7 text-ink-foreground/75"><Clock3 size={18} className="mt-1 shrink-0" aria-hidden="true" /><span>Seg – Qui: 8h às 18h<br />Sex: 8h às 17h</span></p></div>
        </div>
        <div className="border-t border-ink-foreground/15"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-6 py-6 text-xs text-ink-foreground/50 md:px-10"><span>© {new Date().getFullYear()} Printer Informática.</span><span>Conserto de impressoras em São Paulo</span></div></div>
      </footer>
    </main>
  );
}
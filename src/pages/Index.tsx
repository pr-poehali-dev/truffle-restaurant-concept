import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/9d27bf10-8561-40c5-9aaa-e0b324e341ac/files/8c29fcd8-46a2-4a1e-9b36-3d7b9e9ed4e6.jpg";
const CHEF_IMG = "https://cdn.poehali.dev/projects/9d27bf10-8561-40c5-9aaa-e0b324e341ac/bucket/b090f028-0a56-4f78-978d-28ff8bb8a31f.png";
const PASTA_IMG = "https://cdn.poehali.dev/projects/9d27bf10-8561-40c5-9aaa-e0b324e341ac/files/ce578270-869e-476d-b5da-be8580bebefe.jpg";

const navLinks = [
  { label: "История", href: "#storia" },
  { label: "Блюдо", href: "#piatto" },
  { label: "Варвара", href: "#interno" },
  { label: "Бронирование", href: "#prenotazione" },
  { label: "Контакты", href: "#contatti" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", date: "", time: "", guests: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grain" style={{ background: "var(--cream)" }}>
      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
        style={{ background: "linear-gradient(to bottom, rgba(247,243,237,0.95) 0%, transparent 100%)" }}
      >
        <a href="#top" className="font-display text-2xl tracking-widest" style={{ color: "var(--charcoal)", letterSpacing: "0.25em", fontFamily: "'Cormorant Garamond', serif" }}>
          Varvara
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--charcoal)" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu-enter fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "var(--cream)" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", letterSpacing: "0.2em", color: "var(--charcoal)" }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="top" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <img src={HERO_IMG} alt="Varvara interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(42,37,32,0.35) 0%, rgba(42,37,32,0.55) 100%)" }} />
        </div>
        <div className="relative z-10 text-center px-6 animate-fade-up">
          <p className="section-eyebrow" style={{ color: "var(--gold-light)" }}>Ristorante · Москва</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(4rem, 12vw, 9rem)", fontWeight: 300, letterSpacing: "0.15em", lineHeight: 1, color: "#fff" }}>
            Varvara
          </h1>
          <p className="animate-fade-up delay-200" style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "clamp(1rem, 2.5vw, 1.5rem)", color: "rgba(255,255,255,0.85)", fontWeight: 300, marginTop: "1rem" }}>
            Un piatto. Una perfezione.
          </p>
          <div className="divider-gold w-24 mx-auto animate-fade-up delay-300" style={{ marginTop: "2rem", marginBottom: "2rem" }} />
          <p className="animate-fade-up delay-400" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.85rem, 1.5vw, 1rem)", letterSpacing: "0.15em", color: "rgba(255,255,255,0.65)" }}>
            Трюфельная паста · Максим Салабуга
          </p>
        </div>
        <div className="absolute bottom-10 flex flex-col items-center gap-2 scroll-indicator" style={{ color: "rgba(255,255,255,0.45)" }}>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* STORIA */}
      <section id="storia" className="py-32 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="img-hover">
            <img src={CHEF_IMG} alt="Максим Салабуга" className="w-full aspect-[3/4] object-cover" style={{ filter: "sepia(8%)" }} />
          </div>
          <div>
            <p className="section-eyebrow">Storia</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 300, lineHeight: 1.1, color: "var(--charcoal)", marginBottom: "1.5rem" }}>
              Максим<br />
              <span style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", color: "var(--stone-dark)" }}>Салабуга</span>
            </h2>
            <div className="divider-gold" style={{ width: "3rem", marginBottom: "2rem" }} />
            <p style={{ color: "var(--stone-dark)", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "1.2rem" }}>
              Шестнадцать лет в Италии сформировали в Максиме убеждение, которое стало основой Varvara: великое блюдо не нуждается в обилии. Оно нуждается в честности.
            </p>
            <p style={{ color: "var(--stone-dark)", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "1.2rem" }}>
              Работая на кухнях Флоренции, Болоньи и Альбы, он изучил технику приготовления пасты как медитативный ритуал — каждое движение, каждый грамм муки, каждая секунда имеют значение.
            </p>
            <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", color: "var(--charcoal)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              «Varvara — это имя, которое звучит как поэзия. Именно так должна звучать настоящая итальянская кухня.»
            </p>
            <p style={{ marginTop: "1rem", fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>— Максим Салабуга</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-24 grid md:grid-cols-3 gap-12">
          {[
            { num: "01", title: "Аутентичность", text: "Только итальянские методы, передаваемые из поколения в поколение. Никаких компромиссов." },
            { num: "02", title: "Чистота продукта", text: "Один источник трюфелей, проверенный лично. Мука из полбы с мельницы в Умбрии." },
            { num: "03", title: "Радикальная простота", text: "Одно блюдо. Один шеф. Одна философия. Никаких отвлечений от совершенства." },
          ].map((item) => (
            <div key={item.num} className="border-t pt-8" style={{ borderColor: "var(--stone)" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", color: "var(--stone)", fontWeight: 300, marginBottom: "1rem" }}>{item.num}</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--charcoal)", marginBottom: "0.75rem" }}>{item.title}</h3>
              <p style={{ color: "var(--stone-dark)", fontSize: "0.85rem", lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PIATTO */}
      <section id="piatto" className="py-32" style={{ background: "var(--cream-dark)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="section-eyebrow">Il Piatto</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "var(--charcoal)" }}>
              Трюфельная паста
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-0 items-center">
            <div className="md:col-span-3 img-hover overflow-hidden">
              <img src={PASTA_IMG} alt="Трюфельная паста Varvara" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="md:col-span-2 px-8 py-12" style={{ background: "var(--charcoal)" }}>
              <p className="section-eyebrow" style={{ color: "var(--gold)" }}>Ритуал подачи</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, lineHeight: 1.2, color: "#fff", marginBottom: "1.5rem" }}>
                Единственное блюдо —<br />
                <span style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", color: "var(--gold-light)" }}>бесконечное совершенство</span>
              </h3>
              <div className="divider-gold" style={{ width: "2rem", marginBottom: "2rem" }} />
              <div className="space-y-5">
                {[
                  { step: "I", text: "Тесто раскатывается вручную при вас в открытой кухне" },
                  { step: "II", text: "Паста варится ровно 3 минуты в подсоленной воде из Доломитовых Альп" },
                  { step: "III", text: "Трюфель натирается над тарелкой непосредственно за столом" },
                  { step: "IV", text: "Пять минут тишины — только аромат и предвкушение" },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "var(--gold)", minWidth: "1.5rem" }}>{s.step}</span>
                    <p style={{ color: "rgba(247,243,237,0.65)", fontSize: "0.82rem", lineHeight: 1.75 }}>{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(196,169,106,0.3)" }}>
                <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", color: "var(--gold-light)", fontSize: "1rem" }}>
                  «Паста не просто подаётся — она исполняется»
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Мука", value: "Полба, Умбрия" },
              { label: "Трюфель", value: "Alba, Пьемонт" },
              { label: "Яйцо", value: "Фермерское, Тоскана" },
              { label: "Масло", value: "Extra virgin, холодный отжим" },
            ].map((i) => (
              <div key={i.label} className="border-t pt-6" style={{ borderColor: "var(--stone)" }}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--stone-dark)", marginBottom: "0.5rem" }}>{i.label}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--charcoal)", fontWeight: 400 }}>{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VARVARA — the name */}
      <section id="interno" className="py-32" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Il Nome</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.05, marginBottom: "2rem" }}>
            Varvara — это не концепция.<br />
            <span style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", color: "var(--stone-dark)" }}>Это человек.</span>
          </h2>
          <div className="divider-gold w-16 mx-auto" style={{ marginBottom: "2.5rem" }} />
          <p style={{ color: "var(--stone-dark)", fontSize: "1rem", lineHeight: 2, maxWidth: "640px", margin: "0 auto 1.5rem" }}>
            Максим назвал ресторан в честь своей любимой. Варвара — женщина, ради которой он вернулся из Италии. Женщина, чей смех он слышал, когда придумывал это место.
          </p>
          <p style={{ color: "var(--stone-dark)", fontSize: "1rem", lineHeight: 2, maxWidth: "640px", margin: "0 auto 1.5rem" }}>
            Здесь нет концепции ради концепции. Есть только желание накормить человека, которого любишь, — самым честным и нежным блюдом, которое умеешь готовить.
          </p>
          <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "1.35rem", color: "var(--charcoal)", maxWidth: "520px", margin: "2.5rem auto 0", lineHeight: 1.7 }}>
            «Каждый гость здесь — немного Варвара. Каждая тарелка — немного любовное письмо.»
          </p>
          <p style={{ marginTop: "1rem", fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>— Максим Салабуга</p>
        </div>
      </section>

      {/* PRENOTAZIONE */}
      <section id="prenotazione" className="py-32" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-eyebrow" style={{ color: "var(--gold)" }}>Prenotazione</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#fff" }}>
              Забронировать столик
            </h2>
            <p style={{ marginTop: "1rem", color: "rgba(247,243,237,0.45)", fontSize: "0.75rem", letterSpacing: "0.12em" }}>
              Открыто ежедневно, кроме воскресенья · 12:00 — 13:00
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="divider-gold w-16 mx-auto" style={{ marginBottom: "2rem" }} />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: "#fff", marginBottom: "0.75rem" }}>
                Grazie
              </p>
              <p style={{ color: "rgba(247,243,237,0.55)", fontSize: "0.85rem" }}>
                Ваша заявка принята. Мы свяжемся с вами для подтверждения.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--stone)", display: "block", marginBottom: "0.75rem" }}>Имя</label>
                  <input className="varvara-input" style={{ color: "var(--cream)", borderBottomColor: "rgba(200,187,168,0.35)" }}
                    placeholder="Ваше имя"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                  <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--stone)", display: "block", marginBottom: "0.75rem" }}>Телефон</label>
                  <input className="varvara-input" style={{ color: "var(--cream)", borderBottomColor: "rgba(200,187,168,0.35)" }}
                    placeholder="+7 (999) 000-00-00"
                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                <div>
                  <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--stone)", display: "block", marginBottom: "0.75rem" }}>Дата</label>
                  <input type="date" className="varvara-input" style={{ color: "var(--cream)", borderBottomColor: "rgba(200,187,168,0.35)" }}
                    value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
                </div>
                <div>
                  <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--stone)", display: "block", marginBottom: "0.75rem" }}>Время</label>
                  <input className="varvara-input" style={{ color: "var(--cream)", borderBottomColor: "rgba(200,187,168,0.35)" }}
                    placeholder="12:00" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} required />
                </div>
                <div>
                  <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--stone)", display: "block", marginBottom: "0.75rem" }}>Гостей</label>
                  <input type="number" min="1" max="8" className="varvara-input" style={{ color: "var(--cream)", borderBottomColor: "rgba(200,187,168,0.35)" }}
                    placeholder="2" value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} required />
                </div>
              </div>
              <div className="text-center pt-4">
                <button type="submit"
                  style={{ background: "var(--gold)", color: "var(--charcoal)", fontFamily: "Montserrat, sans-serif", fontWeight: 500, letterSpacing: "0.2em", fontSize: "0.7rem", textTransform: "uppercase", padding: "1rem 3.5rem", transition: "opacity 0.3s ease", border: "none", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                  Подтвердить бронирование
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="py-24" style={{ background: "var(--cream-dark)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="section-eyebrow">Contatti</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300, color: "var(--charcoal)", marginBottom: "1.2rem" }}>Контакты</h3>
              <div className="space-y-4">
                <a href="tel:+79315338586" className="flex items-center gap-3" style={{ color: "var(--stone-dark)", fontSize: "0.85rem", textDecoration: "none" }}>
                  <Icon name="Phone" size={13} />
                  <span>+7 931 533 8586</span>
                </a>
                <a href="https://t.me/ZCIV5" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3" style={{ color: "var(--stone-dark)", fontSize: "0.85rem", textDecoration: "none" }}>
                  <Icon name="Send" size={13} />
                  <span>@ZCIV5</span>
                </a>
              </div>
            </div>
            <div>
              <p className="section-eyebrow">Orario</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300, color: "var(--charcoal)", marginBottom: "1.2rem" }}>Часы работы</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span style={{ color: "var(--stone-dark)", fontSize: "0.82rem" }}>Пн — Сб</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "var(--charcoal)" }}>12:00 — 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--stone-dark)", fontSize: "0.82rem" }}>Воскресенье</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "var(--stone-dark)" }}>Закрыто</span>
                </div>
              </div>
              <p style={{ marginTop: "1rem", fontSize: "0.75rem", fontStyle: "italic", color: "var(--stone-dark)", opacity: 0.7 }}>
                Только по предварительному бронированию
              </p>
            </div>
            <div>
              <p className="section-eyebrow">Indirizzo</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300, color: "var(--charcoal)", marginBottom: "1.2rem" }}>Адрес</h3>
              <p style={{ color: "var(--stone-dark)", fontSize: "0.85rem", lineHeight: 1.8 }}>
                Москва<br />
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--stone)" }}>Подвал шэфа Салабуги</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center" style={{ background: "var(--charcoal)" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", letterSpacing: "0.3em", color: "var(--cream)", marginBottom: "0.5rem" }}>Varvara</p>
        <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", color: "rgba(247,243,237,0.3)", fontSize: "0.85rem" }}>Un piatto. Una perfezione.</p>
        <div className="divider-gold w-16 mx-auto my-6" style={{ opacity: 0.3 }} />
        <p style={{ color: "rgba(247,243,237,0.2)", fontSize: "0.6rem", letterSpacing: "0.18em" }}>
          © 2026 VARVARA RISTORANTE · МАКСИМ САЛАБУГА
        </p>
      </footer>
    </div>
  );
}
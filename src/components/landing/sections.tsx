import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import DeliveryCalculator from "./DeliveryCalculator"
import Icon from "@/components/ui/icon"

const deliveryTerms = [
  { method: "Авиа", days: "14–21 день", icon: "Plane", desc: "Быстрая доставка для лёгких грузов" },
  { method: "Ж/Д + авто", days: "25–35 дней", icon: "Train", desc: "Оптимально по цене и скорости" },
  { method: "Морской", days: "45–60 дней", icon: "Ship", desc: "Крупные партии по минимальной цене" },
]

const features = [
  { icon: "ShieldCheck", label: "Проверка перед отправкой", desc: "Контроль качества на складе в Китае" },
  { icon: "Package", label: "Любые категории товаров", desc: "Электроника, одежда, оборудование и другое" },
  { icon: "Headphones", label: "Поддержка 24/7", desc: "Всегда на связи — от заказа до получения" },
  { icon: "Wallet", label: "Прозрачные цены", desc: "Никаких скрытых комиссий и наценок" },
]

function DeliveryTermsContent({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl"
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {deliveryTerms.map((item, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
          <Icon name={item.icon as "Plane"} size={28} className="text-[#FF4D00] mb-3" />
          <p className="text-white font-semibold text-lg">{item.method}</p>
          <p className="text-[#FF4D00] font-bold mt-1">{item.days}</p>
          <p className="text-white/50 text-sm mt-2">{item.desc}</p>
        </div>
      ))}
    </motion.div>
  )
}

function FeaturesContent({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {features.map((f, i) => (
        <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
          <Icon name={f.icon as "ShieldCheck"} size={22} className="text-[#FF4D00] mt-0.5 shrink-0" />
          <div>
            <p className="text-white font-semibold">{f.label}</p>
            <p className="text-white/50 text-sm mt-0.5">{f.desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

function ContactsContent({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="mt-8 flex flex-col gap-4 max-w-md"
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {[
        { icon: "Phone", label: "+7 933 338-12-60", href: "tel:+79333381260" },
        { icon: "Mail", label: "baskakov.838@mail.ru", href: "mailto:baskakov.838@mail.ru" },
        { icon: "Send", label: "@levikzzz в Telegram", href: "https://t.me/levikzzz" },
      ].map((c, i) => (
        <a
          key={i}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <Icon name={c.icon as "Phone"} size={20} className="text-[#FF4D00] shrink-0" />
          <span className="text-base">{c.label}</span>
        </a>
      ))}
    </motion.div>
  )
}

function CalculatorSection({ isActive }: { isActive: boolean }) {
  return <DeliveryCalculator isActive={isActive} />
}

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Доставка из Китая</Badge>,
    title: "LevikChinaShop.",
    content: "Заказываем любые товары из Китая под ключ — от поиска до доставки прямо к вашей двери.",
    showButton: true,
    buttonText: 'Написать в Telegram',
    buttonHref: 'https://t.me/levikzzz',
    button2Text: 'Написать в MAX',
    button2Href: 'https://max.ru/u/f9LHodD0cOKYQkj3JyM0drJlgrOvIrboq92z46Qr_4VXB7vyRCel9FmKCws',
  },
  {
    id: 'about',
    title: 'Почему мы?',
    titleSize: "small" as const,
    customContentComponent: FeaturesContent,
  },
  {
    id: 'delivery',
    title: 'Сроки доставки',
    titleSize: "small" as const,
    content: "Выбирайте способ доставки в зависимости от срочности и бюджета.",
    customContentComponent: DeliveryTermsContent,
  },
  {
    id: 'calculator',
    title: 'Рассчитайте стоимость',
    titleSize: "small" as const,
    content: "Введите вес и объём вашего груза — калькулятор покажет примерную стоимость доставки.",
    customContentComponent: CalculatorSection,
  },
  {
    id: 'contacts',
    title: 'Свяжитесь с нами',
    titleSize: "small" as const,
    content: "Расскажите о вашем заказе — ответим быстро и подберём лучший вариант.",
    customContentComponent: ContactsContent,
  },
]
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const WEIGHT_PRICE = 490
const VOLUME_PRICE = 3500

export default function DeliveryCalculator({ isActive }: { isActive: boolean }) {
  const [weight, setWeight] = useState(1)
  const [volume, setVolume] = useState(0.01)

  const byWeight = Math.ceil(weight) * WEIGHT_PRICE
  const byVolume = Math.ceil(volume * 100) * (VOLUME_PRICE / 100)
  const total = Math.max(byWeight, byVolume)

  return (
    <motion.div
      className="mt-10 w-full max-w-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <p className="text-white/60 text-sm mb-6 uppercase tracking-widest">Калькулятор доставки</p>

      <div className="space-y-5">
        <div>
          <label className="text-white/80 text-sm mb-2 block">Вес груза: <span className="text-white font-semibold">{weight} кг</span></label>
          <input
            type="range"
            min={0.5}
            max={100}
            step={0.5}
            value={weight}
            onChange={e => setWeight(Number(e.target.value))}
            className="w-full accent-[#FF4D00] cursor-pointer"
          />
          <div className="flex justify-between text-white/30 text-xs mt-1">
            <span>0.5 кг</span><span>100 кг</span>
          </div>
        </div>

        <div>
          <label className="text-white/80 text-sm mb-2 block">Объём: <span className="text-white font-semibold">{volume.toFixed(2)} м³</span></label>
          <input
            type="range"
            min={0.01}
            max={2}
            step={0.01}
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
            className="w-full accent-[#FF4D00] cursor-pointer"
          />
          <div className="flex justify-between text-white/30 text-xs mt-1">
            <span>0.01 м³</span><span>2 м³</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
        <div>
          <p className="text-white/50 text-sm">Примерная стоимость</p>
          <p className="text-3xl font-bold text-white mt-1">~{total.toLocaleString("ru-RU")} ₽</p>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
            onClick={() => window.open("https://t.me/levikzzz", "_blank")}
          >
            Telegram
          </Button>
          <Button
            variant="outline"
            className="text-white bg-transparent border-white/40 hover:bg-white hover:text-black transition-colors"
            onClick={() => window.open("https://max.ru/u/f9LHodD0cOKYQkj3JyM0drJlgrOvIrboq92z46Qr_4VXB7vyRCel9FmKCws", "_blank")}
          >
            MAX
          </Button>
        </div>
      </div>
      <p className="text-white/30 text-xs mt-3">* Итоговая цена рассчитывается по большему из двух параметров: вес или объём</p>
    </motion.div>
  )
}
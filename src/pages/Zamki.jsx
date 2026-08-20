import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyMobileCta from '../components/StickyMobileCta';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Quiz from '../components/Quiz';
import TileGrid from '../components/TileGrid';
import PriceBlock from '../components/PriceBlock';
import Steps from '../components/Steps';
import Guarantee from '../components/Guarantee';
import PlaceholderGrid from '../components/PlaceholderGrid';
import MasterBlock from '../components/MasterBlock';
import Faq from '../components/Faq';
import FinalCta from '../components/FinalCta';
import {
  KeyIcon,
  ShieldIcon,
  ClockIcon,
  ToolIcon,
  CheckIcon,
  HouseIcon,
  BuildingIcon,
  CarIcon,
  GarageIcon,
  DocumentIcon,
  IdCardIcon,
  CallRingIcon,
  TagIcon,
  DoorOpenIcon,
  QuestionIcon,
} from '../components/icons/Icons';
import { asset } from '../lib/asset';

export default function Zamki() {
  return (
    <>
      <Header minimal />

      <Hero
        live="Работаем прямо сейчас · 24/7"
        eyebrow="Вскрытие замков · Алматы"
        title="Откроем любую дверь без повреждений"
        subtitle="Точную цену назовём по телефону — на месте она не изменится"
        bullets={['500+ открытых замков']}
        image={asset('work/work-1.webp')}
        imageAlt="Мастер компании Папа Может вскрывает замок"
        chips={[
          { label: 'Выезд от 15 мин', style: { top: '6%', left: '2%' } },
          { label: 'Без повреждений', style: { bottom: '5%', right: '2%' } },
          { label: 'Гарантия', style: { top: '44%', right: '2%' } },
        ]}
      />

      <Marquee
        items={[
          'Алматы и пригород',
          'Без повреждений двери',
          'Выезд от 15 минут',
          'Гарантия на работы',
          'Точная цена по телефону',
        ]}
      />

      <Quiz
        title="Что случилось?"
        lead="Нажмите на свою ситуацию — откроется WhatsApp с готовым сообщением, печатать ничего не нужно."
        options={[
          {
            label: 'Захлопнулась дверь',
            icon: <DoorOpenIcon width={20} height={20} />,
            message: 'Здравствуйте! У меня захлопнулась дверь, нужна помощь.',
          },
          {
            label: 'Потерял ключи',
            icon: <KeyIcon width={20} height={20} />,
            message: 'Здравствуйте! Я потерял ключи от двери, нужно вскрытие.',
          },
          {
            label: 'Сломался замок',
            icon: <ToolIcon width={20} height={20} />,
            message: 'Здравствуйте! У меня сломался замок, нужна помощь.',
          },
          {
            label: 'Другая ситуация',
            icon: <QuestionIcon width={20} height={20} />,
            message: 'Здравствуйте! У меня ситуация с замком, расскажу подробнее.',
          },
        ]}
      />

      <TileGrid
        tone="white"
        eyebrow="Объекты"
        title="Работаем с любыми дверями"
        items={[
          { title: 'Квартира', icon: <KeyIcon width={22} height={22} /> },
          { title: 'Частный дом', icon: <HouseIcon width={22} height={22} /> },
          { title: 'Офис', icon: <BuildingIcon width={22} height={22} /> },
          { title: 'Автомобиль', icon: <CarIcon width={22} height={22} /> },
          { title: 'Сейф', icon: <ShieldIcon width={22} height={22} /> },
          { title: 'Гараж', icon: <GarageIcon width={22} height={22} /> },
        ]}
      />

      <TileGrid
        bento
        eyebrow="Почему мы"
        title="Почему выбирают «Папа Может»"
        items={[
          { title: 'Точная цена до выезда', text: 'Называем сумму по телефону — на месте она не меняется', icon: <CheckIcon width={22} height={22} /> },
          { title: 'Без повреждений', text: 'Вскрываем аккуратно; если дверь пострадает — ремонт за наш счёт', icon: <ShieldIcon width={22} height={22} /> },
          { title: 'Проверяем право доступа', text: 'Уточняем, что вы собственник или прописаны — работаем официально', icon: <CheckIcon width={22} height={22} /> },
          { title: 'Опыт 15+ лет', text: 'Мастер знает все типы замков и дверей', icon: <ToolIcon width={22} height={22} /> },
          { title: 'Гарантия на работы', text: 'Отвечаем за качество выполненной работы', icon: <ShieldIcon width={22} height={22} /> },
          { title: 'Выезд от 15 минут', text: 'Приезжаем быстро в любую точку Алматы', icon: <ClockIcon width={22} height={22} /> },
        ]}
      />

      <PriceBlock
        title="Цена — честно"
        amount="от 15 000 ₸"
        unit="вскрытие двери"
        note="Точную цену мастер называет по телефону сразу, как вы опишете ситуацию — и она не меняется на месте."
        disclaimer="Стоимость зависит от типа и сложности замка, поэтому называем её после короткого разговора, а не гадаем на сайте. Замена личинки, вскрытие сейфа и другие работы — уточняйте по телефону."
      />

      <Steps
        tone="white"
        title="Как проходит вызов"
        items={[
          { title: 'Звоните или пишете', text: 'Опишите ситуацию мастеру', icon: <CallRingIcon width={20} height={20} /> },
          { title: 'Называем точную цену', text: 'Сразу по телефону, до выезда', icon: <TagIcon width={20} height={20} /> },
          { title: 'Выезжаем от 15 минут', text: 'Мастер приезжает по адресу', icon: <ClockIcon width={20} height={20} /> },
          { title: 'Открываем и платите', text: 'По озвученной цене, без доплат', icon: <DoorOpenIcon width={20} height={20} /> },
        ]}
      />

      <Guarantee
        title="Официально и с гарантией"
        lead="Это то, что отличает нас от случайных объявлений в интернете."
        items={[
          { text: 'Оформляем работу документально — чек и акт по запросу', icon: <DocumentIcon width={18} height={18} /> },
          { text: 'Проверяем право доступа перед вскрытием (паспорт, документы на квартиру)', icon: <IdCardIcon width={18} height={18} /> },
          { text: 'Несём ответственность за сохранность двери', icon: <ShieldIcon width={18} height={18} /> },
          { text: 'Даём гарантию на выполненные работы', icon: <CheckIcon width={18} height={18} /> },
        ]}
      />

      <PlaceholderGrid
        tone="white"
        title="Наши работы"
        lead="Мастер за работой — реальные фото."
        images={[
          { src: asset('work/work-2.webp'), alt: 'Вскрытие замка входной двери' },
          { src: asset('work/work-3.webp'), alt: 'Ключи от двери после работы мастера' },
          { src: asset('work/work-4.webp'), alt: 'Мастер вскрывает врезной замок' },
        ]}
      />

      <PlaceholderGrid
        title="Отзывы клиентов"
        lead="Реальные отзывы наших клиентов из 2ГИС."
        note="Отзыв появится здесь"
        images={[
          { src: asset('reviews/review-1.webp'), alt: 'Отзыв клиента о вскрытии сейфа' },
          { src: asset('reviews/review-2.webp'), alt: 'Отзыв клиента о замене замка' },
          null,
        ]}
      />

      <MasterBlock
        tone="white"
        title="Кто откроет вашу дверь"
        name="Асхат Акинбашин"
        role="Мастер по вскрытию замков · опыт 15+ лет"
        bio="Открывает двери любой сложности без повреждений. Работает официально, с проверкой права доступа."
        image={asset('work/master-portrait.webp')}
        imageAlt="Асхат Акинбашин"
      />

      <Faq
        title="Частые вопросы"
        items={[
          {
            q: 'Это законно?',
            a: 'Да, при наличии законных оснований. Перед вскрытием мы уточняем, что вы собственник или прописаны по этому адресу. Если увидим признаки незаконного проникновения — откажем в услуге.',
            icon: <ShieldIcon width={18} height={18} />,
          },
          {
            q: 'Не испортите дверь?',
            a: 'Вскрываем аккуратно, в большинстве случаев без повреждений. Если дверь всё же пострадает при вскрытии — ремонт за наш счёт.',
            icon: <DoorOpenIcon width={18} height={18} />,
          },
          {
            q: 'Дорого ли это?',
            a: 'Вскрытие — от 15 000 ₸. Точную сумму называем по телефону сразу, как опишете ситуацию, и она не меняется на месте.',
            icon: <TagIcon width={18} height={18} />,
          },
          {
            q: 'Как понять, что вы не мошенники?',
            a: 'Называем цену заранее, приезжает конкретный мастер, уточняем ваше право доступа. Ничего не просим оплатить до приезда.',
            icon: <IdCardIcon width={18} height={18} />,
          },
          {
            q: 'Что если вы не сможете открыть?',
            a: 'Для стандартных замков это редкость. Обсудим ситуацию на месте и честно скажем, что можно сделать.',
            icon: <QuestionIcon width={18} height={18} />,
          },
          {
            q: 'Выезжаете по области и в любое время?',
            a: 'Да, работаем круглосуточно, без выходных и праздников. Выезжаем по Алматы и пригороду.',
            icon: <ClockIcon width={18} height={18} />,
          },
          {
            q: 'Нужны ли документы?',
            a: 'Да, попросим подтвердить, что вы собственник или прописаны — паспорт и/или документы на квартиру. Это защищает и вас, и нас.',
            icon: <DocumentIcon width={18} height={18} />,
          },
        ]}
      />

      <FinalCta
        title="Дверь не открывается? Мы уже готовы выехать."
        subtitle="Звоните или пишите в WhatsApp — назовём точную цену и приедем быстро."
      />

      <Footer />
      <StickyMobileCta />
    </>
  );
}

import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hakkımızda - MyRealEstateApp",
  description:
    "MyRealEstateApp hakkında daha fazla bilgi edinin. Vizyonumuz, misyonumuz ve ekibimiz.",
};

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/about" },
  ];

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Hakkımızda</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          MyRealEstateApp, hayalinizdeki evi bulmanıza yardımcı olmak için
          kurulmuş yenilikçi bir emlak platformudur. Amacımız, alıcıları,
          satıcıları ve kiralayanları en güncel ve doğru ilanlarla bir araya
          getirerek, emlak arama ve bulma sürecini kolaylaştırmaktır.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Geniş ilan yelpazemiz, kullanıcı dostu arayüzümüz ve gelişmiş
          filtreleme seçeneklerimiz sayesinde, ihtiyaçlarınıza en uygun
          emlakları hızlıca keşfedebilirsiniz. Şeffaflık, güvenilirlik ve
          müşteri memnuniyeti ilkeleriyle hareket ederek, emlak sektöründe fark
          yaratmayı hedefliyoruz.
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
          Misyonumuz
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Misyonumuz, teknolojiyi kullanarak emlak piyasasını daha erişilebilir,
          şeffaf ve verimli hale getirmektir. Herkesin hayalindeki eve kolayca
          ulaşabilmesini sağlamak için sürekli yenilikler geliştiriyoruz.
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
          Vizyonumuz
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Vizyonumuz, Türkiye&#39;nin lider emlak platformu olmak ve emlak arama
          deneyimini baştan sona dönüştürmektir. Kullanıcılarımıza en iyi
          hizmeti sunarak, emlak sektöründe güvenilir bir köprü kurmayı
          amaçlıyoruz.
        </p>
      </div>
    </div>
  );
}

import React from 'react'

const Service = () => {
  const features = [
    {name: 'Web制作・Web開発', text: '企業サイトの制作から、キャンペーンLP、ECサイト・マッチングアプリなどのWebアプリの開発までを高クオリティ・低コストで担当することができます。'},
    {name: '写真・動画制作', text: 'タレント・モデル様の宣材写真・プロモーション用動画の撮影・編集や、商品の撮影などを行います。また、Web制作と合わせて行うことで、一貫したユーザー体験を提供することが可能になります。'},
    {name: '3D開発', text: 'メタバースが当たり前になる現代において、3Dはインタラクティブな体験を提供するのに重要なツール。商品3D、3DWebサイトを制作することでリッチなユーザー体験を実現します。'},
    {name: '業務効率化ツール開発', text: 'Google Apps Script(GAS)を用いて、請求書の自動作成、メール送信、LINEへの自動通知など煩雑な業務を自動化するための簡易的なツールを開発します。'},
    {name: 'SNS戦略・運営', text: 'SNSのアカウントひとつひとつがユーザーとのタッチポイントです。写真・動画を中心にSNS向けのコンテンツを制作します。'},
    {name: 'ビジネスコンサルティング', text: '元大手出版社の漫画編集者で、海外トップクラスのビジネススクールにMBA留学したエキスパートが、クリエイティブ・ビジネス両方の視点からコンサルティングを行います。'}
  ];

  return (
    <section className="mb-32">
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {features.map((feature) => (
          <div className="p-2" key={feature.name}>
            <h3 className="font-bold text-lg py-2">{feature.name}</h3>
            <p className="font-light text-sm md:text-base lg:text-md py-2">{feature.text}</p>
          </div>
          ))}
      </div>        
    </section>
  )
}

export default Service

import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";

const services = [
  ["🚗", "外观精洗", "预洗去沙、泡沫软化、缝隙刷洗、轮毂清洁，降低划痕风险。"],
  ["🧽", "内饰深清", "座椅、脚垫、中控、空调出风口细节处理，车内更清爽。"],
  ["✨", "漆面养护", "去污、上光、镀膜维护，提升亮度并延缓雨水和灰尘附着。"],
  ["🌬️", "除味杀菌", "臭氧净化配合内饰清洁，适合宠物车、烟味车和雨季霉味。"],
];

const packages = [
  ["日常推荐", "城市快洗", "¥39", ["外观泡沫清洗", "轮毂轮胎冲洗", "车身擦干与吸尘"], false],
  ["店长力荐", "全车精护", "¥168", ["外观精洗与缝隙清洁", "内饰吸尘与皮革养护", "轮胎上光与漆面亮护"], true],
  ["深度焕新", "季度焕新", "¥398", ["全车深度清洁", "漆面去污与镀膜维护", "车内除味杀菌"], false],
] as const;

const steps = [
  ["01", "车况检查", "记录划痕、污渍、内饰材质和重点清洁位置，先沟通再施工。"],
  ["02", "分区清洗", "车身、轮毂、内饰、玻璃分工具处理，减少交叉污染。"],
  ["03", "细节收尾", "门缝、水渍、仪表台、后备箱边角逐项检查，干净不留尾巴。"],
  ["04", "交车确认", "与车主一起验收，并给出后续养护建议，让效果更持久。"],
];

export default function Home() {
  return (
    <>
      <header className="page-shell nav">
        <a className="brand" href="#top" aria-label="澄光汽车洗护中心首页">
          <Image className="brand-mark" src="/assets/logo-car-wash.svg" alt="澄光汽车洗护中心 Logo" width={46} height={46} priority />
          <span>澄光汽车洗护中心</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#services">服务项目</a>
          <a href="#packages">套餐价格</a>
          <a href="#process">洗护流程</a>
          <a href="#booking">预约到店</a>
        </nav>
        <a className="button" href="#booking">立即预约</a>
      </header>

      <main id="top">
        <section className="page-shell hero">
          <div>
            <div className="eyebrow">专业洗车 · 漆面养护 · 内饰精洗</div>
            <h1>让爱车重新<br /><span>发光上路</span></h1>
            <p>从城市通勤到长途归来，我们用标准化洗护流程、环保药剂和细节控手艺，为你的汽车恢复干净、亮泽和舒适感。</p>
            <div className="hero-actions">
              <a className="button" href="#packages">查看套餐</a>
              <a className="button secondary" href="tel:13800000000">电话咨询</a>
            </div>
            <div className="trust-row">
              <div className="trust-card"><strong>28min</strong><small>基础快洗平均用时</small></div>
              <div className="trust-card"><strong>4.9分</strong><small>车主到店口碑</small></div>
              <div className="trust-card"><strong>365天</strong><small>全年可预约服务</small></div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="car-card">
              <div className="price-pill"><span>新人体验价</span><strong> ¥39 起</strong></div>
              <div className="bubble">亮洁</div>
            </div>
          </div>
        </section>

        <section className="page-shell" id="services">
          <div className="section-head"><h2>热门洗护项目</h2><p>按车况选择服务：日常快洗、深度清洁、漆面保护和车内空气管理都能一次安排。</p></div>
          <div className="services">
            {services.map(([icon, title, text]) => <article className="service-card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="page-shell" id="packages">
          <div className="section-head"><h2>清晰套餐价格</h2><p>价格透明，到店确认车况后再施工；SUV、MPV 或重污车型可能略有调整。</p></div>
          <div className="packages">
            {packages.map(([tag, title, price, items, featured]) => (
              <article className={`package-card ${featured ? "featured" : ""}`} key={title}>
                <span className="tag">{tag}</span><h3>{title}</h3><p className="price">{price} <small>/ 次</small></p>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className={`button ${featured ? "" : "secondary"}`} href="#booking">预约{title.replace("城市", "")}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="page-shell" id="process">
          <div className="process-wrap">
            <div className="process-banner"><h2>不是简单冲一冲，是有顺序的细节工程。</h2></div>
            <div className="timeline">
              {steps.map(([num, title, text]) => <article className="step" key={num}><div className="step-number">{num}</div><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="page-shell" id="booking">
          <div className="booking">
            <div>
              <h2>预约今天的干净心情</h2>
              <p>留下联系方式和车型，我们会尽快与你确认到店时间。也可以直接电话咨询，临近下雨天建议提前预约。</p>
              <div className="contact-list">
                <div>📍 地址：城市汽车生活广场 B 区 18 号</div>
                <div>☎ 电话：138-0000-0000</div>
                <div>⏰ 营业：09:00 - 21:00</div>
              </div>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      <footer className="footer page-shell">© 2026 澄光汽车洗护中心 · 用细节照亮每一次出发</footer>
    </>
  );
}

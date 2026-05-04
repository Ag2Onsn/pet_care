"use client";

import { useEffect, useState } from "react";

const products = [
  {
    title: "枫木中式黑八球杆",
    price: "¥680 起",
    description: "硬度均衡，低偏移杆头，适合进阶玩家日常训练和比赛。",
    image: "/assets/product-cue-maple.png",
    alt: "枫木中式黑八球杆高端产品图",
    tags: ["19oz 可选", "皮头代装", "试打"],
  },
  {
    title: "赛级树脂台球套装",
    price: "¥420 起",
    description: "球面光洁、滚动稳定，适配家用球桌与营业球房补货。",
    image: "/assets/product-ball-set.png",
    alt: "赛级树脂台球套装高端产品图",
    tags: ["16球", "耐磨", "低噪滚动"],
  },
  {
    title: "双孔硬壳球杆盒",
    price: "¥260 起",
    description: "加厚抗压结构，内衬防刮，适合通勤携带和赛事出行。",
    image: "/assets/product-cue-case.png",
    alt: "双孔硬壳球杆盒高端产品图",
    tags: ["2B4S", "防潮", "肩带"],
  },
];

type Product = (typeof products)[number];

const categories = [
  {
    eyebrow: "精准控球",
    title: "球杆专区",
    summary: "九球杆、中式黑八杆、跳杆、冲杆与儿童练习杆。",
    description:
      "按打法、握距和发力习惯挑选杆重、重心与杆头硬度。店内可试握常用规格，也能根据预算推荐入门练习、进阶训练和比赛备用方案。",
    fit: "适合刚开始稳定练球、准备升级主杆，或需要冲杆、跳杆补齐打法的玩家。",
    items: ["枫木与碳纤维前节", "中式黑八与九球规格", "皮头硬度搭配", "杆盒与备用前节"],
    tone: "cat-green",
  },
  {
    eyebrow: "球房常备",
    title: "台球配件",
    summary: "巧粉、皮头、杆盒、手套、三角框、计分牌与清洁工具。",
    description:
      "覆盖日常训练和球房运营中的高频耗材，从防滑手套、巧粉到球杆架、计分牌都有现货建议。可按个人使用频率或球房桌数估算补货量。",
    fit: "适合个人玩家补齐随身装备，也适合俱乐部和球房做周期采购。",
    items: ["巧粉与皮头耗材", "手套、防滑粉与毛巾", "球框、计分牌与球杆架", "清洁刷与保养液"],
    tone: "cat-wine",
  },
  {
    eyebrow: "整店配置",
    title: "球桌台呢",
    summary: "中式、美式、斯诺克球桌，配套台呢、库边与灯具。",
    description:
      "围绕空间尺寸、使用强度和预算规划整桌配置。可协助确认球桌型号、台呢速度、库边弹性、灯具照明和安装调平细节。",
    fit: "适合家庭娱乐空间、工作室、台球厅新店配置或旧桌升级。",
    items: ["中式、美式与斯诺克球桌", "快慢速台呢选择", "库边、袋口与灯具", "上门安装与调平"],
    tone: "cat-blue",
  },
  {
    eyebrow: "稳定出杆",
    title: "维修保养",
    summary: "换皮头、修杆头、杆身清洁、球桌调平与台面维护。",
    description:
      "针对球杆出杆发涩、皮头开胶、杆头弧度不顺、球桌跑偏等问题做检查和维护。小修可到店处理，球桌类项目建议提前预约。",
    fit: "适合球杆手感变差、球桌走球不直，或球房需要定期维护的用户。",
    items: ["更换与修整皮头", "杆身清洁和轻度抛光", "球桌水平检查", "台呢与库边维护"],
    tone: "cat-charcoal",
  },
];

type Category = (typeof categories)[number];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("10:00");
  const [visitNote, setVisitNote] = useState("");

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="青台台球器材店首页">
            <span className="brand-mark">8</span>
            <span>青台台球器材店</span>
          </a>
          <div className="nav-links">
            <a href="#categories">器材分类</a>
            <a href="#products">热卖单品</a>
            <a href="#service">定制维护</a>
            <a href="#store">门店信息</a>
          </div>
          <a className="nav-cta" href="#store">
            到店选购
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="青台台球器材店">
          <img src="/assets/billiards-hero.png" alt="台球器材展示厅内的球杆、球桌与配件" />
          <div className="hero-inner">
            <p className="eyebrow">专业球杆 · 台呢 · 配件 · 维护</p>
            <h1>青台台球器材店</h1>
            <p className="hero-copy">
              从入门练习杆到赛事级手工杆，从球房耗材到整桌安装，帮你把每一次击球的稳定感配齐。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#products">
                查看热卖器材
              </a>
              <a className="btn btn-secondary" href="#service">
                预约球杆保养
              </a>
            </div>
          </div>
        </section>

        <div className="quick-bar" aria-label="门店优势">
          <div className="quick-item">
            <strong>300+</strong>
            <span>现货球杆与配件</span>
          </div>
          <div className="quick-item">
            <strong>24h</strong>
            <span>球房耗材快速补给</span>
          </div>
          <div className="quick-item">
            <strong>1v1</strong>
            <span>握感与重量搭配建议</span>
          </div>
          <div className="quick-item">
            <strong>整桌</strong>
            <span>安装调平与台呢更换</span>
          </div>
        </div>

        <section id="categories">
          <div className="container">
            <div className="section-head">
              <h2>器材分类</h2>
              <p>常用器材按使用场景陈列，适合玩家、俱乐部、球房经营者快速挑选。</p>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <button
                  className={`category ${category.tone}`}
                  type="button"
                  key={category.title}
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory.title === category.title}
                  aria-controls="category-detail"
                >
                  <small>{category.eyebrow}</small>
                  <h3>{category.title}</h3>
                  <p>{category.summary}</p>
                </button>
              ))}
            </div>
            <article className="category-detail" id="category-detail" aria-live="polite">
              <div className={`category-detail-mark ${selectedCategory.tone}`} aria-hidden="true">
                {selectedCategory.title.slice(0, 2)}
              </div>
              <div className="category-detail-copy">
                <small>{selectedCategory.eyebrow}</small>
                <h3>{selectedCategory.title}</h3>
                <p>{selectedCategory.description}</p>
                <div className="category-fit">
                  <b>适合对象</b>
                  <span>{selectedCategory.fit}</span>
                </div>
              </div>
              <div className="category-detail-list" aria-label={`${selectedCategory.title}包含内容`}>
                {selectedCategory.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="category-detail-link" href="#store">
                咨询此分类
              </a>
            </article>
            <div className="category-hint" aria-hidden="true">
              点击分类卡片查看具体介绍
            </div>
          </div>
        </section>

        <section className="products" id="products">
          <div className="container">
            <div className="section-head">
              <h2>热卖单品</h2>
              <p>精选适合日常训练和球房采购的高频款，现场可试握、试重、试平衡。</p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.title}>
                  <button
                    className="product-art product-art-button"
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`查看${product.title}放大图片`}
                  >
                    <img src={product.image} alt={product.alt} loading="lazy" />
                  </button>
                  <div className="product-info">
                    <div className="product-top">
                      <h3>{product.title}</h3>
                      <span className="price">{product.price}</span>
                    </div>
                    <p>{product.description}</p>
                    <div className="tags">
                      {product.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-band" id="service">
          <div className="container service-layout">
            <div className="service-copy">
              <h2>定制与维护一起做细</h2>
              <p>
                不同握法、发力方式、出杆节奏，对重量、重心、皮头硬度的需求都不一样。到店试握后再决定，比盲买更稳。
              </p>
              <a className="btn btn-primary" href="#store">
                联系门店
              </a>
            </div>
            <div className="service-list">
              <div className="service-item">
                <strong>球杆选配</strong>
                <span>按身高、手型、打法匹配杆重、杆径和皮头硬度。</span>
              </div>
              <div className="service-item">
                <strong>皮头更换</strong>
                <span>现场修整弧度，压实边缘，减少开胶和毛边。</span>
              </div>
              <div className="service-item">
                <strong>球桌调平</strong>
                <span>检查台面水平、库边弹性和袋口状态，适合球房维护。</span>
              </div>
              <div className="service-item">
                <strong>球房采购</strong>
                <span>巧粉、手套、台呢、球杆架等耗材支持批量配货。</span>
              </div>
            </div>
          </div>
        </section>

        <section id="store">
          <div className="container service-layout">
            <div className="section-head store-section-head">
              <h2>欢迎到店试杆</h2>
              <p>店内设有试打区，常用规格备货充足。可提前预约维修保养，减少等待时间。</p>
            </div>
            <div className="store-panel">
              <h3>门店信息</h3>
              <div className="store-map" aria-label="青台台球器材店位于深圳市民治大道56号天虹商场南门附近">
                <img
                  src="/assets/store-location-map-ai.png"
                  alt="青台台球器材店位于深圳市民治大道56号天虹商场南门旁的地图标记"
                  loading="lazy"
                />
              </div>
              <div className="store-row">
                <b>地址</b>
                <span>深圳市民治大道 56 号（天虹商场南门旁）</span>
              </div>
              <div className="store-row">
                <b>营业</b>
                <span>周一至周日 10:00 - 22:00</span>
              </div>
              <div className="store-row">
                <b>电话</b>
                <span>电话待补充</span>
              </div>
              <div className="store-row">
                <b>服务</b>
                <span>台球杆、球桌、台呢、配件、维修、球房采购</span>
              </div>
              <form
                className="visit-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!visitDate) {
                    setVisitNote("请选择期望到店日期");
                    return;
                  }

                  setVisitNote(`已记录期望到店时间：${visitDate} ${visitTime}`);
                }}
              >
                <div className="visit-form-head">
                  <b>期望到店时间</b>
                  <span>提前填写，方便到店后更快安排试杆和维护。</span>
                </div>
                <div className="visit-fields">
                  <label>
                    <span>日期</span>
                    <input
                      type="date"
                      value={visitDate}
                      onChange={(event) => setVisitDate(event.target.value)}
                      aria-label="选择期望到店日期"
                    />
                  </label>
                  <label>
                    <span>时间</span>
                    <select
                      value={visitTime}
                      onChange={(event) => setVisitTime(event.target.value)}
                      aria-label="选择期望到店时间"
                    >
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </label>
                  <button type="submit">确认时间</button>
                </div>
                {visitNote && <p className="visit-note">{visitNote}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>© 2026 青台台球器材店</span>
          <span>专业台球器材 · 球房耗材 · 球杆维护</span>
        </div>
      </footer>

      {selectedProduct && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProduct.title}放大图片`}
          onClick={() => setSelectedProduct(null)}
        >
          <div className="image-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="image-lightbox-close" type="button" onClick={() => setSelectedProduct(null)}>
              关闭
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.alt} />
            <div className="image-lightbox-caption">
              <strong>{selectedProduct.title}</strong>
              <span>{selectedProduct.price}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

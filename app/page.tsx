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

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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
              <article className="category cat-green">
                <small>精准控球</small>
                <h3>球杆专区</h3>
                <p>九球杆、中式黑八杆、跳杆、冲杆与儿童练习杆。</p>
              </article>
              <article className="category cat-wine">
                <small>球房常备</small>
                <h3>台球配件</h3>
                <p>巧粉、皮头、杆盒、手套、三角框、计分牌与清洁工具。</p>
              </article>
              <article className="category cat-blue">
                <small>整店配置</small>
                <h3>球桌台呢</h3>
                <p>中式、美式、斯诺克球桌，配套台呢、库边与灯具。</p>
              </article>
              <article className="category cat-charcoal">
                <small>稳定出杆</small>
                <h3>维修保养</h3>
                <p>换皮头、修杆头、杆身清洁、球桌调平与台面维护。</p>
              </article>
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

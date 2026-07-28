import { useState } from "react";
import "./styles.css";

type Lang = "zh" | "en";

const publications = [
  { year: "2026", title: "Random Matrix-Driven Graph Representation Learning for Bioacoustic Recognition", venue: "2026 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)", doi: "https://doi.org/10.1109/ICASSP55912.2026.11460933", primary: true, rank: "IEEE Flagship Conference", ccf: "CCF B类" },
  { year: "2026", title: "A Two-Stage Fault Detection and Early Warning Framework for Intelligent Laboratory Measurement Systems", venue: "IEEE Transactions on Instrumentation and Measurement", doi: "https://doi.org/10.1109/TIM.2026.3682816", jif: 5.9, rank: "JCR Q1", cas2025: "2区", cas2026: "2区 · Top" },
  { year: "2026", title: "Quantum-Causal Optimization for Decentralized EV Charging Management in Smart Grids", venue: "IEEE Systems Journal", doi: "https://doi.org/10.1109/JSYST.2025.3647516", jif: 4.4, rank: "JCR Q2", cas2025: "3区", cas2026: "3区" },
  { year: "2025", title: "Monitoring Carbon Emission From Industrial Users by Identifying Multistate Load in Advanced Metering Infrastructure", venue: "IEEE Sensors Journal", doi: "https://doi.org/10.1109/JSEN.2025.3591932", primary: true, jif: 4.5, rank: "JCR Q2", cas2025: "3区", cas2026: "2区" },
  { year: "2025", title: "Estimating Carbon Emission of Industrial Users by Identifying Multiple Loads in Advanced Metering Infrastructure", venue: "Journal of Cleaner Production", doi: "https://doi.org/10.1016/j.jclepro.2025.146056", primary: true, jif: 10.0, rank: "JCR Q1", cas2025: "1区 · Top", cas2026: "1区 · Top" },
  { year: "2025", title: "Innovative Cost Allocation and Energy Management in Off-Grid Microgrids via Stackelberg Game", venue: "IEEE Transactions on Automation Science and Engineering", doi: "https://doi.org/10.1109/TASE.2025.3611935", jif: 6.4, rank: "JCR Q1", cas2025: "2区", cas2026: "2区 · Top" },
  { year: "2024", title: "Real Time Estimation of Carbon Emissions for Industrial Users Based on Load Monitoring in Advanced Metering Infrastructure", venue: "Journal of Cleaner Production", doi: "https://doi.org/10.1016/j.jclepro.2024.144226", primary: true, jif: 10.0, rank: "JCR Q1", cas2025: "1区 · Top", cas2026: "1区 · Top" },
  { year: "2024", title: "Distributed Dynamic Graph Embedding for Quality-Related Monitoring in the Flotation Process", venue: "IEEE Transactions on Instrumentation and Measurement", doi: "https://doi.org/10.1109/TIM.2024.3381714", jif: 5.9, rank: "JCR Q1", cas2025: "2区", cas2026: "2区 · Top" },
  { year: "2024", title: "Real-Time Carbon Emission Estimation for Industrial Users With Low RMSE Based on NILM and Evolutionary Algorithm", venue: "IEEE Transactions on Instrumentation and Measurement", doi: "https://doi.org/10.1109/TIM.2024.3476562", jif: 5.9, rank: "JCR Q1", cas2025: "2区", cas2026: "2区 · Top" },
  { year: "2023", title: "An Attention-Based Wide and Deep CNN With Dilated Convolutions for Detecting Electricity Theft Considering Imbalanced Data", venue: "Electric Power Systems Research", doi: "https://doi.org/10.1016/j.epsr.2022.108886", jif: 4.3, rank: "JCR Q2", cas2025: "3区", cas2026: "3区" },
  { year: "2023", title: "Detecting Energy Theft in Different Regions Based on Convolutional and Joint Distribution Adaptation", venue: "IEEE Transactions on Instrumentation and Measurement", doi: "https://doi.org/10.1109/TIM.2023.3291769", primary: true, jif: 5.9, rank: "JCR Q1", cas2025: "2区", cas2026: "2区 · Top" },
  { year: "2023", title: "Vi-RNN算法储能电池在线SOC估计", venue: "中国测试 / China Measurement & Test, 49(5): 117–122", doi: "https://doi.org/10.11857/j.issn.1674-5124.2021100142", primary: true, rank: "中文核心期刊" },
  { year: "2022", title: "An Efficient Method Combined Data-Driven for Detecting Electricity Theft With Stacking Structure Based on Grey Relation Analysis", venue: "Energies", doi: "https://doi.org/10.3390/en15197423", jif: 3.9, rank: "JCR Q3", cas2025: "4区", cas2026: "3区" },
  { year: "2022", title: "A Semi-Supervised Learning Method for Electricity Theft Detection Based on CT-GAN", venue: "IEEE International Conference on Power Systems and Electrical Technology", doi: "https://doi.org/10.1109/PSET56192.2022.10100383", primary: true, rank: "EI Compendex" },
  { year: "2020", title: "Estimation of the SOC of Energy-Storage Lithium Batteries Based on the Voltage Increment", venue: "IEEE Access", doi: "https://doi.org/10.1109/ACCESS.2020.3031327", jif: 3.6, rank: "JCR Q2", cas2025: "4区", cas2026: "3区" },
];

const copy = {
  zh: {
    nav: ["简介", "研究", "论文", "专利", "经历", "教学", "服务"],
    role: "博士 · 讲师",
    affiliation: "华东交通大学 · 电气与自动化工程学院",
    intro: "从事人工智能与电气工程交叉研究，关注电碳监测、智能测量与新型电力系统中的数据驱动方法。",
    scholarUpdated: "学术指标 · 更新于 2026年7月",
    scholarMetrics: [["引用", "155"], ["h 指数", "6"], ["i10 指数", "5"], ["累计 JIF*", "69.7"]],
    metricNote: "* 按截至2026年7月最新可查期刊 JIF 逐篇累计，会议论文不计入；Google Scholar 指标会动态变化。",
    aboutTitle: "个人简介",
    about: "汪江昭，博士，华东交通大学电气与自动化工程学院讲师，电基础教研室教师。2025年获湖南大学电气工程博士学位，2026年1月入职华东交通大学。研究聚焦人工智能与电气工程交叉领域，参与多项国家级重点项目以及国家电网、南方电网科研项目。",
    focusTitle: "研究方向",
    focuses: [
      ["电碳监测与负荷辨识", "面向工业用户的碳排放实时估计、多状态负荷识别与非侵入式监测。"],
      ["智能测量与异常检测", "研究异常用电行为检测、跨区域迁移学习与智能测量系统故障预警。"],
      ["储能与能源管理", "关注储能电池状态估计、微电网能量管理与电动汽车协同充电。"],
    ],
    figureTitle: "电碳监测研究图示",
    figures: [
      ["工业用户电碳监测总体框架", "从智能电表获取负荷数据，经设备状态辨识后实现用户碳排放实时估计。"],
      ["面向多负荷辨识的碳排放估计模型", "融合卷积、双向时序特征与注意力机制，同时完成多设备识别与碳排放估计。"],
    ],
    pubTitle: "论文",
    pubHint: "共发表论文15篇，其中第一作者或通讯作者论文7篇；信息依据 ORCID、IEEE 及论文原文整理",
    primaryPubs: "第一作者或通讯作者论文",
    otherPubs: "其他合作论文",
    patentTitle: "授权发明专利",
    patentHint: "已授权中国发明专利2项",
    patents: [
      ["2026", "基于物理与数据双驱动的电力系统碳势追踪与预测方法", "ZL 2026 1 0354890.9 · CN121880901B · 第7发明人 · 华东交通大学 · 2026-06-16授权", "https://patents.google.com/patent/CN121880901B/zh"],
      ["2024", "一种电压闪变参数检测方法及系统", "ZL 2021 1 1168122.8 · CN113919152B · 第6发明人 · 湖南大学 · 2024-08-02授权", "https://patents.google.com/patent/CN113919152B/zh"],
    ],
    experienceTitle: "教育与任职",
    experience: [
      ["2026.01 — 至今", "华东交通大学", "电气与自动化工程学院 · 讲师"],
      ["2019 — 2025", "湖南大学", "电气工程 · 硕博连读，获博士学位"],
      ["2015 — 2019", "合肥工业大学", "智能电网信息工程 · 学士"],
    ],
    teachingTitle: "教学",
    teaching: "承担《电工基础》《电子技术基础》等本科课程教学。欢迎对电碳监测、智能测量、异常检测与储能状态估计感兴趣的同学交流。",
    serviceTitle: "学术服务",
    service: "ORCID 公开记录显示已完成6次经验证的同行评审，涉及 Measurement、Energy and Buildings、Electric Power Systems Research 与 Energy；同时担任 IEEE Transactions on Instrumentation and Measurement、Scientific Reports、Information、Retrieval Journal 等期刊审稿人。",
    footer: "汪江昭 · 华东交通大学",
  },
  en: {
    nav: ["About", "Research", "Publications", "Patents", "Experience", "Teaching", "Service"],
    role: "Ph.D. · Lecturer",
    affiliation: "School of Electrical and Automation Engineering · East China Jiaotong University",
    intro: "Working at the intersection of artificial intelligence and electrical engineering, with a focus on electricity-carbon monitoring, intelligent measurement, and data-driven methods for modern power systems.",
    scholarUpdated: "Research Metrics · Updated July 2026",
    scholarMetrics: [["Citations", "155"], ["h-index", "6"], ["i10-index", "5"], ["Cumulative JIF*", "69.7"]],
    metricNote: "* Per-paper sum using the latest journal JIFs available in July 2026; conference papers are excluded. Google Scholar metrics change over time.",
    aboutTitle: "About",
    about: "Jiangzhao Wang is a Lecturer in the School of Electrical and Automation Engineering at East China Jiaotong University. He received his Ph.D. in Electrical Engineering from Hunan University in 2025 and joined East China Jiaotong University in January 2026. His work bridges artificial intelligence and electrical engineering, with experience in national research programs and industry-sponsored projects with State Grid and China Southern Power Grid.",
    focusTitle: "Research Interests",
    focuses: [
      ["Electricity-Carbon Monitoring & Load Identification", "Real-time carbon emission estimation, multistate load identification, and non-intrusive monitoring for industrial users."],
      ["Intelligent Measurement & Anomaly Detection", "Electricity theft detection, cross-region transfer learning, and fault early warning for intelligent measurement systems."],
      ["Energy Storage & Energy Management", "Battery state estimation, microgrid energy management, and coordinated electric-vehicle charging."],
    ],
    figureTitle: "Electricity-Carbon Monitoring in Focus",
    figures: [
      ["Industrial Electricity-Carbon Monitoring Framework", "Smart-meter load data are translated into device states and real-time user-side carbon emission estimates."],
      ["Multi-Load Identification for Carbon Estimation", "Convolutional, bidirectional temporal, and attention features jointly identify multiple devices and estimate their carbon emissions."],
    ],
    pubTitle: "Publications",
    pubHint: "15 publications, including 7 first- or corresponding-author papers; curated from ORCID, IEEE, and the original papers",
    primaryPubs: "First- or Corresponding-Author Papers",
    otherPubs: "Other Collaborative Papers",
    patentTitle: "Granted Invention Patents",
    patentHint: "Two granted Chinese invention patents",
    patents: [
      ["2026", "Physics- and Data-Driven Method for Tracking and Predicting Power-System Carbon Potential", "ZL 2026 1 0354890.9 · CN121880901B · 7th inventor · East China Jiaotong University · Granted Jun 16, 2026", "https://patents.google.com/patent/CN121880901B/en"],
      ["2024", "Voltage Flicker Parameter Detection Method and System", "ZL 2021 1 1168122.8 · CN113919152B · 6th inventor · Hunan University · Granted Aug 2, 2024", "https://patents.google.com/patent/CN113919152B/en"],
    ],
    experienceTitle: "Appointments & Education",
    experience: [
      ["Jan 2026 — Present", "East China Jiaotong University", "School of Electrical and Automation Engineering · Lecturer"],
      ["2019 — 2025", "Hunan University", "Integrated M.Sc.-Ph.D. program in Electrical Engineering · Ph.D."],
      ["2015 — 2019", "Hefei University of Technology", "B.Eng. in Smart Grid Information Engineering"],
    ],
    teachingTitle: "Teaching",
    teaching: "Undergraduate teaching includes Fundamentals of Electrical Engineering and Fundamentals of Electronic Technology. Students interested in electricity-carbon monitoring, intelligent measurement, anomaly detection, and battery state estimation are welcome to get in touch.",
    serviceTitle: "Academic Service",
    service: "The public ORCID record verifies 6 completed peer reviews for Measurement, Energy and Buildings, Electric Power Systems Research, and Energy. Additional reviewing service includes IEEE Transactions on Instrumentation and Measurement, Scientific Reports, Information, and Retrieval Journal.",
    footer: "Jiangzhao Wang · East China Jiaotong University",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang];
  const primaryPublications = publications.filter((p) => p.primary);
  const otherPublications = publications.filter((p) => !p.primary);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={lang === "zh" ? "返回首页" : "Back to top"}>WJZ<span>.</span></a>
        <nav aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
          {t.nav.map((item, i) => <a key={item} href={`#${["about", "research", "publications", "patents", "experience", "teaching", "service"][i]}`}>{item}</a>)}
        </nav>
        <button className="language" onClick={() => setLang(lang === "zh" ? "en" : "zh")} aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}>{lang === "zh" ? "EN" : "中"}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">{t.role}</div>
          <h1>{lang === "zh" ? <>汪江昭<span> Jiangzhao Wang</span></> : <>Jiangzhao Wang<span> 汪江昭</span></>}</h1>
          <p className="affiliation">{t.affiliation}</p>
          <p className="lead">{t.intro}</p>
          <div className="links">
            <a href="https://orcid.org/0000-0001-9785-7649" target="_blank" rel="noreferrer">ORCID</a>
            <a href="https://scholar.google.com/citations?user=hDJYM7BJNZYC" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="https://ieeexplore.ieee.org/author/37088552423" target="_blank" rel="noreferrer">IEEE</a>
          </div>
          <a className="scholar-stats" href="https://scholar.google.com/citations?user=hDJYM7BJNZYC" target="_blank" rel="noreferrer" aria-label={lang === "zh" ? "查看 Google Scholar 学术指标" : "View Google Scholar metrics"}>
            <span className="scholar-updated">{t.scholarUpdated}</span>
            <span className="metric-row">{t.scholarMetrics.map(([label, value]) => <span className="metric" key={label}><strong>{value}</strong><small>{label}</small></span>)}</span>
            <span className="metric-note">{t.metricNote}</span>
          </a>
        </div>
        <div className="portrait-wrap"><img className="portrait" src="/jiangzhao-wang.jpg" alt={lang === "zh" ? "汪江昭个人照片" : "Portrait of Jiangzhao Wang"} /></div>
      </section>

      <section className="section about" id="about"><div className="section-label">01</div><div><h2>{t.aboutTitle}</h2><p className="body-large">{t.about}</p></div></section>

      <section className="section" id="research"><div className="section-label">02</div><div><h2>{t.focusTitle}</h2><div className="research-figures"><h3>{t.figureTitle}</h3><div className="figure-grid"><figure><img src="/research-carbon-overview.webp" alt={t.figures[0][0]} /><figcaption><strong>{t.figures[0][0]}</strong><span>{t.figures[0][1]}</span><a href="https://doi.org/10.1016/j.jclepro.2024.144226" target="_blank" rel="noreferrer">Journal of Cleaner Production, 2024 ↗</a></figcaption></figure><figure><img src="/research-carbon-multiload.webp" alt={t.figures[1][0]} /><figcaption><strong>{t.figures[1][0]}</strong><span>{t.figures[1][1]}</span><a href="https://doi.org/10.1016/j.jclepro.2025.146056" target="_blank" rel="noreferrer">Journal of Cleaner Production, 2025 ↗</a></figcaption></figure></div></div><div className="focus-grid">{t.focuses.map((f, i) => <article className="focus-card" key={f[0]}><span>0{i + 1}</span><h3>{f[0]}</h3><p>{f[1]}</p></article>)}</div></div></section>

      <section className="section" id="publications"><div className="section-label">03</div><div><div className="section-heading"><div><h2>{t.pubTitle}</h2><p>{t.pubHint}</p></div><a href="https://orcid.org/0000-0001-9785-7649" target="_blank" rel="noreferrer">ORCID ↗</a></div><PublicationGroup title={t.primaryPubs} publications={primaryPublications} lang={lang} /><PublicationGroup title={t.otherPubs} publications={otherPublications} lang={lang} /></div></section>

      <section className="section" id="patents"><div className="section-label">04</div><div><div className="section-heading"><div><h2>{t.patentTitle}</h2><p>{t.patentHint}</p></div></div><div className="patent-list">{t.patents.map((p) => <article className="patent" key={p[1]}><div className="year">{p[0]}</div><div><h3>{p[1]}</h3><p>{p[2]}</p></div><a href={p[3]} target="_blank" rel="noreferrer" aria-label={`${lang === "zh" ? "检索专利" : "Open patent"}: ${p[1]}`}>{lang === "zh" ? "专利检索" : "Patent"} ↗</a></article>)}</div></div></section>

      <section className="section" id="experience"><div className="section-label">05</div><div><h2>{t.experienceTitle}</h2><div className="timeline">{t.experience.map((e) => <article key={e[0]}><div className="date">{e[0]}</div><div><h3>{e[1]}</h3><p>{e[2]}</p></div></article>)}</div></div></section>

      <section className="split-section"><article id="teaching"><div className="section-label">06</div><h2>{t.teachingTitle}</h2><p>{t.teaching}</p></article><article id="service"><div className="section-label">07</div><h2>{t.serviceTitle}</h2><p>{t.service}</p></article></section>

      <footer><p>{t.footer}</p><p>ORCID 0000-0001-9785-7649</p></footer>
    </main>
  );
}

function PublicationGroup({ title, publications: items, lang }: { title: string; publications: typeof publications; lang: Lang }) {
  const jifTotal = items.reduce((sum, paper) => sum + (paper.jif ?? 0), 0).toFixed(1);
  return <div className="publication-group"><h3>{title}<span>{items.length}</span><em>Σ JIF {jifTotal}</em></h3><div className="publication-list">{items.map((p) => <article className="publication" key={p.doi}><div className="year">{p.year}</div><div><h3>{p.title}</h3><p>{p.venue}</p><div className="pub-tags">{p.jif !== undefined && <span>JIF {p.jif.toFixed(1)}</span>}<span>{p.rank}</span>{p.ccf && <span>{lang === "zh" ? p.ccf : "CCF Class B"}</span>}{lang === "zh" && p.cas2025 && <span>2025中科院升级版大类 · {p.cas2025}</span>}{lang === "zh" && p.cas2026 && <span>2026新锐大类 · {p.cas2026}</span>}</div></div><a href={p.doi} target="_blank" rel="noreferrer" aria-label={`${lang === "zh" ? "检索论文" : "Open paper"}: ${p.title}`}>{lang === "zh" ? "论文检索" : "Paper"} ↗</a></article>)}</div></div>;
}

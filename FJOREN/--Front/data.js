// =============================================
// FJOREN — DATA.JS
// 1-Boné | 2-Camisa Social | 3-Short
// 4-Moletom | 5-Camisa | 6-Calça Jeans | 7-Calça Moletom
// =============================================

const CATEGORIAS = [
  { id: 1, nome: "Bonés",          icone: "🧢", arquivo: "categoria1.html" },
  { id: 2, nome: "Camisas Sociais",icone: "👔", arquivo: "categoria2.html" },
  { id: 3, nome: "Shorts",         icone: "🩳", arquivo: "categoria3.html" },
  { id: 4, nome: "Moletons",       icone: "🧥", arquivo: "categoria4.html" },
  { id: 5, nome: "Camisetas",      icone: "👕", arquivo: "categoria5.html" },
  { id: 6, nome: "Calças Jeans",   icone: "👖", arquivo: "categoria6.html" },
  { id: 7, nome: "Calças Moletom", icone: "🩱", arquivo: "categoria7.html" },
];

const PRODUTOS = {

  // ── CATEGORIA 1: BONÉS ──────────────────────────────────────────
  1: [
    { id: 101, nome: "Boné Preto Essential",   preco: 79.99,  categoria: "Bonés", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80" },
    { id: 102, nome: "Boné Branco Classic",    preco: 74.99,  categoria: "Bonés", img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80" },
    { id: 103, nome: "Boné Navy Strapback",    preco: 89.99,  categoria: "Bonés", img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&q=80" },
    { id: 104, nome: "Boné Cinza Distressed",  preco: 84.99,  categoria: "Bonés", img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&q=80" },
    { id: 105, nome: "Bucket Hat Bege",        preco: 69.99,  categoria: "Bonés", img: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=400&q=80" },
    { id: 106, nome: "Boné Khaki Militar",     preco: 79.99,  categoria: "Bonés", img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&q=80" },
    { id: 107, nome: "Boné Verde Oliva",       preco: 84.99,  categoria: "Bonés", img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&q=80" },
    { id: 108, nome: "Snapback Preto Logo",    preco: 94.99,  categoria: "Bonés", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80" },
  ],

  // ── CATEGORIA 2: CAMISAS SOCIAIS ────────────────────────────────
  2: [
    { id: 201, nome: "Camisa Social Branca",   preco: 149.99, categoria: "Camisas Sociais", img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80" },
    { id: 202, nome: "Camisa Social Preta",    preco: 149.99, categoria: "Camisas Sociais", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80" },
    { id: 203, nome: "Camisa Oxford Azul",     preco: 159.99, categoria: "Camisas Sociais", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80" },
    { id: 204, nome: "Camisa Listrada Navy",   preco: 169.99, categoria: "Camisas Sociais", img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&q=80" },
    { id: 205, nome: "Camisa Slim Cinza",      preco: 154.99, categoria: "Camisas Sociais", img: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&q=80" },
    { id: 206, nome: "Camisa Xadrez Bege",     preco: 164.99, categoria: "Camisas Sociais", img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400&q=80" },
    { id: 207, nome: "Camisa Linho Branco",    preco: 179.99, categoria: "Camisas Sociais", img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4f3b?w=400&q=80" },
    { id: 208, nome: "Camisa Social Vinho",    preco: 159.99, categoria: "Camisas Sociais", img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80" },
  ],

  // ── CATEGORIA 3: SHORTS ─────────────────────────────────────────
  3: [
    { id: 301, nome: "Short Cargo Bege",       preco: 119.99, categoria: "Shorts", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80" },
    { id: 302, nome: "Short Preto Essential",  preco: 99.99,  categoria: "Shorts", img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80" },
    { id: 303, nome: "Short Navy Swimwear",    preco: 109.99, categoria: "Shorts", img: "https://images.unsplash.com/photo-1562183241-840b8af0721e?w=400&q=80" },
    { id: 304, nome: "Short Olive Militar",    preco: 124.99, categoria: "Shorts", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
    { id: 305, nome: "Short Cinza Sport",      preco: 89.99,  categoria: "Shorts", img: "https://images.unsplash.com/photo-1539533018257-736d1c2d1421?w=400&q=80" },
    { id: 306, nome: "Short Branco Premium",   preco: 114.99, categoria: "Shorts", img: "https://images.unsplash.com/photo-1529391409740-59f2cea08bc8?w=400&q=80" },
    { id: 307, nome: "Short Denim Azul",       preco: 129.99, categoria: "Shorts", img: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
    { id: 308, nome: "Short Marrom Cargo",     preco: 119.99, categoria: "Shorts", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80" },
  ],

  // ── CATEGORIA 4: MOLETONS ───────────────────────────────────────
  4: [
    { id: 401, nome: "Hoodie Navy Premium",    preco: 199.99, categoria: "Moletons", img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
    { id: 402, nome: "Moletom Cinza Claro",    preco: 189.99, categoria: "Moletons", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
    { id: 403, nome: "Hoodie Preto Oversized", preco: 219.99, categoria: "Moletons", img: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&q=80" },
    { id: 404, nome: "Moletom Bege Minimal",   preco: 194.99, categoria: "Moletons", img: "https://images.unsplash.com/photo-1611911813383-67769b37a149?w=400&q=80" },
    { id: 405, nome: "Hoodie Branco Clean",    preco: 199.99, categoria: "Moletons", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80" },
    { id: 406, nome: "Crewneck Olive",         preco: 179.99, categoria: "Moletons", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    { id: 407, nome: "Moletom Creme Essential",preco: 189.99, categoria: "Moletons", img: "https://images.unsplash.com/photo-1542219550-37153d387c27?w=400&q=80" },
    { id: 408, nome: "Hoodie Azul Slate",      preco: 209.99, categoria: "Moletons", img: "https://images.unsplash.com/photo-1513346940221-6f673d962e97?w=400&q=80" },
  ],

  // ── CATEGORIA 5: CAMISETAS ──────────────────────────────────────
  5: [
    { id: 501, nome: "Camiseta Preta Essential",  preco: 89.99, categoria: "Camisetas", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
    { id: 502, nome: "Camiseta Branca Classic",   preco: 89.99, categoria: "Camisetas", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80" },
    { id: 503, nome: "Camiseta Cinza Oversized",  preco: 99.99, categoria: "Camisetas", img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&q=80" },
    { id: 504, nome: "Camiseta Navy Basic",       preco: 84.99, categoria: "Camisetas", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=80" },
    { id: 505, nome: "Camiseta Bege Minimal",     preco: 94.99, categoria: "Camisetas", img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80" },
    { id: 506, nome: "Camiseta Verde Militar",    preco: 89.99, categoria: "Camisetas", img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80" },
    { id: 507, nome: "Camiseta Polo Preta",       preco: 109.99,categoria: "Camisetas", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80" },
    { id: 508, nome: "Camiseta Logo Branca",      preco: 99.99, categoria: "Camisetas", img: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&q=80" },
  ],

  // ── CATEGORIA 6: CALÇAS JEANS ───────────────────────────────────
  6: [
    { id: 601, nome: "Jeans Slim Black",       preco: 159.99, categoria: "Calças Jeans", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
    { id: 602, nome: "Jeans Azul Classic",     preco: 149.99, categoria: "Calças Jeans", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
    { id: 603, nome: "Jeans Skinny Azul",      preco: 154.99, categoria: "Calças Jeans", img: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400&q=80" },
    { id: 604, nome: "Jeans Straight Preto",   preco: 164.99, categoria: "Calças Jeans", img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&q=80" },
    { id: 605, nome: "Jeans Wide Leg Azul",    preco: 174.99, categoria: "Calças Jeans", img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&q=80" },
    { id: 606, nome: "Jeans Destroyed Grey",   preco: 169.99, categoria: "Calças Jeans", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80" },
    { id: 607, nome: "Jeans Cargo Azul",       preco: 179.99, categoria: "Calças Jeans", img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80" },
    { id: 608, nome: "Jeans Relaxed Fit",      preco: 159.99, categoria: "Calças Jeans", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
  ],

  // ── CATEGORIA 7: CALÇAS MOLETOM ─────────────────────────────────
  7: [
    { id: 701, nome: "Calça Moletom Cinza",    preco: 139.99, categoria: "Calças Moletom", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
    { id: 702, nome: "Calça Moletom Preta",    preco: 139.99, categoria: "Calças Moletom", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&q=80" },
    { id: 703, nome: "Jogger Bege Premium",    preco: 149.99, categoria: "Calças Moletom", img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400&q=80" },
    { id: 704, nome: "Jogger Navy Essential",  preco: 144.99, categoria: "Calças Moletom", img: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&q=80" },
    { id: 705, nome: "Calça Fleece Branca",    preco: 154.99, categoria: "Calças Moletom", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 706, nome: "Jogger Olive Cargo",     preco: 159.99, categoria: "Calças Moletom", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
    { id: 707, nome: "Calça Slim Cinza Mescla",preco: 134.99, categoria: "Calças Moletom", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
    { id: 708, nome: "Jogger Preto Oversized", preco: 149.99, categoria: "Calças Moletom", img: "https://images.unsplash.com/photo-1542219550-37153d387c27?w=400&q=80" },
  ],
};

// ── LOOKS POR CLIMA (Provador Virtual) ──────────────────────────
const LOOKS_CLIMA = {
  "extremo-calor": [
    [
      { nome: "Camiseta Branca Classic",   preco: 89.99,  label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80" },
      { nome: "Short Cargo Bege",          preco: 119.99, label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80" },
      { nome: "Tênis Branco Minimal",      preco: 249.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
      { nome: "Bucket Hat Bege",           preco: 69.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=400&q=80" },
    ],
    [
      { nome: "Camiseta Bege Minimal",     preco: 94.99,  label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80" },
      { nome: "Short Preto Essential",     preco: 99.99,  label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80" },
      { nome: "Tênis Preto Runner",        preco: 259.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1556048219-bb6978360b84?w=400&q=80" },
      { nome: "Boné Preto Essential",      preco: 79.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80" },
    ],
  ],
  "quente": [
    [
      { nome: "Camiseta Polo Preta",       preco: 109.99, label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80" },
      { nome: "Short Olive Militar",       preco: 124.99, label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
      { nome: "Tênis Branco Clean",        preco: 239.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
      { nome: "Boné Navy Strapback",       preco: 89.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&q=80" },
    ],
    [
      { nome: "Camiseta Verde Militar",    preco: 89.99,  label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80" },
      { nome: "Short Denim Azul",          preco: 129.99, label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
      { nome: "Tênis Canvas Branco",       preco: 189.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&q=80" },
      { nome: "Boné Branco Classic",       preco: 74.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80" },
    ],
  ],
  "morno": [
    [
      { nome: "Camisa Social Branca",      preco: 149.99, label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80" },
      { nome: "Jeans Slim Black",          preco: 159.99, label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
      { nome: "Tênis Preto Minimal",       preco: 229.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1556048219-bb6978360b84?w=400&q=80" },
      { nome: "Boné Cinza Distressed",     preco: 84.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&q=80" },
    ],
    [
      { nome: "Camiseta Cinza Oversized",  preco: 99.99,  label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&q=80" },
      { nome: "Calça Moletom Cinza",       preco: 139.99, label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
      { nome: "Tênis Runner Branco",       preco: 249.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
      { nome: "Boné Khaki Militar",        preco: 79.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&q=80" },
    ],
  ],
  "frio": [
    [
      { nome: "Hoodie Navy Premium",       preco: 199.99, label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
      { nome: "Jeans Straight Preto",      preco: 164.99, label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&q=80" },
      { nome: "Tênis Couro Preto",         preco: 279.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80" },
      { nome: "Boné Snapback Preto",       preco: 94.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80" },
    ],
    [
      { nome: "Moletom Bege Minimal",      preco: 194.99, label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1611911813383-67769b37a149?w=400&q=80" },
      { nome: "Jogger Bege Premium",       preco: 149.99, label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400&q=80" },
      { nome: "Tênis Chunky Branco",       preco: 289.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
      { nome: "Boné Verde Oliva",          preco: 84.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&q=80" },
    ],
  ],
  "muito-frio": [
    [
      { nome: "Hoodie Preto Oversized",    preco: 219.99, label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&q=80" },
      { nome: "Calça Moletom Preta",       preco: 139.99, label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&q=80" },
      { nome: "Bota Couro Preta",          preco: 329.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1542840411-f717f5a18aa2?w=400&q=80" },
      { nome: "Boné Cinza Distressed",     preco: 84.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&q=80" },
    ],
    [
      { nome: "Crewneck Olive",            preco: 179.99, label: "PARTE DE CIMA",  img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
      { nome: "Jogger Olive Cargo",        preco: 159.99, label: "PARTE DE BAIXO", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
      { nome: "Bota Militar Verde",        preco: 299.99, label: "CALÇADO",        img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400&q=80" },
      { nome: "Boné Preto Essential",      preco: 79.99,  label: "ACESSÓRIO",      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80" },
    ],
  ],
};

// ── COLEÇÃO (página principal) ──────────────────────────────────
const COLECAO = [
  { id: 501, nome: "Camiseta Preta Essential",  preco: 89.99,  categoria: "CAMISETAS",  img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
  { id: 502, nome: "Camiseta Branca Classic",   preco: 89.99,  categoria: "CAMISETAS",  img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80" },
  { id: 401, nome: "Hoodie Navy Premium",       preco: 199.99, categoria: "MOLETONS",   img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
  { id: 601, nome: "Jeans Slim Black",          preco: 159.99, categoria: "CALÇAS",     img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
  { id: 402, nome: "Moletom Cinza Claro",       preco: 189.99, categoria: "MOLETONS",   img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
  { id: 602, nome: "Jeans Azul Classic",        preco: 149.99, categoria: "CALÇAS",     img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
  { id: 201, nome: "Camisa Social Branca",      preco: 149.99, categoria: "SOCIAIS",    img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80" },
  { id: 101, nome: "Boné Preto Essential",      preco: 79.99,  categoria: "BONÉS",      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80" },
];
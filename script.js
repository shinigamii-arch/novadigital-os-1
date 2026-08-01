/* =========================================================
   NOVA DIGITAL OS — Icon set (feather-style, stroke-based)
   ========================================================= */
const ICONS = {
  'grid': '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  'bar-chart': '<path d="M4 20V10"/><path d="M12 20V4"/><path d="M20 20v-7"/>',
  'calendar': '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 9.5h18"/>',
  'layers': '<path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  'users': '<path d="M17 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"/><circle cx="10" cy="7.5" r="3.5"/><path d="M23 20v-1.5a4 4 0 0 0-3-3.87"/><path d="M16.5 4.13a4 4 0 0 1 0 7.75"/>',
  'bulb': '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6.5 6.5 0 0 0-4 11.6c.7.6 1 1.3 1 2.15V16h6v-.25c0-.85.3-1.55 1-2.15A6.5 6.5 0 0 0 12 2Z"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8M8 9h2"/>',
  'file': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  'code': '<path d="m9 6-6 6 6 6"/><path d="m15 6 6 6-6 6"/>',
  'image': '<rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="8.5" r="1.7"/><path d="m21 15-5-5L5 21"/>',
  'video': '<rect x="2.5" y="5.5" width="14" height="13" rx="2"/><path d="m17.5 9.5 4-2.5v10l-4-2.5"/>',
  'package': '<path d="m7.5 4.27 9 5.15"/><path d="M21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8Z"/><path d="M3.3 6.96 12 12l8.7-5.04M12 22V12"/>',
  'template': '<rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M3 9h18M9 21V9"/>',
  'sparkles': '<path d="M12 3v3M12 18v3M4.2 4.2l2 2M17.8 17.8l2 2M3 12h3M18 12h3M4.2 19.8l2-2M17.8 6.2l2-2"/><path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z"/>',
  'settings': '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
  'menu': '<path d="M3 6h18M3 12h18M3 18h18"/>',
  'search': '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.3-4.3"/>',
  'moon': '<path d="M20.5 14.5a8.5 8.5 0 1 1-9-11 6.8 6.8 0 0 0 9 11Z"/>',
  'x': '<path d="M18 6 6 18M6 6l12 12"/>',
  'plus': '<path d="M12 5v14M5 12h14"/>',
  'more': '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
  'star': '<path d="m12 2.5 3.1 6.3 6.9 1-5 4.9L18.2 21 12 17.7 5.8 21l1.2-6.3-5-4.9 6.9-1L12 2.5Z"/>',
  'trash': '<path d="M4 7h16M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7M18.5 7 18 19.5A2 2 0 0 1 16 21.5H8a2 2 0 0 1-2-2L5.5 7"/><path d="M10 11v6M14 11v6"/>',
  'edit': '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>',
  'copy': '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'upload': '<path d="M12 16V4M6 10l6-6 6 6"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  'folder': '<path d="M3 7a2 2 0 0 1 2-2h4.5l2 2.5H19a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  'folder-plus': '<path d="M3 7a2 2 0 0 1 2-2h4.5l2 2.5H19a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M12 11v5M9.5 13.5h5"/>',
  'link': '<path d="M9.5 14.5 14.5 9.5"/><path d="M11 5.5 12.4 4a4 4 0 0 1 5.6 5.6l-1.5 1.4"/><path d="M13 18.5 11.6 20a4 4 0 0 1-5.6-5.6l1.5-1.4"/>',
  'github': '<path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
  'globe': '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.5 2.7 4 6.2 4 9.5s-1.5 6.8-4 9.5c-2.5-2.7-4-6.2-4-9.5s1.5-6.8 4-9.5Z"/>',
  'clock': '<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3.5 2"/>',
  'flag': '<path d="M5 21V4"/><path d="M5 4h13l-2.5 4L18 12H5"/>',
  'check': '<path d="m5 13 4 4L19 7"/>',
  'archive': '<rect x="3" y="4" width="18" height="4.5" rx="1"/><path d="M5 8.5V18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5"/><path d="M10 13h4"/>',
  'download': '<path d="M12 4v12M6 10l6 6 6-6"/><path d="M4 20h16"/>',
  'mail': '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6.5 9 6.5 9-6.5"/>',
  'phone': '<path d="M5.5 3h3l1.7 4.5-2.2 1.7a12 12 0 0 0 5.3 5.3l1.7-2.2L19.5 14v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z"/>',
  'instagram': '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="1"/>',
  'building': '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M9 21v-3h6v3"/>',
  'pin': '<path d="M12 2a5.5 5.5 0 0 0-5.5 5.5c0 4 5.5 10.5 5.5 10.5s5.5-6.5 5.5-10.5A5.5 5.5 0 0 0 12 2Z"/><circle cx="12" cy="7.5" r="2"/>',
  'compare': '<path d="M12 3v18"/><path d="M7 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3M17 8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3"/>',
  'refresh': '<path d="M3 12a9 9 0 0 1 15.3-6.4L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.3 6.4L3 16"/><path d="M3 21v-5h5"/>',
  'key': '<circle cx="8" cy="14.5" r="4"/><path d="m10.9 11.4 9.6-9.6M16.5 9l3 3M13.5 6l2.5 2.5"/>',
  'send': '<path d="m3 11 18-8-8 18-2.5-7.5L3 11Z"/>',
  'cpu': '<rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="3" y="10" width="18" height="4" rx="0"/><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" opacity="0"/>' ,
  'shield': '<path d="M12 2.5 4.5 5.5V11c0 5 3.2 8.7 7.5 10 4.3-1.3 7.5-5 7.5-10V5.5L12 2.5Z"/><path d="m9 12 2 2 4-4"/>',
  'lock': '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
  'eye': '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
};

function icon(name, size){
  size = size || 18;
  const paths = ICONS[name] || ICONS['grid'];
  return '<svg viewBox="0 0 24 24" width="'+size+'" height="'+size+'" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+paths+'</svg>';
}

function hydrateIcons(root){
  (root || document).querySelectorAll('[data-icon]').forEach(el=>{
    const name = el.getAttribute('data-icon');
    el.innerHTML = icon(name, el.getAttribute('data-size') || 18);
  });
}


/* =========================================================
   NOVA DIGITAL OS — Application Core
   ========================================================= */

/* ---------------------- STORAGE (Supabase — shared across every device) ---------------------- */
const SUPABASE_URL = 'https://fpsbarkefthbwcozwwvu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_XlwEleNOmcEtNubKboOYpQ_pY7SdFoT';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const DB_ROW_ID = 'shared';
let dbChannel = null;

async function loadDB(){
  try{
    const { data, error } = await sb.from('novaos_db').select('data').eq('id', DB_ROW_ID).single();
    if(error || !data){ DB = defaultDB(); await saveDB(); }
    else { DB = Object.assign(defaultDB(), data.data); }
  }catch(e){ DB = defaultDB(); }
}

async function saveDB(){
  try{
    const { error } = await sb.from('novaos_db').upsert({ id: DB_ROW_ID, data: DB, updated_at: new Date().toISOString() });
    if(error) toast('Yadda saxlanmadı: '+error.message, 'error');
  }catch(e){ toast('Yadda saxlanmadı — internetini yoxla', 'error'); }
}

/** Listens for changes made by OTHER devices/tabs and refreshes what's on screen right now. */
function startRealtimeSync(){
  if(dbChannel) return;
  dbChannel = sb.channel('novaos_db_changes')
    .on('postgres_changes', { event:'*', schema:'public', table:'novaos_db', filter:`id=eq.${DB_ROW_ID}` }, (payload)=>{
      if(!payload.new || !payload.new.data) return;
      DB = Object.assign(defaultDB(), payload.new.data);
      try{ updateNavBadges(); navigate(currentView); }catch(e){}
    })
    .subscribe();
}

/* ---------------------- AUTH (Google via Supabase) ---------------------- */
function doGoogleLogin(){
  sb.auth.signInWithOAuth({ provider:'google', options:{ redirectTo: window.location.href } });
}
function doLogout(){
  if(dbChannel){ sb.removeChannel(dbChannel); dbChannel = null; }
  sb.auth.signOut().then(()=>{ location.reload(); });
}

async function initAuth(){
  const { data:{ session } } = await sb.auth.getSession();
  document.getElementById('app-loading').style.display = 'none';
  if(session){ await enterApp(); }
  else{ document.getElementById('login-gate').classList.remove('hidden'); }

  sb.auth.onAuthStateChange((event)=>{
    if(event === 'SIGNED_IN'){ document.getElementById('login-gate').classList.add('hidden'); enterApp(); }
  });
}

async function enterApp(){
  document.getElementById('login-gate').classList.add('hidden');
  await loadDB();
  startApp();
  startRealtimeSync();
}


function uid(){ return Math.random().toString(36).slice(2,9) + Date.now().toString(36).slice(-4); }
function nowISO(){ return new Date().toISOString(); }

function defaultDB(){
  return {
    settings: {
      theme:'dark', workspaceName:'Nova Digital', profileName:'Founder', profileRole:'Creative Director',
      notifications:true, aiApiKey:'', aiModel:'claude-sonnet-5', sidebarCollapsed:false, adminPin:'12072026'
    },
    projects: [], tasks: [], clients: [], ideas: [], notes: [], codeSnippets: [],
    documents: [], images: [], videos: [], assets: [], prompts: [], calendarEvents: [],
    activity: [], revenue: []
  };
}

let DB = defaultDB();
function logActivity(text, ic){
  DB.activity.unshift({id:uid(), text, ts:nowISO(), icon: ic||'check'});
  DB.activity = DB.activity.slice(0,40);
}

/* =========================================================
   ROLE SYSTEM — Admin (tam idarəetmə) / İşçi (yalnız baxış)
   Rol bu cihaz/brauzer üçün ayrıca saxlanılır (data ilə sıfırlanmır).
   Admin nə dəyişsə, bu tətbiqi açan HAMI eyni datanı görür (paylaşılan DB).
   ========================================================= */
const ROLE_KEY = 'novaos_role_v1';
function getRole(){ return localStorage.getItem(ROLE_KEY) || null; }
function setRole(r){ localStorage.setItem(ROLE_KEY, r); }
function isAdmin(){ return getRole()==='admin'; }
function requireAdmin(msg){
  if(!isAdmin()){ toast(msg || 'Bu əməliyyat yalnız admin üçündür', 'warn'); return false; }
  return true;
}
/** Shown when an employee right-clicks something that has no admin-only actions available. */
function lockedCtxToast(){ toast('Bu elementi dəyişmək yalnız admin üçündür — baxmaq üçün klikləyin', 'warn'); }
function readOnlyize(html){
  return html
    .replace(/<(input)(?![^>]*readonly)/g, '<$1 readonly')
    .replace(/<(textarea)(?![^>]*readonly)/g, '<$1 readonly')
    .replace(/<(select)(?![^>]*disabled)/g, '<$1 disabled');
}

function applyRoleUI(){
  const r = getRole();
  const admin = r==='admin';
  const pill = document.getElementById('role-pill');
  if(pill){ pill.textContent = r ? (admin?'Admin':'İşçi') : 'Rol seç'; pill.classList.toggle('admin', admin); }
  const navAdmin = document.getElementById('nav-admin-item'); if(navAdmin) navAdmin.style.display = admin ? 'flex' : 'none';
  const navSettings = document.getElementById('nav-settings-item'); if(navSettings) navSettings.style.display = admin ? 'flex' : 'none';
  const selAdmin = document.querySelector('#mobile-nav-select option[value="admin"]'); if(selAdmin) selAdmin.hidden = !admin;
  const selSettings = document.querySelector('#mobile-nav-select option[value="settings"]'); if(selSettings) selSettings.hidden = !admin;
}
function afterRoleChange(){
  applyRoleUI();
  const admin = isAdmin();
  if(!admin && (currentView==='admin' || currentView==='settings')){ navigate('dashboard'); }
  else if(currentView==='project-workspace' && currentProjectId){ openProject(currentProjectId); }
  else { navigate(currentView); }
  toast(admin ? 'Admin rejimi aktivdir' : 'İşçi rejimi aktivdir');
}
function showRoleGate(){ document.getElementById('role-gate').classList.add('open'); document.getElementById('role-pin-wrap').style.display='none'; }
function hideRoleGate(){ document.getElementById('role-gate').classList.remove('open'); }
function switchRolePrompt(){
  if(isAdmin()){
    if(confirm('İşçi roluna keçmək istəyirsən? (Yalnız baxış rejimi)')){ setRole('employee'); afterRoleChange(); }
  } else {
    showRoleGate();
  }
}
function wireRoleGate(){
  document.getElementById('role-pick-employee').addEventListener('click', ()=>{ setRole('employee'); hideRoleGate(); afterRoleChange(); });
  document.getElementById('role-pick-admin').addEventListener('click', ()=>{
    document.getElementById('role-pin-wrap').style.display='block';
    document.getElementById('role-pin-input').value='';
    document.getElementById('role-pin-input').focus();
  });
  function submitPin(){
    const pin = document.getElementById('role-pin-input').value;
    if(pin === (DB.settings.adminPin || '12072026')){ setRole('admin'); hideRoleGate(); afterRoleChange(); }
    else toast('PIN yanlışdır', 'error');
  }
  document.getElementById('role-pin-submit').addEventListener('click', submitPin);
  document.getElementById('role-pin-input').addEventListener('keydown', e=>{ if(e.key==='Enter') submitPin(); });
}

/* ---------------------- SEED DEMO DATA ---------------------- */
function seedDemoData(db){
  const c1 = uid(), c2 = uid();
  db.clients.push(
    {id:c1, name:'Aysel Məmmədova', company:'Lumen Cafe', email:'aysel@lumencafe.az', phone:'+994 50 123 45 67', whatsapp:'+994501234567', instagram:'@lumencafe', website:'lumencafe.az', status:'active', notes:'Yeni menyu dizaynı üzərində işləyirik.', createdAt:nowISO()},
    {id:c2, name:'Tural Əliyev', company:'Baku Motors', email:'tural@bakumotors.com', phone:'+994 55 987 65 43', whatsapp:'', instagram:'@bakumotors', website:'bakumotors.com', status:'lead', notes:'Landing page təklifi göndərildi.', createdAt:nowISO()}
  );
  const p1=uid(), p2=uid(), p3=uid();
  db.projects.push(
    {id:p1, name:'Lumen Cafe — Rebrand', desc:'Tam brend yenilənməsi: loqo, sayt və menyu dizaynı.', status:'active', progress:68, category:'Branding', deadline:addDays(9), clientId:c1, tags:['dizayn','sayt'], websiteUrl:'https://lumencafe.az', githubUrl:'', previewUrl:'', color:'v', createdAt:nowISO()},
    {id:p2, name:'Baku Motors — Landing', desc:'Yüksək konversiyalı satış səhifəsi.', status:'progress', progress:32, category:'Web', deadline:addDays(21), clientId:c2, tags:['landing','marketing'], websiteUrl:'', githubUrl:'https://github.com/nova/baku-motors', previewUrl:'', color:'b', createdAt:nowISO()},
    {id:p3, name:'Nova OS — Daxili Alət', desc:'Şirkət daxili idarəetmə paneli (bu tətbiq!).', status:'active', progress:81, category:'Product', deadline:addDays(4), clientId:'', tags:['daxili','dev'], websiteUrl:'', githubUrl:'', previewUrl:'', color:'t', createdAt:nowISO()}
  );
  db.tasks.push(
    {id:uid(), projectId:p1, title:'Loqo variantlarını təsdiqlə', status:'doing', priority:'high', due:addDays(1), createdAt:nowISO()},
    {id:uid(), projectId:p1, title:'Menyu PDF-ni hazırla', status:'todo', priority:'med', due:addDays(3), createdAt:nowISO()},
    {id:uid(), projectId:p2, title:'Hero seksiyasını kodla', status:'todo', priority:'high', due:addDays(2), createdAt:nowISO()},
    {id:uid(), projectId:p3, title:'Command palette testi', status:'review', priority:'med', due:addDays(0), createdAt:nowISO()},
    {id:uid(), projectId:p3, title:'Analytics qrafiklərini bitir', status:'done', priority:'low', due:addDays(-1), createdAt:nowISO()}
  );
  db.ideas.push(
    {id:uid(), title:'AI ilə restoran menyu generatoru', desc:'Sadə brief-dən tam menyu dizaynı yaradan alət.', category:'AI', status:'new', priority:'high', tags:['ai','saas'], createdAt:nowISO()},
    {id:uid(), title:'Agentliklər üçün abunə əsaslı saytlar', desc:'Kiçik bizneslər üçün aylıq saytdan-xidmət modeli.', category:'Biznes', status:'considering', priority:'med', tags:['biznes'], createdAt:nowISO()}
  );
  db.notes.push(
    {id:uid(), title:'Görüş qeydləri — Lumen Cafe', bodyHTML:'<p>Müştəri isti-qradient loqo istəyir. Fon <b>tünd</b> olmalıdır. Növbəti görüş: cümə axşamı.</p>', pinned:true, folder:'Görüşlər', createdAt:nowISO(), updatedAt:nowISO()},
    {id:uid(), title:'Marketinq strategiyası — Q3', bodyHTML:'<p>Instagram + email kampaniyası. Büdcə: 800 AZN.</p><ul><li>Reels planı</li><li>E-poçt seriyası</li></ul>', pinned:false, folder:'Marketinq', createdAt:nowISO(), updatedAt:nowISO()}
  );
  db.codeSnippets.push(
    {id:uid(), title:'Glass Card Component', lang:'css', folder:'CSS', code:`.glass-card{\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 20px;\n  backdrop-filter: blur(16px);\n}`, favorite:true, createdAt:nowISO()},
    {id:uid(), title:'Debounce funksiyası', lang:'javascript', folder:'JavaScript', code:`function debounce(fn, delay){\n  let t;\n  return (...args)=>{\n    clearTimeout(t);\n    t = setTimeout(()=>fn(...args), delay);\n  };\n}`, favorite:false, createdAt:nowISO()},
    {id:uid(), title:'Fetch wrapper (React)', lang:'javascript', folder:'React', code:`async function useApi(url){\n  const res = await fetch(url);\n  if(!res.ok) throw new Error('Request failed');\n  return res.json();\n}`, favorite:false, createdAt:nowISO()}
  );
  db.prompts.push(
    {id:uid(), title:'Loqo konsepti promptu', category:'Şəkil', text:'Minimal, geometrik loqo, [BREND ADI] üçün, tünd fonda, qradient bənövşəyi-mavi aksentlə, vektor stil.', favorite:true, createdAt:nowISO()},
    {id:uid(), title:'Landing page kopirayt', category:'Marketinq', text:'[MƏHSUL] üçün 5 cümlədən ibarət güclü hero başlıq və alt-başlıq yaz, ton: etibarlı və müasir.', favorite:false, createdAt:nowISO()}
  );
  db.assets.push(
    {id:uid(), name:'Nova Digital — Əsas Loqo', type:'logo', url:'', createdAt:nowISO()},
    {id:uid(), name:'Inter Font Ailəsi', type:'font', url:'https://fonts.google.com/specimen/Inter', createdAt:nowISO()}
  );
  db.documents.push(
    {id:uid(), name:'Lumen Cafe — Müqavilə.pdf', type:'pdf', size:214000, note:'İmzalanmış xidmət müqaviləsi', category:'Müqavilə', createdAt:nowISO()},
    {id:uid(), name:'Baku Motors — Faktura #002.pdf', type:'pdf', size:98000, note:'Ödəniş gözlənilir', category:'Faktura', createdAt:nowISO()}
  );
  db.calendarEvents.push(
    {id:uid(), title:'Lumen Cafe təqdimatı', date: addDays(1), type:'meeting', relatedProjectId:p1, createdAt:nowISO()},
    {id:uid(), title:'Baku Motors son tarix', date: addDays(21), type:'deadline', relatedProjectId:p2, createdAt:nowISO()},
    {id:uid(), title:'Nova OS son tarix', date: addDays(4), type:'deadline', relatedProjectId:p3, createdAt:nowISO()}
  );
  db.revenue.push(
    {id:uid(), amount:1200, client:'Lumen Cafe', date:addDays(-20), note:'Avans ödəniş'},
    {id:uid(), amount:850, client:'Baku Motors', date:addDays(-10), note:'İlkin razılaşma'},
    {id:uid(), amount:600, client:'Lumen Cafe', date:addDays(-3), note:'2-ci mərhələ'}
  );
  db.activity.push(
    {id:uid(), text:'"Lumen Cafe — Rebrand" layihəsində irəliləyiş 68%-ə çatdı', ts:nowISO(), icon:'layers'},
    {id:uid(), text:'Yeni qeyd əlavə edildi: "Marketinq strategiyası — Q3"', ts:nowISO(), icon:'file-text'},
    {id:uid(), text:'Tural Əliyev müştəri kimi əlavə edildi', ts:nowISO(), icon:'users'}
  );
  return db;
}
function addDays(n){
  const d = new Date(); d.setDate(d.getDate()+n);
  return d.toISOString().slice(0,10);
}

/* ---------------------- UTILITIES ---------------------- */
function escapeHtml(str){
  if(str===undefined || str===null) return '';
  return String(str).replace(/[&<>"']/g, s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
function fmtDate(iso){
  if(!iso) return '—';
  const d = new Date(iso+'T00:00:00');
  if(isNaN(d)) return iso;
  const months=['Yan','Fev','Mar','Apr','May','İyn','İyl','Avq','Sen','Okt','Noy','Dek'];
  return d.getDate()+' '+months[d.getMonth()];
}
function daysUntil(iso){
  const d = new Date(iso+'T00:00:00'), t = new Date(); t.setHours(0,0,0,0);
  return Math.round((d-t)/86400000);
}
function timeAgo(iso){
  const s = Math.floor((Date.now() - new Date(iso).getTime())/1000);
  if(s<60) return 'indicə';
  if(s<3600) return Math.floor(s/60)+' dəq əvvəl';
  if(s<86400) return Math.floor(s/3600)+' saat əvvəl';
  return Math.floor(s/86400)+' gün əvvəl';
}
function fmtBytes(b){
  if(b<1024) return b+' B';
  if(b<1024*1024) return (b/1024).toFixed(1)+' KB';
  return (b/1024/1024).toFixed(1)+' MB';
}
function money(n){ return (n||0).toLocaleString('az-AZ')+' ₼'; }

function toast(text, kind){
  const stack = document.getElementById('toast-stack');
  const el = document.createElement('div');
  el.className='toast';
  const dotColor = kind==='warn' ? 'var(--amber)' : kind==='error' ? 'var(--rose)' : 'var(--teal)';
  el.innerHTML = `<span class="dot" style="background:${dotColor}"></span><span>${escapeHtml(text)}</span>`;
  stack.appendChild(el);
  setTimeout(()=>{ el.style.transition='opacity .3s, transform .3s'; el.style.opacity='0'; el.style.transform='translateY(6px)'; setTimeout(()=>el.remove(),300); }, 3200);
}

function statusBadge(status){
  const map = {
    active:['Aktiv','badge-active'], progress:['İcrada','badge-progress'], done:['Bitib','badge-done'],
    hold:['Dayandırılıb','badge-hold'], lead:['Potensial','badge-hold'], new:['Yeni','badge-progress'],
    considering:['Nəzərdən keçirilir','badge-hold'], archived:['Arxiv','badge-hold']
  };
  const m = map[status] || [status,'badge-progress'];
  return `<span class="badge ${m[1]}">${m[0]}</span>`;
}
function priorityDot(p){
  const c = p==='high' ? 'var(--rose)' : p==='med' ? 'var(--amber)' : 'var(--teal)';
  return `<span class="row-dot" style="background:${c}"></span>`;
}

/* ---------------------- MODAL / FORM BUILDER ---------------------- */
const modalBackdrop = ()=>document.getElementById('modal-backdrop');
function closeModal(){ modalBackdrop().classList.remove('open'); }
function openModal(title, bodyHTML, footHTML){
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  document.getElementById('modal-foot').innerHTML = footHTML || '';
  modalBackdrop().classList.add('open');
  hydrateIcons(document.getElementById('modal'));
}
document.getElementById('modal-close').addEventListener('click', closeModal);
modalBackdrop().addEventListener('click', e=>{ if(e.target===modalBackdrop()) closeModal(); });

/**
 * fields: [{key,label,type:'text'|'textarea'|'select'|'date'|'tags'|'number'|'color', options:[[value,label]], placeholder, span:1|2}]
 */
function renderFormFields(fields, initial){
  initial = initial || {};
  return fields.map(f=>{
    const val = initial[f.key];
    const id = 'f_'+f.key;
    if(f.type==='select'){
      const opts = f.options.map(o=>`<option value="${o[0]}" ${val===o[0]?'selected':''}>${escapeHtml(o[1])}</option>`).join('');
      return `<div class="field"><label>${f.label}</label><select class="input" id="${id}">${opts}</select></div>`;
    }
    if(f.type==='textarea'){
      return `<div class="field"><label>${f.label}</label><textarea class="input" id="${id}" rows="4" placeholder="${f.placeholder||''}">${escapeHtml(val||'')}</textarea></div>`;
    }
    if(f.type==='color'){
      const colors=[['v','#7C6CFF'],['b','#4F8CFF'],['t','#33E0C2'],['a','#FFB454'],['r','#FF6B81']];
      const opts = colors.map(c=>`<div class="pill-opt color-pick ${val===c[0]?'active':''}" data-color="${c[0]}" style="background:${val===c[0]?c[1]:'transparent'};border-color:${c[1]}" onclick="document.querySelectorAll('.color-pick').forEach(e=>{e.classList.remove('active');e.style.background='transparent'});this.classList.add('active');this.style.background='${c[1]}';this.dataset.selected='1';document.getElementById('${id}').value='${c[0]}'">&nbsp;</div>`).join('');
      return `<div class="field"><label>${f.label}</label><input type="hidden" id="${id}" value="${val||'v'}"><div class="pill-select">${opts}</div></div>`;
    }
    return `<div class="field"><label>${f.label}</label><input class="input" id="${id}" type="${f.type||'text'}" value="${escapeHtml(val||'')}" placeholder="${f.placeholder||''}"></div>`;
  }).join('');
}
function collectFormFields(fields){
  const out = {};
  fields.forEach(f=>{
    const el = document.getElementById('f_'+f.key);
    if(!el) return;
    if(f.type==='tags'){ out[f.key] = el.value.split(',').map(s=>s.trim()).filter(Boolean); }
    else out[f.key] = el.value;
  });
  return out;
}

/* ---------------------- CONTEXT MENU ---------------------- */
const ctxMenu = document.getElementById('ctx-menu');
function openContextMenu(x, y, items){
  ctxMenu.innerHTML = items.map(it=>{
    if(it==='sep') return '<div class="ctx-sep"></div>';
    return `<div class="ctx-item ${it.danger?'danger':''}" data-act="${it.act}"><span data-icon="${it.icon}"></span>${it.label}</div>`;
  }).join('');
  hydrateIcons(ctxMenu);
  ctxMenu.querySelectorAll('.ctx-item').forEach((el,i)=>{
    const it = items.filter(x=>x!=='sep')[i];
  });
  let idx=0;
  ctxMenu.querySelectorAll('.ctx-item').forEach(el=>{
    el.addEventListener('click', ()=>{
      const act = el.getAttribute('data-act');
      ctxMenu.classList.remove('open');
      const found = items.find(it=>it!=='sep' && it.act===act);
      if(found) found.run();
    });
  });
  const menuW=200, menuH= items.length*36+20;
  const px = Math.min(x, window.innerWidth-menuW-10);
  const py = Math.min(y, window.innerHeight-menuH-10);
  ctxMenu.style.left = px+'px'; ctxMenu.style.top = py+'px';
  ctxMenu.classList.add('open');
}
document.addEventListener('click', (e)=>{ if(!ctxMenu.contains(e.target)) ctxMenu.classList.remove('open'); });
document.addEventListener('contextmenu', (e)=>{
  const card = e.target.closest('[data-ctx]');
  if(!card) return;
});

/* =========================================================
   ROUTER
   ========================================================= */
let currentView = 'dashboard';
let currentProjectId = null;

const VIEW_TITLES = {
  dashboard:'Dashboard', analytics:'Analitika', calendar:'Təqvim', projects:'Layihələr',
  clients:'Müştərilər (CRM)', ideas:'İdeyalar', notes:'Qeydlər', documents:'Sənədlər',
  code:'Kod Kitabxanası', images:'Şəkillər', videos:'Videolar', assets:'Aktivlər və Promptlar',
  templates:'Şablonlar', ai:'AI Alətləri', settings:'Ayarlar', admin:'Admin', 'project-workspace':'Layihə'
};

function navigate(view, opts){
  opts = opts || {};
  const app = document.getElementById('app');
  if(app) app.classList.remove('mobile-nav-open');
  const sb = document.getElementById('sidebar-backdrop');
  if(sb) sb.classList.remove('open');
  if(view==='admin' && !isAdmin()){ toast('Bu bölmə yalnız admin üçündür','warn'); view='dashboard'; }
  if(view==='settings' && !isAdmin()){ toast('Bu bölmə yalnız admin üçündür','warn'); view='dashboard'; }
  currentView = view;
  document.querySelectorAll('.nav-item[data-view]').forEach(el=>{
    el.classList.toggle('active', el.getAttribute('data-view')===view);
  });
  document.getElementById('topbar-title').textContent = opts.title || VIEW_TITLES[view] || 'Nova Digital OS';
  const mobileSel = document.getElementById('mobile-nav-select');
  if(mobileSel && VIEW_TITLES[view] !== undefined && view!=='project-workspace'){ mobileSel.value = view; }
  const renderers = {
    dashboard: renderDashboard, analytics: renderAnalytics, calendar: renderCalendar,
    projects: renderProjects, clients: renderClients, ideas: renderIdeas, notes: renderNotes,
    documents: renderDocuments, code: renderCode, images: renderImages, videos: renderVideos,
    assets: renderAssets, templates: renderTemplates, ai: renderAI, settings: renderSettings, admin: renderAdmin,
  };
  const fn = renderers[view];
  const content = document.getElementById('content');
  content.innerHTML = '<div class="view active" id="view-root"></div>';
  if(fn) fn(document.getElementById('view-root'));
  window.scrollTo(0,0);
  updateNavBadges();
}
function updateNavBadges(){
  document.getElementById('nav-count-projects').textContent = DB.projects.length;
  document.getElementById('nav-count-clients').textContent = DB.clients.length;
}

function isMobile(){ return window.innerWidth <= 860; }
function closeMobileNav(){ document.getElementById('app').classList.remove('mobile-nav-open'); document.getElementById('sidebar-backdrop').classList.remove('open'); }

document.getElementById('home-btn').addEventListener('click', ()=>{ navigate('dashboard'); });

document.getElementById('mobile-nav-select').addEventListener('change', (e)=>{ navigate(e.target.value); });

/* Delegated click handling for nav items — robust against any DOM/stacking quirks on embedded mobile browsers */
document.addEventListener('click', (e)=>{
  const navEl = e.target.closest('.nav-item[data-view]');
  if(navEl){ navigate(navEl.getAttribute('data-view')); }
});

/* Sidebar collapse (desktop) / drawer (mobile) */
document.getElementById('sidebar-toggle').addEventListener('click', ()=>{
  const app = document.getElementById('app');
  if(isMobile()){
    const open = app.classList.toggle('mobile-nav-open');
    document.getElementById('sidebar-backdrop').classList.toggle('open', open);
  } else {
    app.classList.toggle('collapsed');
    DB.settings.sidebarCollapsed = app.classList.contains('collapsed');
    saveDB();
  }
});
document.getElementById('sidebar-backdrop').addEventListener('click', closeMobileNav);
window.addEventListener('resize', ()=>{ if(!isMobile()) closeMobileNav(); });

/* Theme toggle (dark default; light = softer dark-elevated look, kept premium) */
document.getElementById('theme-toggle').addEventListener('click', ()=>{
  document.body.classList.toggle('theme-light');
  DB.settings.theme = document.body.classList.contains('theme-light') ? 'light' : 'dark';
  saveDB();
  toast(DB.settings.theme==='light' ? 'Açıq rejim aktivdir' : 'Tünd rejim aktivdir');
});

/* =========================================================
   DASHBOARD
   ========================================================= */
function renderDashboard(root){
  const activeProjects = DB.projects.filter(p=>p.status==='active'||p.status==='progress');
  const totalRevenue = DB.revenue.reduce((s,r)=>s+Number(r.amount||0),0);
  const upcoming = DB.calendarEvents.filter(e=>daysUntil(e.date)>=0).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,5);
  const todayTasks = DB.tasks.filter(t=> t.status!=='done').sort((a,b)=>(a.due||'').localeCompare(b.due||'')).slice(0,6);
  const storagePct = Math.min(96, 12 + DB.images.length*4 + DB.documents.length*3 + DB.notes.length*1.5);

  root.innerHTML = `
    <div class="view-header">
      <div>
        <h1>Xoş gəldin, ${escapeHtml(DB.settings.profileName)} 👋</h1>
        <p>Nova Digital-in bütün fəaliyyəti bir baxışda.</p>
      </div>
      <div class="view-actions">
        <button class="btn-ghost" onclick="navigate('calendar')"><span data-icon="calendar"></span>Təqvimə bax</button>
        ${isAdmin()?'<button class="btn-primary" onclick="openProjectForm()"><span data-icon="plus"></span>Yeni layihə</button>':''}
      </div>
    </div>

    <div class="stat-grid">
      ${statCard('layers','Aktiv layihələr', activeProjects.length, 'v', '+'+DB.projects.length+' toplam')}
      ${statCard('users','Aktiv müştərilər', DB.clients.filter(c=>c.status==='active').length, 't', DB.clients.length+' toplam')}
      ${statCard('bar-chart','Gəlir (bu dövr)', money(totalRevenue), 'b', 'Bütün ödənişlər')}
      ${statCard('package','Anbar istifadəsi', Math.round(storagePct)+'%', 'a', (DB.images.length+DB.documents.length)+' fayl')}
    </div>

    <div class="dash-grid">
      <div>
        <div class="card panel">
          <div class="panel-head"><h3>Son layihələr</h3><span class="link-more" onclick="navigate('projects')">Hamısı →</span></div>
          ${ DB.projects.slice(-4).reverse().map(p=>`
            <div class="row-item" onclick="openProject('${p.id}')">
              ${priorityDot(p.progress>66?'low':p.progress>33?'med':'high')}
              <div>
                <div class="ri-title">${escapeHtml(p.name)}</div>
                <div class="ri-sub">${escapeHtml(p.category)} · ${clientName(p.clientId)}</div>
              </div>
              <div class="row-right">
                ${statusBadge(p.status)}
                <div style="margin-top:6px">${p.progress}%</div>
              </div>
            </div>`).join('') || emptyRow('Hələ layihə yoxdur') }
        </div>

        <div class="card panel">
          <div class="panel-head"><h3>Son fəaliyyət</h3></div>
          ${ DB.activity.slice(0,6).map(a=>`
            <div class="row-item" style="cursor:default">
              <span data-icon="${a.icon}" style="color:var(--text-tertiary)"></span>
              <div><div class="ri-title" style="font-weight:400">${escapeHtml(a.text)}</div></div>
              <div class="row-right">${timeAgo(a.ts)}</div>
            </div>`).join('') || emptyRow('Fəaliyyət tapılmadı') }
        </div>
      </div>

      <div>
        <div class="card panel">
          <div class="panel-head"><h3>Bugünkü tapşırıqlar</h3><span class="link-more" onclick="openProjectsTasksView()">Hamısı →</span></div>
          ${ todayTasks.map(t=>`
            <div class="row-item" onclick="openProject('${t.projectId}')">
              ${priorityDot(t.priority)}
              <div>
                <div class="ri-title">${escapeHtml(t.title)}</div>
                <div class="ri-sub">${projectName(t.projectId)}</div>
              </div>
              <div class="row-right">${fmtDate(t.due)}</div>
            </div>`).join('') || emptyRow('Tapşırıq yoxdur') }
        </div>

        <div class="card panel">
          <div class="panel-head"><h3>Yaxın son tarixlər</h3></div>
          ${ upcoming.map(e=>`
            <div class="row-item" style="cursor:default">
              <span data-icon="${e.type==='meeting'?'users':'flag'}" style="color:${e.type==='meeting'?'var(--blue)':'var(--rose)'}"></span>
              <div>
                <div class="ri-title">${escapeHtml(e.title)}</div>
                <div class="ri-sub">${daysUntil(e.date)===0?'Bu gün':daysUntil(e.date)+' gün qalıb'}</div>
              </div>
              <div class="row-right">${fmtDate(e.date)}</div>
            </div>`).join('') || emptyRow('Yaxın tarix yoxdur') }
        </div>
      </div>
    </div>
  `;
  hydrateIcons(root);
}
function statCard(ic,label,value,color,trend){
  const grad = {v:'var(--gradient-primary)',b:'linear-gradient(135deg,#4F8CFF,#33E0C2)',t:'var(--gradient-teal)',a:'var(--gradient-rose)'}[color]||'var(--gradient-primary)';
  return `<div class="card stat-card">
    <div class="stat-icon" style="background:${grad}"><span data-icon="${ic}" style="color:#fff"></span></div>
    <div class="stat-value">${value}</div>
    <div class="stat-label">${label}</div>
    <div class="stat-trend trend-up">${trend}</div>
  </div>`;
}
function emptyRow(text){ return `<div style="padding:20px;text-align:center;color:var(--text-tertiary);font-size:12.5px">${text}</div>`; }
function clientName(id){ const c = DB.clients.find(x=>x.id===id); return c ? c.name : 'Daxili'; }
function projectName(id){ const p = DB.projects.find(x=>x.id===id); return p ? p.name : '—'; }
function openProjectsTasksView(){ navigate('projects'); }
function openNoteQuick(){ navigate('notes'); setTimeout(()=>createNote(),50); }

/* =========================================================
   PROJECTS
   ========================================================= */
let projectsFilter = { search:'', status:'all', view:'grid' };

function renderProjects(root){
  root.innerHTML = `
    <div class="view-header">
      <div><h1>Layihələr</h1><p>${DB.projects.length} layihə · Nova Digital-in bütün işləri</p></div>
      <div class="view-actions">${isAdmin()?'<button class="btn-primary" onclick="openProjectForm()"><span data-icon="plus"></span>Yeni layihə</button>':''}</div>
    </div>
    <div class="toolbar">
      <input class="input" placeholder="Layihə axtar..." id="proj-search" value="${escapeHtml(projectsFilter.search)}">
      <select class="input" id="proj-status-filter" style="max-width:170px">
        <option value="all">Bütün statuslar</option>
        <option value="active">Aktiv</option>
        <option value="progress">İcrada</option>
        <option value="hold">Dayandırılıb</option>
        <option value="done">Bitib</option>
      </select>
      <div class="seg">
        <button class="${projectsFilter.view==='grid'?'active':''}" onclick="setProjView('grid')"><span data-icon="grid"></span></button>
        <button class="${projectsFilter.view==='list'?'active':''}" onclick="setProjView('list')"><span data-icon="menu"></span></button>
      </div>
    </div>
    <div id="proj-list"></div>
  `;
  document.getElementById('proj-search').addEventListener('input', e=>{ projectsFilter.search=e.target.value; renderProjectList(); });
  document.getElementById('proj-status-filter').value = projectsFilter.status;
  document.getElementById('proj-status-filter').addEventListener('change', e=>{ projectsFilter.status=e.target.value; renderProjectList(); });
  hydrateIcons(root);
  renderProjectList();
}
function setProjView(v){ projectsFilter.view=v; renderProjects(document.getElementById('view-root')); }
function renderProjectList(){
  const wrap = document.getElementById('proj-list');
  let list = DB.projects.filter(p=>
    (projectsFilter.status==='all'||p.status===projectsFilter.status) &&
    (p.name.toLowerCase().includes(projectsFilter.search.toLowerCase()) || (p.tags||[]).join(' ').includes(projectsFilter.search.toLowerCase()))
  );
  if(!list.length){ wrap.innerHTML = emptyState('layers','Layihə tapılmadı','Yeni layihə yaradaraq başla.','openProjectForm()'); return; }
  const grads = {v:'var(--gradient-primary)', b:'linear-gradient(135deg,#4F8CFF,#33E0C2)', t:'var(--gradient-teal)', a:'var(--gradient-rose)', r:'var(--gradient-rose)'};
  if(projectsFilter.view==='grid'){
    wrap.innerHTML = `<div class="grid">${list.slice().reverse().map(p=>`
      <div class="card item-card" data-ctx="project" data-id="${p.id}" onclick="openProject('${p.id}')" oncontextmenu="event.preventDefault();projectCtx(event,'${p.id}')">
        <div class="item-thumb" style="background:${grads[p.color]||grads.v}">${escapeHtml(p.name.slice(0,2).toUpperCase())}</div>
        <div class="item-body">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
            <div class="item-title">${escapeHtml(p.name)}</div>
            ${statusBadge(p.status)}
          </div>
          <div class="item-desc">${escapeHtml(p.desc||'')}</div>
          <div class="progress-track"><div class="progress-fill" style="width:${p.progress}%"></div></div>
          <div class="tag-row">${(p.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
          <div class="item-foot"><span>${clientName(p.clientId)}</span><span>${fmtDate(p.deadline)}</span></div>
        </div>
      </div>`).join('')}</div>`;
  } else {
    wrap.innerHTML = list.slice().reverse().map(p=>`
      <div class="card client-row" style="cursor:pointer;margin-bottom:8px" onclick="openProject('${p.id}')" oncontextmenu="event.preventDefault();projectCtx(event,'${p.id}')">
        <div class="client-name-cell"><div class="avatar-md" style="background:${grads[p.color]||grads.v}">${escapeHtml(p.name.slice(0,2).toUpperCase())}</div><div><div style="font-weight:600">${escapeHtml(p.name)}</div><div style="font-size:11.5px;color:var(--text-tertiary)">${escapeHtml(p.category)}</div></div></div>
        <div data-label="Müştəri">${clientName(p.clientId)}</div>
        <div data-label="Status">${statusBadge(p.status)}</div>
        <div data-label="İrəliləyiş">${p.progress}%</div>
        <div data-label="Son tarix" style="text-align:right;color:var(--text-tertiary)">${fmtDate(p.deadline)}</div>
      </div>`).join('');
  }
  hydrateIcons(wrap);
}
function emptyState(ic,title,sub,action){
  return `<div class="empty-state"><span data-icon="${ic}" data-size="48"></span><h3>${title}</h3><p>${sub}</p>${(action && isAdmin())?`<button class="btn-primary" style="margin:0 auto" onclick="${action}"><span data-icon="plus"></span>Əlavə et</button>`:''}</div>`;
}
function projectCtx(e,id){
  const items = [{act:'open', icon:'chevron-right', label:'Aç', run:()=>openProject(id)}];
  if(isAdmin()){
    items.push({act:'edit', icon:'edit', label:'Redaktə et', run:()=>openProjectForm(id)});
    items.push('sep');
    items.push({act:'del', icon:'trash', label:'Sil', danger:true, run:()=>deleteProject(id)});
  }
  openContextMenu(e.clientX, e.clientY, items);
}
function deleteProject(id){
  if(!requireAdmin()) return;
  DB.projects = DB.projects.filter(p=>p.id!==id);
  DB.tasks = DB.tasks.filter(t=>t.projectId!==id);
  saveDB(); toast('Layihə silindi');
  navigate('projects');
}
function openProjectForm(id){
  if(!id && !requireAdmin('Yalnız admin yeni layihə əlavə edə bilər')) return;
  const p = DB.projects.find(x=>x.id===id) || {};
  const fields = [
    {key:'name', label:'Layihə adı'},
    {key:'category', label:'Kateqoriya', placeholder:'Web, Branding, Product...'},
    {key:'desc', label:'Açıqlama', type:'textarea'},
    {key:'status', label:'Status', type:'select', options:[['active','Aktiv'],['progress','İcrada'],['hold','Dayandırılıb'],['done','Bitib']]},
    {key:'progress', label:'İrəliləyiş (%)', type:'number'},
    {key:'clientId', label:'Müştəri', type:'select', options:[['','Daxili layihə'], ...DB.clients.map(c=>[c.id,c.name])]},
    {key:'deadline', label:'Son tarix', type:'date'},
    {key:'tags', label:'Teqlər (vergüllə)'},
    {key:'websiteUrl', label:'Sayt URL'},
    {key:'githubUrl', label:'GitHub URL'},
    {key:'color', label:'Rəng', type:'color'},
  ];
  const initial = Object.assign({}, p, {tags:(p.tags||[]).join(', ')});
  const admin = isAdmin();
  const bodyHtml = `<div class="field-row"><div class="field">${renderFormFields([fields[0]],initial)}</div><div class="field">${renderFormFields([fields[1]],initial)}</div></div>${renderFormFields(fields.slice(2,4),initial)}<div class="field-row">${renderFormFields([fields[4]],initial)}${renderFormFields([fields[5]],initial)}</div><div class="field-row">${renderFormFields([fields[6]],initial)}</div>${renderFormFields([fields[7]],initial)}<div class="field-row">${renderFormFields([fields[8]],initial)}${renderFormFields([fields[9]],initial)}</div>${renderFormFields([fields[10]],initial)}`;
  openModal(id?'Layihəni redaktə et':'Yeni layihə', admin?bodyHtml:readOnlyize(bodyHtml),
  admin ? `<button class="btn-ghost" onclick="closeModal()">Ləğv et</button><button class="btn-primary" onclick="submitProjectForm('${id||''}')"><span data-icon="check"></span>Yadda saxla</button>` : `<button class="btn-ghost" onclick="closeModal()">Bağla</button>`);
  window._projFields = fields;
}
function submitProjectForm(id){
  if(!requireAdmin()) return;
  const data = collectFormFields(window._projFields);
  data.tags = data.tags.split(',').map(s=>s.trim()).filter(Boolean);
  data.progress = Number(data.progress)||0;
  if(id){
    Object.assign(DB.projects.find(p=>p.id===id), data);
    logActivity(`"${data.name}" layihəsi yeniləndi`, 'layers');
    toast('Layihə yeniləndi');
  } else {
    DB.projects.push(Object.assign({id:uid(), createdAt:nowISO(), githubUrl:'', websiteUrl:'', previewUrl:''}, data));
    logActivity(`Yeni layihə yaradıldı: "${data.name}"`, 'layers');
    toast('Layihə yaradıldı');
  }
  saveDB(); closeModal();
  if(currentView==='project-workspace' && id) openProject(id); else navigate('projects');
}

/* ---------------- PROJECT WORKSPACE ---------------- */
let workspaceTab = 'overview';
function openProject(id){
  const app = document.getElementById('app');
  if(app) app.classList.remove('mobile-nav-open');
  const sb = document.getElementById('sidebar-backdrop');
  if(sb) sb.classList.remove('open');
  const mobileSel = document.getElementById('mobile-nav-select');
  if(mobileSel) mobileSel.value = 'projects';
  currentProjectId = id;
  currentView = 'project-workspace';
  document.querySelectorAll('.nav-item[data-view]').forEach(el=>el.classList.remove('active'));
  const p = DB.projects.find(x=>x.id===id);
  document.getElementById('topbar-title').textContent = p ? p.name : 'Layihə';
  workspaceTab='overview';
  const content = document.getElementById('content');
  content.innerHTML = '<div class="view active" id="view-root"></div>';
  renderProjectWorkspace(document.getElementById('view-root'));
}
function renderProjectWorkspace(root){
  const p = DB.projects.find(x=>x.id===currentProjectId);
  if(!p){ navigate('projects'); return; }
  const tabs = ['overview','tasks','files','code','images','notes','timeline'];
  const labels = {overview:'İcmal', tasks:'Tapşırıqlar', files:'Fayllar', code:'Kod', images:'Şəkillər', notes:'Qeydlər', timeline:'Zaman xətti'};
  root.innerHTML = `
    <div class="view-header">
      <div>
        <button class="btn-ghost" style="margin-bottom:10px" onclick="navigate('projects')"><span data-icon="chevron-right" style="transform:rotate(180deg)"></span>Layihələr</button>
        <h1>${escapeHtml(p.name)}</h1>
        <p>${escapeHtml(p.desc||'')}</p>
      </div>
      <div class="view-actions">
        ${statusBadge(p.status)}
        ${isAdmin()?`<button class="btn-ghost" onclick="openProjectForm('${p.id}')"><span data-icon="edit"></span>Redaktə et</button>`:''}
      </div>
    </div>
    <div class="tabbar" id="ws-tabbar">
      ${tabs.map(t=>`<button data-tab="${t}" class="${workspaceTab===t?'active':''}">${labels[t]}</button>`).join('')}
    </div>
    <div id="ws-content"></div>
  `;
  root.querySelectorAll('#ws-tabbar button').forEach(b=>{
    b.addEventListener('click', ()=>{ workspaceTab=b.getAttribute('data-tab'); renderProjectWorkspace(root); });
  });
  hydrateIcons(root);
  renderWorkspaceTab(document.getElementById('ws-content'), p);
}
function renderWorkspaceTab(el, p){
  if(workspaceTab==='overview'){
    const tasks = DB.tasks.filter(t=>t.projectId===p.id);
    const done = tasks.filter(t=>t.status==='done').length;
    el.innerHTML = `
      <div class="dash-grid">
        <div>
          <div class="card panel">
            <div class="panel-head"><h3>Layihə məlumatı</h3></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;font-size:13px">
              <div><div class="text-muted" style="font-size:11.5px">Kateqoriya</div>${escapeHtml(p.category)}</div>
              <div><div class="text-muted" style="font-size:11.5px">Müştəri</div>${clientName(p.clientId)}</div>
              <div><div class="text-muted" style="font-size:11.5px">Son tarix</div>${fmtDate(p.deadline)} (${daysUntil(p.deadline)} gün)</div>
              <div><div class="text-muted" style="font-size:11.5px">Sayt</div>${p.websiteUrl?`<a href="${p.websiteUrl}" target="_blank" style="color:var(--blue)">${p.websiteUrl}</a>`:'—'}</div>
              <div><div class="text-muted" style="font-size:11.5px">GitHub</div>${p.githubUrl?`<a href="${p.githubUrl}" target="_blank" style="color:var(--blue)">${p.githubUrl}</a>`:'—'}</div>
              <div><div class="text-muted" style="font-size:11.5px">Teqlər</div><div class="tag-row">${(p.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')||'—'}</div></div>
            </div>
          </div>
        </div>
        <div>
          <div class="card panel">
            <div class="panel-head"><h3>İrəliləyiş</h3></div>
            <div class="stat-value" style="font-size:30px">${p.progress}%</div>
            <div class="progress-track"><div class="progress-fill" style="width:${p.progress}%"></div></div>
            <div class="text-muted" style="margin-top:10px;font-size:12px">${done}/${tasks.length} tapşırıq tamamlandı</div>
          </div>
        </div>
      </div>`;
  }
  else if(workspaceTab==='tasks') renderProjectTasks(el, p);
  else if(workspaceTab==='files') renderProjectFiles(el, p);
  else if(workspaceTab==='code') renderProjectCode(el, p);
  else if(workspaceTab==='images') renderProjectImages(el, p);
  else if(workspaceTab==='notes') renderProjectNotes(el, p);
  else if(workspaceTab==='timeline') renderProjectTimeline(el, p);
  hydrateIcons(el);
}

function renderProjectTasks(el, p){
  const admin = isAdmin();
  const cols = [['todo','Ediləcək'],['doing','İcrada'],['review','Yoxlamada'],['done','Bitib']];
  el.innerHTML = `
    <div class="view-actions" style="margin-bottom:14px">${admin?`<button class="btn-primary" onclick="openTaskForm('${p.id}')"><span data-icon="plus"></span>Tapşırıq əlavə et</button>`:''}</div>
    <div class="kanban">
      ${cols.map(([key,label])=>{
        const items = DB.tasks.filter(t=>t.projectId===p.id && t.status===key);
        return `<div class="card kanban-col" ondragover="event.preventDefault()" ondrop="dropTask(event,'${key}')">
          <div class="kanban-col-head">${priorityDot('med')}${label}<span style="margin-left:auto;color:var(--text-tertiary)">${items.length}</span></div>
          ${items.map(t=>`<div class="kanban-card" draggable="${admin}" ${admin?`ondragstart="event.dataTransfer.setData('id','${t.id}')" oncontextmenu="event.preventDefault();taskCtx(event,'${t.id}')"`:''}>
            <div style="display:flex;gap:6px;align-items:center;margin-bottom:4px">${priorityDot(t.priority)}<b>${escapeHtml(t.title)}</b></div>
            <div style="color:var(--text-tertiary);font-size:11px">${fmtDate(t.due)}</div>
          </div>`).join('')}
        </div>`;
      }).join('')}
    </div>`;
}
function dropTask(e, status){
  if(!isAdmin()) return;
  const id = e.dataTransfer.getData('id');
  const t = DB.tasks.find(x=>x.id===id);
  if(t){ t.status = status; saveDB(); renderProjectWorkspace(document.getElementById('view-root')); }
}
function taskCtx(e,id){
  if(!isAdmin()){ lockedCtxToast(); return; }
  openContextMenu(e.clientX,e.clientY,[
    {act:'edit',icon:'edit',label:'Redaktə et',run:()=>openTaskForm(DB.tasks.find(t=>t.id===id).projectId,id)},
    {act:'del',icon:'trash',label:'Sil',danger:true,run:()=>{DB.tasks=DB.tasks.filter(t=>t.id!==id);saveDB();renderProjectWorkspace(document.getElementById('view-root'));toast('Tapşırıq silindi');}}
  ]);
}
function openTaskForm(projectId, id){
  if(!requireAdmin()) return;
  const t = DB.tasks.find(x=>x.id===id) || {};
  const fields = [
    {key:'title', label:'Tapşırıq adı'},
    {key:'status', label:'Status', type:'select', options:[['todo','Ediləcək'],['doing','İcrada'],['review','Yoxlamada'],['done','Bitib']]},
    {key:'priority', label:'Prioritet', type:'select', options:[['low','Aşağı'],['med','Orta'],['high','Yüksək']]},
    {key:'due', label:'Son tarix', type:'date'},
  ];
  openModal(id?'Tapşırığı redaktə et':'Yeni tapşırıq', renderFormFields(fields, t),
    `<button class="btn-ghost" onclick="closeModal()">Ləğv et</button><button class="btn-primary" onclick="submitTaskForm('${projectId}','${id||''}')">Yadda saxla</button>`);
  window._taskFields = fields;
}
function submitTaskForm(projectId, id){
  if(!requireAdmin()) return;
  const data = collectFormFields(window._taskFields);
  if(id){ Object.assign(DB.tasks.find(t=>t.id===id), data); toast('Tapşırıq yeniləndi'); }
  else { DB.tasks.push(Object.assign({id:uid(), projectId, createdAt:nowISO()}, data)); toast('Tapşırıq əlavə edildi'); }
  saveDB(); closeModal(); renderProjectWorkspace(document.getElementById('view-root'));
}

function renderProjectFiles(el, p){
  const admin = isAdmin();
  el.innerHTML = `
    ${admin?`<div class="dropzone" id="proj-dropzone">
      <span data-icon="upload" data-size="30"></span>
      <div>Faylları buraya sürüşdür və ya <b style="color:var(--violet)">klikləyib seç</b></div>
      <div style="font-size:11px;margin-top:6px">Sənədlər bu layihəyə bağlanacaq (Sənədlər bölməsində görünür)</div>
      <input type="file" id="proj-file-input" multiple style="display:none">
    </div>` : `<div class="locked-note"><span data-icon="lock"></span>Fayl əlavə etmək yalnız admin üçündür</div>`}
    <div id="proj-file-list"></div>
  `;
  const docs = DB.documents.filter(d=>d.projectId===p.id);
  const listEl = () => document.getElementById('proj-file-list');
  function refresh(){
    listEl().innerHTML = docs.length ? `<div class="grid">${docs.map(d=>docCard(d)).join('')}</div>` : emptyState('file','Fayl yoxdur','Bu layihəyə fayl əlavə et.');
    hydrateIcons(listEl());
  }
  refresh();
  if(admin){
    const dz = document.getElementById('proj-dropzone');
    const input = document.getElementById('proj-file-input');
    dz.addEventListener('click', ()=>input.click());
    ['dragover','dragleave','drop'].forEach(evt=>{
      dz.addEventListener(evt, e=>{ e.preventDefault(); dz.classList.toggle('drag', evt==='dragover'); });
    });
    dz.addEventListener('drop', e=>{ handleFiles(e.dataTransfer.files, p.id, docs, refresh); });
    input.addEventListener('change', e=>{ handleFiles(e.target.files, p.id, docs, refresh); });
  }
  hydrateIcons(el);
}
function handleFiles(files, projectId, docsArr, refreshFn){
  if(!requireAdmin()) return;
  Array.from(files).forEach(f=>{
    const d = {id:uid(), name:f.name, type:f.name.split('.').pop(), size:f.size, note:'', category:'Fayl', projectId, createdAt:nowISO()};
    DB.documents.push(d); docsArr.push(d);
  });
  saveDB(); toast(files.length+' fayl əlavə edildi'); if(refreshFn) refreshFn();
}
function docCard(d){
  return `<div class="card item-card" style="cursor:default">
    <div class="item-thumb" style="background:var(--glass-strong);color:var(--text-tertiary);height:70px">${docIcon(d.type)}</div>
    <div class="item-body" style="padding:12px 14px">
      <div class="item-title" style="font-size:12.5px">${escapeHtml(d.name)}</div>
      <div class="item-foot"><span>${fmtBytes(d.size||0)}</span><span>${fmtDate(d.createdAt.slice(0,10))}</span></div>
    </div>
  </div>`;
}
function docIcon(type){
  const map={pdf:'file-text',docx:'file-text',doc:'file-text',xlsx:'bar-chart',txt:'file-text',md:'file-text'};
  return icon(map[type]||'file', 22);
}

function renderProjectCode(el, p){
  const snips = DB.codeSnippets.filter(s=>s.projectId===p.id);
  el.innerHTML = `<div class="view-actions" style="margin-bottom:14px">${isAdmin()?`<button class="btn-primary" onclick="openSnippetForm(null,'${p.id}')"><span data-icon="plus"></span>Snippet əlavə et</button>`:''}</div><div id="proj-code-list"></div>`;
  document.getElementById('proj-code-list').innerHTML = snips.length ? snips.map(snippetCard).join('') : emptyState('code','Kod yoxdur','Bu layihəyə kod snippet əlavə et.');
  hydrateIcons(el); if(window.hljs) hljs.highlightAll();
}
function renderProjectImages(el, p){
  const admin = isAdmin();
  const imgs = DB.images.filter(i=>i.projectId===p.id);
  el.innerHTML = `${admin?`<div class="dropzone" id="proj-img-dz"><span data-icon="upload" data-size="30"></span><div>Şəkil əlavə et</div><input type="file" id="proj-img-input" accept="image/*" multiple style="display:none"></div>`:`<div class="locked-note"><span data-icon="lock"></span>Şəkil yükləmək yalnız admin üçündür</div>`}<div class="gallery" id="proj-img-gallery"></div>`;
  const gal = document.getElementById('proj-img-gallery');
  function refresh(){ gal.innerHTML = imgs.map(i=>`<div class="gallery-item"><img src="${i.dataUrl}"><span class="gi-tag">${escapeHtml(i.name.slice(0,14))}</span></div>`).join('') || ''; }
  refresh();
  if(admin){
    const dz=document.getElementById('proj-img-dz'), input=document.getElementById('proj-img-input');
    dz.addEventListener('click', ()=>input.click());
    ['dragover','dragleave','drop'].forEach(evt=>dz.addEventListener(evt,e=>{e.preventDefault();dz.classList.toggle('drag',evt==='dragover');}));
    function ingest(files){
      Array.from(files).forEach(f=>{
        const reader = new FileReader();
        reader.onload = ev=>{ const img={id:uid(),name:f.name,dataUrl:ev.target.result,tags:[],folder:'Layihə',projectId:p.id,createdAt:nowISO()}; DB.images.push(img); imgs.push(img); saveDB(); refresh(); };
        reader.readAsDataURL(f);
      });
    }
    dz.addEventListener('drop', e=>ingest(e.dataTransfer.files));
    input.addEventListener('change', e=>ingest(e.target.files));
  }
  hydrateIcons(el);
}
function renderProjectNotes(el, p){
  const notes = DB.notes.filter(n=>n.projectId===p.id);
  el.innerHTML = `<div class="view-actions" style="margin-bottom:14px">${isAdmin()?`<button class="btn-primary" onclick="createNote('${p.id}')"><span data-icon="plus"></span>Qeyd əlavə et</button>`:''}</div><div class="grid" id="proj-notes-grid"></div>`;
  document.getElementById('proj-notes-grid').innerHTML = notes.length ? notes.map(n=>`
    <div class="card item-card" style="cursor:pointer;padding:16px" onclick="navigate('notes');setTimeout(()=>selectNote('${n.id}'),50)">
      <div class="item-title">${escapeHtml(n.title)}</div>
      <div class="item-desc">${escapeHtml(n.bodyHTML.replace(/<[^>]+>/g,' ').slice(0,120))}</div>
    </div>`).join('') : emptyState('file-text','Qeyd yoxdur','Bu layihə üçün qeyd yarat.');
  hydrateIcons(el);
}
function renderProjectTimeline(el, p){
  const tasks = DB.tasks.filter(t=>t.projectId===p.id).sort((a,b)=>(a.due||'').localeCompare(b.due||''));
  el.innerHTML = `<div class="card panel">${tasks.map((t,i)=>`
    <div style="display:flex;gap:14px;padding:12px 4px;${i<tasks.length-1?'border-bottom:1px solid var(--glass-border)':''}">
      <div style="width:8px;height:8px;border-radius:50%;margin-top:6px;flex-shrink:0;background:${t.status==='done'?'var(--teal)':'var(--violet)'}"></div>
      <div style="flex:1"><div style="font-weight:500">${escapeHtml(t.title)}</div><div style="font-size:11.5px;color:var(--text-tertiary)">${fmtDate(t.due)} · ${statusBadge(t.status==='done'?'done':'progress')}</div></div>
    </div>`).join('') || emptyState('clock','Zaman xətti boşdur','Tapşırıq əlavə et ki, zaman xətti yaransın.')}</div>`;
}

/* =========================================================
   CLIENTS (CRM)
   ========================================================= */
function renderClients(root){
  root.innerHTML = `
    <div class="view-header">
      <div><h1>Müştərilər</h1><p>${DB.clients.length} müştəri profili</p></div>
      <div class="view-actions">${isAdmin()?'<button class="btn-primary" onclick="openClientForm()"><span data-icon="plus"></span>Müştəri əlavə et</button>':''}</div>
    </div>
    <div class="toolbar"><input class="input" id="client-search" placeholder="Müştəri axtar..."></div>
    <div id="client-list"></div>
  `;
  document.getElementById('client-search').addEventListener('input', e=>renderClientList(e.target.value));
  hydrateIcons(root);
  renderClientList('');
}
function renderClientList(q){
  const wrap = document.getElementById('client-list');
  const list = DB.clients.filter(c=> c.name.toLowerCase().includes((q||'').toLowerCase()) || (c.company||'').toLowerCase().includes((q||'').toLowerCase()));
  if(!list.length){ wrap.innerHTML = emptyState('users','Müştəri tapılmadı','Yeni müştəri əlavə et.','openClientForm()'); hydrateIcons(wrap); return; }
  wrap.innerHTML = list.slice().reverse().map(c=>{
    const projCount = DB.projects.filter(p=>p.clientId===c.id).length;
    return `<div class="card client-row" oncontextmenu="event.preventDefault();clientCtx(event,'${c.id}')" onclick="openClientDetail('${c.id}')" style="cursor:pointer">
      <div class="client-name-cell"><div class="avatar-md">${escapeHtml((c.name||'?').slice(0,2).toUpperCase())}</div><div><div style="font-weight:600">${escapeHtml(c.name)}</div><div style="font-size:11.5px;color:var(--text-tertiary)">${escapeHtml(c.company||'')}</div></div></div>
      <div data-label="E-poçt" style="color:var(--text-secondary);font-size:12.5px">${escapeHtml(c.email||'—')}</div>
      <div data-label="Layihələr" style="color:var(--text-secondary);font-size:12.5px">${projCount} layihə</div>
      <div data-label="Status">${statusBadge(c.status)}</div>
      <div style="text-align:right"><span class="icon-btn" style="width:30px;height:30px" onclick="event.stopPropagation();clientCtx(event,'${c.id}')"><span data-icon="more"></span></span></div>
    </div>`;
  }).join('');
  hydrateIcons(wrap);
}
function clientCtx(e,id){
  const items = [{act:'view',icon:'chevron-right',label:'Profilə bax',run:()=>openClientDetail(id)}];
  if(isAdmin()){
    items.push({act:'edit',icon:'edit',label:'Redaktə et',run:()=>openClientForm(id)});
    items.push('sep');
    items.push({act:'del',icon:'trash',label:'Sil',danger:true,run:()=>{DB.clients=DB.clients.filter(c=>c.id!==id);saveDB();renderClientList('');toast('Müştəri silindi');}});
  }
  openContextMenu(e.clientX,e.clientY, items);
}
function openClientForm(id){
  if(!id && !requireAdmin('Yalnız admin yeni müştəri əlavə edə bilər')) return;
  const c = DB.clients.find(x=>x.id===id) || {};
  const fields = [
    {key:'name', label:'Ad Soyad'}, {key:'company', label:'Şirkət'},
    {key:'email', label:'E-poçt'}, {key:'phone', label:'Telefon'},
    {key:'whatsapp', label:'WhatsApp'}, {key:'instagram', label:'Instagram'},
    {key:'website', label:'Sayt'},
    {key:'status', label:'Status', type:'select', options:[['lead','Potensial'],['active','Aktiv'],['archived','Arxiv']]},
    {key:'notes', label:'Qeydlər', type:'textarea'},
  ];
  const admin = isAdmin();
  const bodyHtml = `<div class="field-row">${renderFormFields([fields[0]],c)}${renderFormFields([fields[1]],c)}</div>
     <div class="field-row">${renderFormFields([fields[2]],c)}${renderFormFields([fields[3]],c)}</div>
     <div class="field-row">${renderFormFields([fields[4]],c)}${renderFormFields([fields[5]],c)}</div>
     ${renderFormFields([fields[6]],c)}${renderFormFields([fields[7]],c)}${renderFormFields([fields[8]],c)}`;
  openModal(id?'Müştərini redaktə et':'Yeni müştəri', admin?bodyHtml:readOnlyize(bodyHtml),
    admin ? `<button class="btn-ghost" onclick="closeModal()">Ləğv et</button><button class="btn-primary" onclick="submitClientForm('${id||''}')">Yadda saxla</button>` : `<button class="btn-ghost" onclick="closeModal()">Bağla</button>`);
  window._clientFields = fields;
}
function submitClientForm(id){
  if(!requireAdmin()) return;
  const data = collectFormFields(window._clientFields);
  if(id){ Object.assign(DB.clients.find(c=>c.id===id), data); toast('Müştəri yeniləndi'); }
  else{ DB.clients.push(Object.assign({id:uid(), createdAt:nowISO()}, data)); logActivity(`Yeni müştəri: "${data.name}"`,'users'); toast('Müştəri əlavə edildi'); }
  saveDB(); closeModal(); navigate('clients');
}
function openClientDetail(id){
  const c = DB.clients.find(x=>x.id===id);
  const projs = DB.projects.filter(p=>p.clientId===id);
  openModal(c.name, `
    <div style="display:flex;gap:14px;align-items:center;margin-bottom:6px">
      <div class="avatar-md" style="width:52px;height:52px;font-size:18px">${escapeHtml(c.name.slice(0,2).toUpperCase())}</div>
      <div><div style="font-weight:600;font-size:16px">${escapeHtml(c.name)}</div><div class="text-muted">${escapeHtml(c.company||'')}</div></div>
    </div>
    <div class="divider"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px">
      <div><span class="text-muted">E-poçt:</span> ${escapeHtml(c.email||'—')}</div>
      <div><span class="text-muted">Telefon:</span> ${escapeHtml(c.phone||'—')}</div>
      <div><span class="text-muted">WhatsApp:</span> ${escapeHtml(c.whatsapp||'—')}</div>
      <div><span class="text-muted">Instagram:</span> ${escapeHtml(c.instagram||'—')}</div>
    </div>
    <div class="divider"></div>
    <div><b>Layihələr (${projs.length})</b><div style="margin-top:8px">${projs.map(p=>`<div class="row-item" onclick="closeModal();openProject('${p.id}')">${statusBadge(p.status)}<span style="margin-left:8px">${escapeHtml(p.name)}</span></div>`).join('') || emptyRow('Layihə yoxdur')}</div></div>
    <div class="divider"></div>
    <div><b>Qeydlər</b><p class="text-muted" style="font-size:13px;margin-top:6px">${escapeHtml(c.notes||'—')}</p></div>
  `, `<button class="btn-ghost" onclick="closeModal()">Bağla</button>${isAdmin()?`<button class="btn-primary" onclick="closeModal();openClientForm('${id}')"><span data-icon="edit"></span>Redaktə et</button>`:''}`);
}

/* =========================================================
   IDEAS
   ========================================================= */
function renderIdeas(root){
  root.innerHTML = `
    <div class="view-header"><div><h1>İdeyalar</h1><p>${DB.ideas.length} ideya toplanıb</p></div>
    <div class="view-actions">${isAdmin()?'<button class="btn-primary" onclick="openIdeaForm()"><span data-icon="plus"></span>İdeya əlavə et</button>':''}</div></div>
    <div class="toolbar"><input class="input" id="idea-search" placeholder="İdeya axtar..."></div>
    <div class="grid" id="idea-grid"></div>
  `;
  document.getElementById('idea-search').addEventListener('input', e=>renderIdeaGrid(e.target.value));
  hydrateIcons(root);
  renderIdeaGrid('');
}
function renderIdeaGrid(q){
  const grid = document.getElementById('idea-grid');
  const list = DB.ideas.filter(i=>i.title.toLowerCase().includes((q||'').toLowerCase()));
  if(!list.length){ grid.innerHTML = emptyState('bulb','İdeya yoxdur','İlk ideyanı əlavə et.','openIdeaForm()'); return; }
  grid.innerHTML = list.slice().reverse().map(i=>`
    <div class="card item-card" style="padding:16px" oncontextmenu="event.preventDefault();ideaCtx(event,'${i.id}')" onclick="openIdeaForm('${i.id}')">
      <div style="display:flex;justify-content:space-between;gap:8px"><div class="item-title">${escapeHtml(i.title)}</div>${priorityDot(i.priority)}</div>
      <div class="item-desc">${escapeHtml(i.desc||'')}</div>
      <div class="tag-row"><span class="tag">${escapeHtml(i.category)}</span>${(i.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
      <div class="item-foot">${statusBadge(i.status)}<span>${fmtDate(i.createdAt.slice(0,10))}</span></div>
    </div>`).join('');
  hydrateIcons(grid);
}
function ideaCtx(e,id){
  if(!isAdmin()){ openContextMenu(e.clientX,e.clientY,[{act:'view',icon:'eye',label:'Bax',run:()=>openIdeaForm(id)}]); return; }
  openContextMenu(e.clientX,e.clientY,[
    {act:'edit',icon:'edit',label:'Redaktə et',run:()=>openIdeaForm(id)},
    {act:'del',icon:'trash',label:'Sil',danger:true,run:()=>{DB.ideas=DB.ideas.filter(i=>i.id!==id);saveDB();renderIdeaGrid('');toast('İdeya silindi');}}
  ]);
}
function openIdeaForm(id){
  if(!id && !requireAdmin('Yalnız admin yeni ideya əlavə edə bilər')) return;
  const i = DB.ideas.find(x=>x.id===id) || {};
  const fields = [
    {key:'title', label:'Başlıq'},
    {key:'desc', label:'Təsvir', type:'textarea'},
    {key:'category', label:'Kateqoriya', type:'select', options:[['Startup','Startup'],['Sayt','Sayt'],['Restoran','Restoran'],['Marketinq','Marketinq'],['AI','AI'],['Biznes','Biznes']]},
    {key:'priority', label:'Prioritet', type:'select', options:[['low','Aşağı'],['med','Orta'],['high','Yüksək']]},
    {key:'status', label:'Status', type:'select', options:[['new','Yeni'],['considering','Nəzərdən keçirilir'],['active','Aktivləşdi'],['archived','Arxiv']]},
    {key:'tags', label:'Teqlər (vergüllə)'},
  ];
  const initial = Object.assign({}, i, {tags:(i.tags||[]).join(', ')});
  const admin = isAdmin();
  const bodyHtml = renderFormFields(fields, initial);
  openModal(id?'İdeyanı redaktə et':'Yeni ideya', admin?bodyHtml:readOnlyize(bodyHtml),
    admin ? `<button class="btn-ghost" onclick="closeModal()">Ləğv et</button><button class="btn-primary" onclick="submitIdeaForm('${id||''}')">Yadda saxla</button>` : `<button class="btn-ghost" onclick="closeModal()">Bağla</button>`);
  window._ideaFields = fields;
}
function submitIdeaForm(id){
  if(!requireAdmin()) return;
  const data = collectFormFields(window._ideaFields);
  data.tags = data.tags.split(',').map(s=>s.trim()).filter(Boolean);
  if(id){ Object.assign(DB.ideas.find(i=>i.id===id), data); toast('İdeya yeniləndi'); }
  else{ DB.ideas.push(Object.assign({id:uid(), createdAt:nowISO()}, data)); toast('İdeya əlavə edildi'); }
  saveDB(); closeModal(); navigate('ideas');
}

/* =========================================================
   NOTES
   ========================================================= */
let selectedNoteId = null;
function renderNotes(root){
  if(!DB.notes.length){ selectedNoteId=null; } else if(!selectedNoteId){ selectedNoteId = DB.notes[0].id; }
  root.innerHTML = `
    <div class="view-header"><div><h1>Qeydlər</h1><p>${DB.notes.length} qeyd</p></div>
      <div class="view-actions">${isAdmin()?'<button class="btn-primary" onclick="createNote()"><span data-icon="plus"></span>Yeni qeyd</button>':''}</div></div>
    <div class="notes-layout">
      <div class="card note-list" id="note-list-wrap"></div>
      <div class="card note-editor" id="note-editor-wrap"></div>
    </div>`;
  hydrateIcons(root);
  renderNoteList(); renderNoteEditor();
}
function renderNoteList(){
  const wrap = document.getElementById('note-list-wrap');
  const sorted = DB.notes.slice().sort((a,b)=> (b.pinned-a.pinned) || b.updatedAt.localeCompare(a.updatedAt));
  wrap.innerHTML = sorted.length ? sorted.map(n=>`
    <div class="note-list-item ${n.id===selectedNoteId?'active':''}" onclick="selectNote('${n.id}')" oncontextmenu="event.preventDefault();noteCtx(event,'${n.id}')">
      <div class="nl-title">${n.pinned?icon('star',13):''} ${escapeHtml(n.title||'Adsız qeyd')}</div>
      <div class="nl-preview">${escapeHtml((n.bodyHTML||'').replace(/<[^>]+>/g,' '))}</div>
    </div>`).join('') : emptyState('file-text','Qeyd yoxdur','İlk qeydini yaz.');
  hydrateIcons(wrap);
}
function selectNote(id){ selectedNoteId=id; renderNoteList(); renderNoteEditor(); }
function noteCtx(e,id){
  if(!isAdmin()){ lockedCtxToast(); return; }
  const n = DB.notes.find(x=>x.id===id);
  openContextMenu(e.clientX,e.clientY,[
    {act:'pin',icon:'star',label:n.pinned?'Sancaqdan çıxar':'Sancaqla',run:()=>{n.pinned=!n.pinned;saveDB();renderNoteList();}},
    {act:'del',icon:'trash',label:'Sil',danger:true,run:()=>{DB.notes=DB.notes.filter(x=>x.id!==id);saveDB();if(selectedNoteId===id)selectedNoteId=null;renderNotes(document.getElementById('view-root'));toast('Qeyd silindi');}}
  ]);
}
function createNote(projectId){
  if(!requireAdmin()) return;
  const n = {id:uid(), title:'Adsız qeyd', bodyHTML:'', pinned:false, folder:'Ümumi', projectId:projectId||null, createdAt:nowISO(), updatedAt:nowISO()};
  DB.notes.push(n); saveDB(); selectedNoteId=n.id;
  if(currentView==='notes') renderNotes(document.getElementById('view-root'));
}
function renderNoteEditor(){
  const wrap = document.getElementById('note-editor-wrap');
  const n = DB.notes.find(x=>x.id===selectedNoteId);
  if(!n){ wrap.innerHTML = `<div class="flex-center" style="height:100%">${emptyState('file-text','Qeyd seçilməyib','Soldan qeyd seç.')}</div>`; return; }
  const admin = isAdmin();
  if(!admin){
    // Pure read-only viewer — deliberately NOT styled like an editable input/box.
    wrap.innerHTML = `
      <div class="note-view">
        <div class="note-view-head">
          <span data-icon="eye" data-size="14"></span> Yalnız baxış
          ${n.pinned?`<span style="margin-left:auto" data-icon="star" data-size="13"></span>`:''}
        </div>
        <h2 class="note-view-title">${escapeHtml(n.title||'Adsız qeyd')}</h2>
        <div class="note-view-body">${n.bodyHTML || '<p style="color:var(--text-tertiary)">Bu qeydin məzmunu yoxdur.</p>'}</div>
      </div>`;
    hydrateIcons(wrap);
    return;
  }
  wrap.innerHTML = `
    <div class="note-editor-head">
      <input class="note-editor-title" id="note-title-input" value="${escapeHtml(n.title)}">
      <span class="icon-btn" onclick="toggleNotePin('${n.id}')" title="Sancaqla">${icon('star',16)}</span>
    </div>
    <div class="note-editor-toolbar">
      <button onclick="fmt('bold')" title="Qalın"><b>B</b></button>
      <button onclick="fmt('italic')" title="Əyik"><i>I</i></button>
      <button onclick="fmt('insertUnorderedList')" title="Siyahı">${icon('menu',15)}</button>
      <button onclick="fmt('formatBlock','<pre>')" title="Kod bloku">${icon('code',15)}</button>
      <button onclick="insertNoteLink()" title="Link">${icon('link',15)}</button>
    </div>
    <div class="note-editor-body" id="note-body" contenteditable="true" data-placeholder="Yazmağa başla...">${n.bodyHTML}</div>
  `;
  hydrateIcons(wrap);
  if(admin){
    document.getElementById('note-title-input').addEventListener('input', e=>{ n.title=e.target.value; n.updatedAt=nowISO(); saveDB(); renderNoteList(); });
    const body = document.getElementById('note-body');
    body.addEventListener('input', ()=>{ n.bodyHTML = body.innerHTML; n.updatedAt=nowISO(); saveDB(); });
  }
}
function fmt(cmd, val){ document.execCommand(cmd, false, val||null); document.getElementById('note-body').focus(); }
function insertNoteLink(){ const url = prompt('Link URL:'); if(url) document.execCommand('createLink', false, url); }
function toggleNotePin(id){ const n = DB.notes.find(x=>x.id===id); n.pinned=!n.pinned; saveDB(); renderNoteList(); renderNoteEditor(); }

/* =========================================================
   CODE LIBRARY
   ========================================================= */
let codeFilter = { folder:'all', search:'' };
const CODE_FOLDERS = ['HTML','CSS','JavaScript','PHP','React','Node','Python','SQL','JSON'];
function renderCode(root){
  root.innerHTML = `
    <div class="view-header"><div><h1>Kod Kitabxanası</h1><p>${DB.codeSnippets.length} snippet</p></div>
      <div class="view-actions">${isAdmin()?'<button class="btn-primary" onclick="openSnippetForm()"><span data-icon="plus"></span>Snippet əlavə et</button>':''}</div></div>
    <div class="toolbar"><input class="input" id="code-search" placeholder="Kod axtar..."></div>
    <div class="code-layout">
      <div class="card folder-tree" id="code-folders"></div>
      <div id="code-list"></div>
    </div>`;
  document.getElementById('code-search').addEventListener('input', e=>{ codeFilter.search=e.target.value; renderCodeList(); });
  const foldersEl = document.getElementById('code-folders');
  foldersEl.innerHTML = `
    <div class="folder-item ${codeFilter.folder==='all'?'active':''}" onclick="setCodeFolder('all')"><span data-icon="code"></span>Hamısı<span class="count">${DB.codeSnippets.length}</span></div>
    <div class="folder-item ${codeFilter.folder==='fav'?'active':''}" onclick="setCodeFolder('fav')"><span data-icon="star"></span>Sevimlilər<span class="count">${DB.codeSnippets.filter(s=>s.favorite).length}</span></div>
    <div class="divider" style="margin:8px 0"></div>
    ${CODE_FOLDERS.map(f=>`<div class="folder-item ${codeFilter.folder===f?'active':''}" onclick="setCodeFolder('${f}')"><span data-icon="folder"></span>${f}<span class="count">${DB.codeSnippets.filter(s=>s.folder===f).length}</span></div>`).join('')}
  `;
  hydrateIcons(root);
  renderCodeList();
}
function setCodeFolder(f){ codeFilter.folder=f; renderCode(document.getElementById('view-root')); }
function renderCodeList(){
  const wrap = document.getElementById('code-list');
  let list = DB.codeSnippets.filter(s=>
    (codeFilter.folder==='all' || (codeFilter.folder==='fav'?s.favorite:s.folder===codeFilter.folder)) &&
    s.title.toLowerCase().includes((codeFilter.search||'').toLowerCase())
  );
  wrap.innerHTML = list.length ? list.slice().reverse().map(snippetCard).join('') : emptyState('code','Snippet tapılmadı','Yeni kod snippet əlavə et.','openSnippetForm()');
  hydrateIcons(wrap);
  if(window.hljs) hljs.highlightAll();
}
function snippetCard(s){
  return `<div class="card snippet-card" oncontextmenu="event.preventDefault();snippetCtx(event,'${s.id}')">
    <div class="snippet-head">
      <span class="lang-pill">${escapeHtml(s.lang)}</span>
      <span class="snippet-title">${escapeHtml(s.title)}</span>
      <div class="snippet-actions">
        ${isAdmin()?`<span class="icon-btn" onclick="toggleSnippetFav('${s.id}')" title="Sevimli">${icon('star',15)}</span>`:''}
        <span class="icon-btn" onclick="copySnippet('${s.id}')" title="Kopyala">${icon('copy',15)}</span>
        ${isAdmin()?`<span class="icon-btn" onclick="openSnippetForm('${s.id}')" title="Redaktə">${icon('edit',15)}</span>`:''}
      </div>
    </div>
    <pre class="code-block"><code class="language-${s.lang}">${escapeHtml(s.code)}</code></pre>
  </div>`;
}
function snippetCtx(e,id){
  if(!isAdmin()){ openContextMenu(e.clientX,e.clientY,[{act:'copy',icon:'copy',label:'Kopyala',run:()=>copySnippet(id)}]); return; }
  openContextMenu(e.clientX,e.clientY,[
    {act:'copy',icon:'copy',label:'Kopyala',run:()=>copySnippet(id)},
    {act:'edit',icon:'edit',label:'Redaktə et',run:()=>openSnippetForm(id)},
    'sep',
    {act:'del',icon:'trash',label:'Sil',danger:true,run:()=>{DB.codeSnippets=DB.codeSnippets.filter(s=>s.id!==id);saveDB();renderCodeList();toast('Snippet silindi');}}
  ]);
}
function copySnippet(id){
  const s = DB.codeSnippets.find(x=>x.id===id);
  navigator.clipboard.writeText(s.code).then(()=>toast('Kod kopyalandı')).catch(()=>toast('Kopyalama uğursuz oldu','error'));
}
function toggleSnippetFav(id){ if(!requireAdmin()) return; const s=DB.codeSnippets.find(x=>x.id===id); s.favorite=!s.favorite; saveDB(); renderCodeList(); }
function openSnippetForm(id, projectId){
  if(!requireAdmin()) return;
  const s = DB.codeSnippets.find(x=>x.id===id) || {};
  const fields = [
    {key:'title', label:'Ad'},
    {key:'folder', label:'Qovluq', type:'select', options: CODE_FOLDERS.map(f=>[f,f])},
    {key:'lang', label:'Sintaksis', type:'select', options:[['html','HTML'],['css','CSS'],['javascript','JavaScript'],['php','PHP'],['jsx','React'],['javascript','Node'],['python','Python'],['sql','SQL'],['json','JSON']]},
    {key:'code', label:'Kod', type:'textarea'},
  ];
  openModal(id?'Snippet redaktə et':'Yeni snippet', renderFormFields(fields, s).replace('rows="4"','rows="10" style="font-family:\'JetBrains Mono\',monospace;font-size:12.5px"'),
    `<button class="btn-ghost" onclick="closeModal()">Ləğv et</button><button class="btn-primary" onclick="submitSnippetForm('${id||''}','${projectId||''}')">Yadda saxla</button>`);
  window._snipFields = fields;
}
function submitSnippetForm(id, projectId){
  const data = collectFormFields(window._snipFields);
  if(id){ Object.assign(DB.codeSnippets.find(s=>s.id===id), data); toast('Snippet yeniləndi'); }
  else{ DB.codeSnippets.push(Object.assign({id:uid(), favorite:false, projectId:projectId||null, createdAt:nowISO()}, data)); toast('Snippet əlavə edildi'); }
  saveDB(); closeModal();
  if(currentView==='project-workspace') renderProjectWorkspace(document.getElementById('view-root')); else navigate('code');
}

/* =========================================================
   IMAGES
   ========================================================= */
function renderImages(root){
  const admin = isAdmin();
  root.innerHTML = `
    <div class="view-header"><div><h1>Şəkillər</h1><p>${DB.images.length} şəkil</p></div>
      <div class="view-actions">${admin?'<button class="btn-primary" onclick="document.getElementById(\'img-input\').click()"><span data-icon="upload"></span>Yüklə</button>':''}</div></div>
    ${admin?`<div class="dropzone" id="img-dropzone"><span data-icon="image" data-size="30"></span><div>Şəkilləri buraya at və ya klikləyib seç</div><input type="file" id="img-input" accept="image/*" multiple style="display:none"></div>`:`<div class="locked-note"><span data-icon="lock"></span>Şəkil yükləmək yalnız admin üçündür</div>`}
    <div class="gallery" id="img-gallery"></div>`;
  hydrateIcons(root);
  if(admin){
    const dz = document.getElementById('img-dropzone'), input=document.getElementById('img-input');
    dz.addEventListener('click', ()=>input.click());
    ['dragover','dragleave','drop'].forEach(evt=>dz.addEventListener(evt,e=>{e.preventDefault();dz.classList.toggle('drag',evt==='dragover');}));
    dz.addEventListener('drop', e=>ingestImages(e.dataTransfer.files));
    input.addEventListener('change', e=>ingestImages(e.target.files));
  }
  renderImageGallery();
}
function ingestImages(files){
  if(!requireAdmin()) return;
  let count=0;
  Array.from(files).forEach(f=>{
    if(!f.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = ev=>{ DB.images.push({id:uid(),name:f.name,dataUrl:ev.target.result,tags:[],folder:'Ümumi',createdAt:nowISO()}); saveDB(); renderImageGallery(); };
    reader.readAsDataURL(f); count++;
  });
  if(count) toast(count+' şəkil yükləndi');
}
function renderImageGallery(){
  const gal = document.getElementById('img-gallery');
  if(!gal) return;
  gal.innerHTML = DB.images.length ? DB.images.slice().reverse().map(i=>`
    <div class="gallery-item" onclick="openImagePreview('${i.id}')" oncontextmenu="event.preventDefault();imageCtx(event,'${i.id}')">
      <img src="${i.dataUrl}" loading="lazy"><span class="gi-tag">${escapeHtml(i.name.slice(0,16))}</span>
    </div>`).join('') : emptyState('image','Şəkil yoxdur','Şəkil yükləyərək başla.');
  hydrateIcons(gal);
}
function imageCtx(e,id){
  const items = [{act:'view',icon:'image',label:'Tam ekran',run:()=>openImagePreview(id)}];
  if(isAdmin()) items.push({act:'del',icon:'trash',label:'Sil',danger:true,run:()=>{DB.images=DB.images.filter(i=>i.id!==id);saveDB();renderImageGallery();toast('Şəkil silindi');}});
  openContextMenu(e.clientX,e.clientY,items);
}
function openImagePreview(id){
  const i = DB.images.find(x=>x.id===id);
  openModal(i.name, `<img src="${i.dataUrl}" style="width:100%;border-radius:12px">`, `<button class="btn-ghost" onclick="closeModal()">Bağla</button>`);
}

/* =========================================================
   VIDEOS (session-only preview — large files aren't persisted)
   ========================================================= */
let sessionVideos = [];
function renderVideos(root){
  const admin = isAdmin();
  root.innerHTML = `
    <div class="view-header"><div><h1>Videolar</h1><p>${DB.videos.length} qeyd olunmuş video · yüklənən videolar bu sessiyada canlıdır</p></div>
      <div class="view-actions">${admin?'<button class="btn-primary" onclick="document.getElementById(\'vid-input\').click()"><span data-icon="upload"></span>Yüklə</button>':''}</div></div>
    ${admin?`<div class="dropzone" id="vid-dropzone"><span data-icon="video" data-size="30"></span><div>Video əlavə et</div><input type="file" id="vid-input" accept="video/*" multiple style="display:none"></div>`:`<div class="locked-note"><span data-icon="lock"></span>Video yükləmək yalnız admin üçündür</div>`}
    <div class="grid" id="vid-grid"></div>`;
  hydrateIcons(root);
  if(admin){
    const dz=document.getElementById('vid-dropzone'), input=document.getElementById('vid-input');
    dz.addEventListener('click', ()=>input.click());
    ['dragover','dragleave','drop'].forEach(evt=>dz.addEventListener(evt,e=>{e.preventDefault();dz.classList.toggle('drag',evt==='dragover');}));
    function ingest(files){
      Array.from(files).forEach(f=>{
        if(!f.type.startsWith('video/')) return;
        const url = URL.createObjectURL(f);
        const v = {id:uid(), name:f.name, note:'', tags:[], url, createdAt:nowISO()};
        sessionVideos.push(v);
        DB.videos.push({id:v.id, name:f.name, note:'', tags:[], createdAt:nowISO()});
      });
      saveDB(); renderVideoGrid();
    }
    dz.addEventListener('drop', e=>ingest(e.dataTransfer.files));
    input.addEventListener('change', e=>ingest(e.target.files));
  }
  renderVideoGrid();
}
function renderVideoGrid(){
  const grid = document.getElementById('vid-grid');
  if(!grid) return;
  if(!DB.videos.length){ grid.innerHTML = emptyState('video','Video yoxdur','Video yükləyərək başla.'); hydrateIcons(grid); return; }
  grid.innerHTML = DB.videos.slice().reverse().map(v=>{
    const live = sessionVideos.find(sv=>sv.id===v.id);
    return `<div class="card item-card" style="cursor:default">
      ${live ? `<video src="${live.url}" controls style="width:100%;height:140px;object-fit:cover;background:#000"></video>` : `<div class="item-thumb" style="background:var(--glass-strong);color:var(--text-tertiary);height:140px">${icon('video',28)}</div>`}
      <div class="item-body">
        <div class="item-title">${escapeHtml(v.name)}</div>
        ${!live?'<div class="item-desc" style="color:var(--amber)">Önizləmə üçün yenidən yüklə (böyük fayllar saxlanmır)</div>':''}
        <div class="item-foot"><span>${fmtDate(v.createdAt.slice(0,10))}</span></div>
      </div>
    </div>`;
  }).join('');
  hydrateIcons(grid);
}

/* =========================================================
   DOCUMENTS
   ========================================================= */
function renderDocuments(root){
  const admin = isAdmin();
  root.innerHTML = `
    <div class="view-header"><div><h1>Sənədlər</h1><p>${DB.documents.length} sənəd — PDF, DOCX, Excel, müqavilə, faktura</p></div>
      <div class="view-actions">${admin?'<button class="btn-primary" onclick="document.getElementById(\'doc-input\').click()"><span data-icon="upload"></span>Yüklə</button>':''}</div></div>
    ${admin?`<div class="dropzone" id="doc-dropzone"><span data-icon="file" data-size="30"></span><div>Sənəd əlavə et</div><input type="file" id="doc-input" multiple style="display:none"></div>`:`<div class="locked-note"><span data-icon="lock"></span>Sənəd yükləmək yalnız admin üçündür</div>`}
    <div class="grid" id="doc-grid"></div>`;
  hydrateIcons(root);
  if(admin){
    const dz=document.getElementById('doc-dropzone'), input=document.getElementById('doc-input');
    dz.addEventListener('click', ()=>input.click());
    ['dragover','dragleave','drop'].forEach(evt=>dz.addEventListener(evt,e=>{e.preventDefault();dz.classList.toggle('drag',evt==='dragover');}));
    dz.addEventListener('drop', e=>{ handleFiles(e.dataTransfer.files,null,[],renderDocGrid); });
    input.addEventListener('change', e=>{ handleFiles(e.target.files,null,[],renderDocGrid); });
  }
  renderDocGrid();
}
function renderDocGrid(){
  const grid = document.getElementById('doc-grid');
  if(!grid) return;
  grid.innerHTML = DB.documents.length ? DB.documents.slice().reverse().map(d=>`
    <div class="card item-card" style="cursor:default" oncontextmenu="event.preventDefault();docCtx(event,'${d.id}')">
      <div class="item-thumb" style="background:var(--glass-strong);color:var(--text-tertiary);height:80px">${docIcon(d.type)}</div>
      <div class="item-body">
        <div class="item-title" style="font-size:13px">${escapeHtml(d.name)}</div>
        <div class="tag-row"><span class="tag">${escapeHtml(d.category||'Fayl')}</span></div>
        <div class="item-foot"><span>${fmtBytes(d.size||0)}</span><span>${fmtDate((d.createdAt||nowISO()).slice(0,10))}</span></div>
      </div>
    </div>`).join('') : emptyState('file','Sənəd yoxdur','Sənəd yükləyərək başla.');
  hydrateIcons(grid);
}
function docCtx(e,id){
  if(!isAdmin()){ lockedCtxToast(); return; }
  openContextMenu(e.clientX,e.clientY,[
    {act:'del',icon:'trash',label:'Sil',danger:true,run:()=>{DB.documents=DB.documents.filter(d=>d.id!==id);saveDB();renderDocGrid();toast('Sənəd silindi');}}
  ]);
}

/* =========================================================
   ASSETS & PROMPTS
   ========================================================= */
let assetsTab = 'assets';
function renderAssets(root){
  root.innerHTML = `
    <div class="view-header"><div><h1>Aktivlər &amp; Promptlar</h1><p>Loqolar, ikonlar, fontlar və AI prompt kitabxanası</p></div>
      <div class="view-actions">${isAdmin()?`<button class="btn-primary" onclick="assetsTab==='assets'?openAssetForm():openPromptForm()"><span data-icon="plus"></span>Əlavə et</button>`:''}</div></div>
    <div class="tabbar"><button data-t="assets" class="${assetsTab==='assets'?'active':''}">Aktivlər</button><button data-t="prompts" class="${assetsTab==='prompts'?'active':''}">Prompt kitabxanası</button></div>
    <div id="assets-content"></div>`;
  root.querySelectorAll('.tabbar button').forEach(b=>b.addEventListener('click', ()=>{ assetsTab=b.getAttribute('data-t'); renderAssets(root); }));
  hydrateIcons(root);
  const c = document.getElementById('assets-content');
  if(assetsTab==='assets'){
    c.innerHTML = DB.assets.length ? `<div class="grid">${DB.assets.map(a=>`
      <div class="card item-card" style="padding:16px" oncontextmenu="event.preventDefault();assetCtx(event,'${a.id}')">
        <div style="display:flex;align-items:center;gap:10px"><span class="icon-btn" style="pointer-events:none">${icon(assetIcon(a.type),16)}</span><div class="item-title">${escapeHtml(a.name)}</div></div>
        <div class="tag-row" style="margin-top:8px"><span class="tag">${escapeHtml(a.type)}</span></div>
        ${a.url?`<a href="${a.url}" target="_blank" style="color:var(--blue);font-size:12px">${a.url}</a>`:''}
      </div>`).join('')}</div>` : emptyState('package','Aktiv yoxdur','Loqo, font və ya ikon əlavə et.');
  } else {
    c.innerHTML = DB.prompts.length ? DB.prompts.map(p=>`
      <div class="card snippet-card" oncontextmenu="event.preventDefault();promptCtx(event,'${p.id}')">
        <div class="snippet-head"><span class="lang-pill">${escapeHtml(p.category)}</span><span class="snippet-title">${escapeHtml(p.title)}</span>
          <div class="snippet-actions">
            ${isAdmin()?`<span class="icon-btn" onclick="togglePromptFav('${p.id}')">${icon('star',15)}</span>`:''}
            <span class="icon-btn" onclick="copyPrompt('${p.id}')">${icon('copy',15)}</span>
          </div>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);line-height:1.6">${escapeHtml(p.text)}</div>
      </div>`).join('') : emptyState('sparkles','Prompt yoxdur','İlk promptunu əlavə et.');
  }
  hydrateIcons(c);
}
function assetIcon(t){ return {logo:'sparkles',icon:'package',font:'file-text',video:'video',image:'image',animation:'sparkles'}[t]||'package'; }
function openAssetForm(){
  if(!requireAdmin()) return;
  const fields=[{key:'name',label:'Ad'},{key:'type',label:'Növ',type:'select',options:[['logo','Loqo'],['icon','İkon'],['font','Font'],['video','Video'],['image','Şəkil'],['animation','Animasiya']]},{key:'url',label:'Link (ixtiyari)'}];
  openModal('Yeni aktiv', renderFormFields(fields,{}), `<button class="btn-ghost" onclick="closeModal()">Ləğv et</button><button class="btn-primary" onclick="submitAssetForm()">Yadda saxla</button>`);
  window._assetFields = fields;
}
function submitAssetForm(){ if(!requireAdmin())return; const data=collectFormFields(window._assetFields); DB.assets.push(Object.assign({id:uid(),createdAt:nowISO()},data)); saveDB(); closeModal(); toast('Aktiv əlavə edildi'); navigate('assets'); }
function assetCtx(e,id){ if(!isAdmin()){lockedCtxToast();return;} openContextMenu(e.clientX,e.clientY,[{act:'del',icon:'trash',label:'Sil',danger:true,run:()=>{DB.assets=DB.assets.filter(a=>a.id!==id);saveDB();navigate('assets');toast('Aktiv silindi');}}]); }
function openPromptForm(){
  if(!requireAdmin()) return;
  const fields=[{key:'title',label:'Başlıq'},{key:'category',label:'Kateqoriya',type:'select',options:[['Şəkil','Şəkil'],['Video','Video'],['Kodlaşdırma','Kodlaşdırma'],['Marketinq','Marketinq']]},{key:'text',label:'Prompt mətni',type:'textarea'}];
  openModal('Yeni prompt', renderFormFields(fields,{}), `<button class="btn-ghost" onclick="closeModal()">Ləğv et</button><button class="btn-primary" onclick="submitPromptForm()">Yadda saxla</button>`);
  window._promptFields = fields;
}
function submitPromptForm(){ if(!requireAdmin())return; const data=collectFormFields(window._promptFields); DB.prompts.push(Object.assign({id:uid(),favorite:false,createdAt:nowISO()},data)); saveDB(); closeModal(); toast('Prompt əlavə edildi'); navigate('assets'); }
function togglePromptFav(id){ if(!requireAdmin())return; const p=DB.prompts.find(x=>x.id===id); p.favorite=!p.favorite; saveDB(); navigate('assets'); }
function copyPrompt(id){ const p=DB.prompts.find(x=>x.id===id); navigator.clipboard.writeText(p.text).then(()=>toast('Prompt kopyalandı')); }
function promptCtx(e,id){ if(!isAdmin()){lockedCtxToast();return;} openContextMenu(e.clientX,e.clientY,[{act:'del',icon:'trash',label:'Sil',danger:true,run:()=>{DB.prompts=DB.prompts.filter(p=>p.id!==id);saveDB();navigate('assets');toast('Prompt silindi');}}]); }

/* =========================================================
   TEMPLATES
   ========================================================= */
const TEMPLATE_CATALOG = [
  {name:'Restoran saytı', cat:'Restoran', color:'a', desc:'Menyu, sifariş və rezervasiya bölmələri ilə tam restoran saytı.'},
  {name:'Landing Page — SaaS', cat:'Landing', color:'v', desc:'Konversiyaya yönəlmiş məhsul təqdimat səhifəsi.'},
  {name:'Kreativ Portfolio', cat:'Portfolio', color:'t', desc:'Dizaynerlər və fotoqraflar üçün minimal portfolio.'},
  {name:'Agentlik saytı', cat:'Agentlik', color:'b', desc:'Xidmətlər, komanda və iş nümunələri ilə agentlik saytı.'},
  {name:'E-ticarət mağazası', cat:'E-commerce', color:'r', desc:'Məhsul kataloqu, səbət və ödəniş axını.'},
  {name:'Bloq platforması', cat:'Bloq', color:'v', desc:'Təmiz oxunuş təcrübəsi ilə məzmun-mərkəzli bloq.'},
  {name:'Admin Dashboard', cat:'Dashboard', color:'b', desc:'Cədvəl, qrafik və istifadəçi idarəetməsi olan admin panel.'},
];
function renderTemplates(root){
  const grads = {v:'var(--gradient-primary)', b:'linear-gradient(135deg,#4F8CFF,#33E0C2)', t:'var(--gradient-teal)', a:'var(--gradient-rose)', r:'var(--gradient-rose)'};
  root.innerHTML = `
    <div class="view-header"><div><h1>Şablonlar</h1><p>Yeni layihəyə başlamaq üçün hazır şablonlar</p></div></div>
    <div class="grid">${TEMPLATE_CATALOG.map(t=>`
      <div class="card item-card">
        <div class="item-thumb" style="background:${grads[t.color]}">${escapeHtml(t.name.slice(0,2).toUpperCase())}</div>
        <div class="item-body">
          <div class="item-title">${escapeHtml(t.name)}</div>
          <div class="item-desc">${escapeHtml(t.desc)}</div>
          <div class="tag-row"><span class="tag">${escapeHtml(t.cat)}</span></div>
          ${isAdmin()?`<button class="btn-primary" style="margin-top:10px;width:100%;justify-content:center" onclick="useTemplate('${t.name.replace(/'/g,"")}','${t.cat}','${t.color}')"><span data-icon="plus"></span>Layihə yarat</button>`:''}
        </div>
      </div>`).join('')}</div>
  `;
  hydrateIcons(root);
}
function useTemplate(name, cat, color){
  if(!requireAdmin()) return;
  const p = {id:uid(), name:name+' — Yeni', desc:'Şablondan yaradılıb: '+name, status:'active', progress:0, category:cat, deadline:addDays(14), clientId:'', tags:[cat.toLowerCase()], websiteUrl:'', githubUrl:'', previewUrl:'', color, createdAt:nowISO()};
  DB.projects.push(p); logActivity(`"${name}" şablonundan layihə yaradıldı`,'template'); saveDB(); toast('Layihə şablondan yaradıldı');
  openProject(p.id);
}

/* =========================================================
   ANALYTICS
   ========================================================= */
function renderAnalytics(root){
  const statusCounts = {active:0, progress:0, hold:0, done:0};
  DB.projects.forEach(p=>{ statusCounts[p.status] = (statusCounts[p.status]||0)+1; });
  const maxStatus = Math.max(1,...Object.values(statusCounts));
  const last6 = [...Array(6)].map((_,i)=>{
    const d = new Date(); d.setMonth(d.getMonth()-(5-i));
    return {label:['Yan','Fev','Mar','Apr','May','İyn','İyl','Avq','Sen','Okt','Noy','Dek'][d.getMonth()], month:d.getMonth(), year:d.getFullYear()};
  });
  const revByMonth = last6.map(m=> DB.revenue.filter(r=>{ const rd=new Date(r.date); return rd.getMonth()===m.month && rd.getFullYear()===m.year; }).reduce((s,r)=>s+Number(r.amount),0));
  const maxRev = Math.max(1,...revByMonth, 500);
  const taskDone = DB.tasks.filter(t=>t.status==='done').length;
  const taskTotal = DB.tasks.length||1;

  root.innerHTML = `
    <div class="view-header"><div><h1>Analitika</h1><p>Biznesin performansına ümumi baxış</p></div></div>
    <div class="stat-grid">
      ${statCard('layers','Toplam layihə', DB.projects.length, 'v','')}
      ${statCard('check','Tamamlanan tapşırıq', Math.round(taskDone/taskTotal*100)+'%', 't', taskDone+'/'+taskTotal)}
      ${statCard('bar-chart','Toplam gəlir', money(DB.revenue.reduce((s,r)=>s+Number(r.amount),0)), 'b','')}
      ${statCard('users','Toplam müştəri', DB.clients.length, 'a','')}
    </div>
    <div class="dash-grid">
      <div class="card chart-card">
        <div class="panel-head"><h3>Aylıq gəlir</h3></div>
        <div class="bar-chart">${revByMonth.map(v=>`<div class="bar" style="height:${Math.max(4,v/maxRev*160)}px"><span>${v?money(v):''}</span></div>`).join('')}</div>
        <div class="bar-labels">${last6.map(m=>`<div>${m.label}</div>`).join('')}</div>
      </div>
      <div class="card chart-card">
        <div class="panel-head"><h3>Layihə statusları</h3></div>
        ${Object.entries({active:'Aktiv',progress:'İcrada',hold:'Dayandırılıb',done:'Bitib'}).map(([k,label])=>`
          <div style="margin-bottom:14px">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:5px"><span>${label}</span><span class="text-muted">${statusCounts[k]||0}</span></div>
            <div class="progress-track"><div class="progress-fill" style="width:${(statusCounts[k]||0)/maxStatus*100}%"></div></div>
          </div>`).join('')}
      </div>
    </div>
  `;
  hydrateIcons(root);
}

/* =========================================================
   CALENDAR
   ========================================================= */
let calCursor = new Date();
function renderCalendar(root){
  root.innerHTML = `
    <div class="view-header"><div><h1>Təqvim</h1><p>Son tarixlər, görüşlər və layihə cədvəli</p></div>
      <div class="view-actions">
        <button class="icon-btn" onclick="calShift(-1)">${icon('chevron-right').replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" style="transform:rotate(180deg)"')}</button>
        <button class="btn-ghost" onclick="calCursor=new Date();renderCalendar(document.getElementById('view-root'))">Bu ay</button>
        <button class="icon-btn" onclick="calShift(1)">${icon('chevron-right')}</button>
        ${isAdmin()?`<button class="btn-primary" onclick="openEventForm()"><span data-icon="plus"></span>Hadisə əlavə et</button>`:''}
      </div></div>
    <div class="card panel" style="padding:20px">
      <div style="font-family:'Space Grotesk';font-weight:600;font-size:16px;margin-bottom:14px">${calCursor.toLocaleDateString('az-AZ',{month:'long',year:'numeric'})}</div>
      <div class="cal-grid" id="cal-grid"></div>
    </div>`;
  hydrateIcons(root);
  buildCalGrid();
}
function calShift(n){ calCursor.setMonth(calCursor.getMonth()+n); renderCalendar(document.getElementById('view-root')); }
function buildCalGrid(){
  const grid = document.getElementById('cal-grid');
  const dows = ['B.e','Ç.a','Ç','C.a','C','Ş','B'];
  const y = calCursor.getFullYear(), m = calCursor.getMonth();
  const first = new Date(y,m,1);
  let startOffset = (first.getDay()+6)%7;
  const daysInMonth = new Date(y,m+1,0).getDate();
  const todayStr = new Date().toISOString().slice(0,10);
  let html = dows.map(d=>`<div class="cal-dow">${d}</div>`).join('');
  for(let i=0;i<startOffset;i++) html += `<div></div>`;
  for(let d=1; d<=daysInMonth; d++){
    const dateStr = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const events = DB.calendarEvents.filter(e=>e.date===dateStr);
    html += `<div class="cal-cell ${dateStr===todayStr?'today':''}" oncontextmenu="event.preventDefault();dayCtx(event,'${dateStr}')">
      <div class="cal-daynum">${d}</div>
      ${events.map(e=>`<div class="cal-event" title="${escapeHtml(e.title)}" onclick="openEventForm('${e.id}')">${escapeHtml(e.title)}</div>`).join('')}
    </div>`;
  }
  grid.innerHTML = html;
}
function dayCtx(e,dateStr){ if(!isAdmin()){lockedCtxToast();return;} openContextMenu(e.clientX,e.clientY,[{act:'add',icon:'plus',label:'Hadisə əlavə et',run:()=>openEventForm(null,dateStr)}]); }
function openEventForm(id, dateStr){
  if(!id && !requireAdmin('Yalnız admin yeni hadisə əlavə edə bilər')) return;
  const ev = DB.calendarEvents.find(x=>x.id===id) || {date:dateStr||addDays(0)};
  const fields = [
    {key:'title', label:'Başlıq'},
    {key:'type', label:'Növ', type:'select', options:[['deadline','Son tarix'],['meeting','Görüş'],['reminder','Xatırlatma']]},
    {key:'date', label:'Tarix', type:'date'},
    {key:'relatedProjectId', label:'Əlaqəli layihə', type:'select', options:[['','Yoxdur'], ...DB.projects.map(p=>[p.id,p.name])]},
  ];
  const admin = isAdmin();
  const bodyHtml = renderFormFields(fields, ev);
  const foot = admin
    ? `<button class="btn-ghost" onclick="closeModal()">Ləğv et</button>${id?`<button class="btn-ghost" onclick="DB.calendarEvents=DB.calendarEvents.filter(e=>e.id!=='${id}');saveDB();closeModal();buildCalGrid();toast('Hadisə silindi')"><span data-icon="trash"></span>Sil</button>`:''}<button class="btn-primary" onclick="submitEventForm('${id||''}')">Yadda saxla</button>`
    : `<button class="btn-ghost" onclick="closeModal()">Bağla</button>`;
  openModal(id?'Hadisəni redaktə et':'Yeni hadisə', admin?bodyHtml:readOnlyize(bodyHtml), foot);
  window._evFields = fields;
}
function submitEventForm(id){
  if(!requireAdmin()) return;
  const data = collectFormFields(window._evFields);
  if(id){ Object.assign(DB.calendarEvents.find(e=>e.id===id), data); toast('Hadisə yeniləndi'); }
  else{ DB.calendarEvents.push(Object.assign({id:uid(), createdAt:nowISO()}, data)); toast('Hadisə əlavə edildi'); }
  saveDB(); closeModal(); buildCalGrid();
}

/* =========================================================
   AI TOOLS
   ========================================================= */
let aiHistory = [];
function renderAI(root){
  root.innerHTML = `
    <div class="view-header"><div><h1>AI Alətləri</h1><p>Öz Anthropic API açarınla birbaşa AI iş sahəsi</p></div></div>
    <div class="ai-layout">
      <div class="card" style="padding:16px;overflow-y:auto">
        <div class="panel-head"><h3>Sürətli promptlar</h3></div>
        ${DB.prompts.map(p=>`<div class="prompt-chip" onclick="useAIPrompt('${p.id}')">${escapeHtml(p.title)}</div>`).join('') || '<div class="text-muted" style="font-size:12px">Prompt kitabxanası boşdur.</div>'}
        <div class="divider"></div>
        <div class="text-muted" style="font-size:11.5px;line-height:1.6">API açarını Ayarlar → AI bölməsindən əlavə et. Açar yalnız bu brauzerdə (localStorage) saxlanılır.</div>
      </div>
      <div class="card ai-chat">
        <div class="ai-messages" id="ai-messages"></div>
        <div class="ai-input-row">
          <textarea id="ai-input" rows="1" placeholder="AI-ya sual yaz..."></textarea>
          <button class="btn-primary" onclick="sendAIMessage()"><span data-icon="send"></span></button>
        </div>
      </div>
    </div>`;
  hydrateIcons(root);
  renderAIMessages();
  document.getElementById('ai-input').addEventListener('keydown', e=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); sendAIMessage(); } });
}
function useAIPrompt(id){ const p = DB.prompts.find(x=>x.id===id); document.getElementById('ai-input').value = p.text; document.getElementById('ai-input').focus(); }
function renderAIMessages(){
  const wrap = document.getElementById('ai-messages');
  if(!wrap) return;
  wrap.innerHTML = aiHistory.length ? aiHistory.map(m=>`<div class="ai-msg ${m.role}">${escapeHtml(m.text)}</div>`).join('') : `<div class="text-muted" style="text-align:center;margin-top:40px;font-size:12.5px">AI ilə söhbətə başla — layihə ideyaları, kod izahı, kopirayt və s. üçün soruş.</div>`;
  wrap.scrollTop = wrap.scrollHeight;
}
async function sendAIMessage(){
  const input = document.getElementById('ai-input');
  const text = input.value.trim();
  if(!text) return;
  if(!DB.settings.aiApiKey){ toast('Əvvəlcə Ayarlar bölməsində API açarını əlavə et', 'warn'); navigate('settings'); return; }
  aiHistory.push({role:'user', text});
  input.value=''; renderAIMessages();
  aiHistory.push({role:'ai', text:'Düşünür...'});
  renderAIMessages();
  try{
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'x-api-key': DB.settings.aiApiKey,
        'anthropic-version':'2023-06-01',
        'anthropic-dangerous-direct-browser-access':'true'
      },
      body: JSON.stringify({ model: DB.settings.aiModel||'claude-sonnet-5', max_tokens:1000, messages:[{role:'user', content:text}] })
    });
    const data = await res.json();
    aiHistory.pop();
    if(data.content && data.content.length){
      aiHistory.push({role:'ai', text: data.content.map(c=>c.text||'').join('\n')});
    } else {
      aiHistory.push({role:'ai', text: 'Xəta: '+(data.error?.message || 'cavab alınmadı')});
    }
  }catch(e){
    aiHistory.pop();
    aiHistory.push({role:'ai', text:'Şəbəkə xətası: API açarını və CORS ayarlarını yoxla.'});
  }
  renderAIMessages();
}

/* =========================================================
   SETTINGS
   ========================================================= */
let settingsTab = 'profile';
function renderSettings(root){
  if(!requireAdmin('Ayarlar yalnız admin üçündür')){ navigate('dashboard'); return; }
  const tabs = [['profile','Profil'],['workspace','İş sahəsi'],['ai','AI'],['notifications','Bildirişlər'],['backup','Ehtiyat nüsxə']];
  root.innerHTML = `
    <div class="view-header"><div><h1>Ayarlar</h1><p>Hesab, iş sahəsi və tətbiq üstünlükləri</p></div></div>
    <div class="settings-grid">
      <div class="card settings-nav" style="padding:10px">
        ${tabs.map(([k,l])=>`<div class="nav-item ${settingsTab===k?'active':''}" data-st="${k}">${l}</div>`).join('')}
      </div>
      <div class="card" style="padding:22px" id="settings-panel"></div>
    </div>`;
  root.querySelectorAll('[data-st]').forEach(el=>el.addEventListener('click', ()=>{ settingsTab = el.getAttribute('data-st'); renderSettings(root); }));
  const panel = document.getElementById('settings-panel');
  if(settingsTab==='profile'){
    panel.innerHTML = `
      <div class="field-row"><div class="field"><label>Ad</label><input class="input" id="s-name" value="${escapeHtml(DB.settings.profileName)}"></div>
      <div class="field"><label>Rol</label><input class="input" id="s-role" value="${escapeHtml(DB.settings.profileRole)}"></div></div>
      <button class="btn-primary" style="margin-top:14px" onclick="DB.settings.profileName=document.getElementById('s-name').value;DB.settings.profileRole=document.getElementById('s-role').value;saveDB();toast('Profil yeniləndi')">Yadda saxla</button>`;
  } else if(settingsTab==='workspace'){
    panel.innerHTML = `
      <div class="field"><label>İş sahəsinin adı</label><input class="input" id="s-ws" value="${escapeHtml(DB.settings.workspaceName)}"></div>
      <button class="btn-primary" style="margin-top:14px" onclick="DB.settings.workspaceName=document.getElementById('s-ws').value;document.getElementById('workspace-name-label').textContent=DB.settings.workspaceName;saveDB();toast('Yeniləndi')">Yadda saxla</button>`;
  } else if(settingsTab==='ai'){
    panel.innerHTML = `
      <div class="field"><label>Anthropic API açarı</label><input class="input" id="s-key" type="password" value="${escapeHtml(DB.settings.aiApiKey)}" placeholder="sk-ant-..."></div>
      <div class="field"><label>Model</label><input class="input" id="s-model" value="${escapeHtml(DB.settings.aiModel)}"></div>
      <div class="text-muted" style="font-size:11.5px;margin:6px 0 12px">Açar yalnız bu brauzerdə saxlanılır və heç yerə göndərilmir (birbaşa Anthropic API-yə istisna olmaqla).</div>
      <button class="btn-primary" onclick="DB.settings.aiApiKey=document.getElementById('s-key').value;DB.settings.aiModel=document.getElementById('s-model').value;saveDB();toast('AI ayarları yadda saxlandı')">Yadda saxla</button>`;
  } else if(settingsTab==='notifications'){
    panel.innerHTML = `<div class="settings-row"><div><div class="sr-label">Bildirişlər</div><div class="sr-sub">Son tarix və tapşırıq xəbərdarlıqları</div></div><div class="switch ${DB.settings.notifications?'on':''}" onclick="this.classList.toggle('on');DB.settings.notifications=this.classList.contains('on');saveDB()"></div></div>`;
  } else if(settingsTab==='backup'){
    panel.innerHTML = `
      <div class="settings-row"><div><div class="sr-label">Bütün datanı ixrac et</div><div class="sr-sub">JSON fayl olaraq yüklə</div></div><button class="btn-ghost" onclick="exportData()"><span data-icon="download"></span>İxrac et</button></div>
      <div class="settings-row"><div><div class="sr-label">Datanı idxal et</div><div class="sr-sub">Əvvəllər ixrac edilmiş JSON fayl</div></div><button class="btn-ghost" onclick="document.getElementById('import-input').click()"><span data-icon="upload"></span>İdxal et</button><input type="file" id="import-input" accept=".json" style="display:none"></div>
      <div class="settings-row"><div><div class="sr-label" style="color:var(--rose)">Bütün datanı sıfırla</div><div class="sr-sub">Saytı tam təmizləyir — heç bir layihə, müştəri, qeyd qalmır</div></div><button class="btn-ghost" onclick="resetData()"><span data-icon="trash"></span>Sıfırla</button></div>
    `;
    document.getElementById('import-input').addEventListener('change', importData);
  }
  hydrateIcons(root);
}
function exportData(){
  if(!requireAdmin()) return;
  const blob = new Blob([JSON.stringify(DB,null,2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'nova-digital-os-backup.json'; a.click();
  toast('Ehtiyat nüsxə yükləndi');
}
function importData(e){
  if(!requireAdmin()) return;
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ev=>{
    try{ DB = Object.assign(defaultDB(), JSON.parse(ev.target.result)); saveDB(); toast('Data idxal edildi'); navigate('dashboard'); }
    catch(err){ toast('Fayl düzgün deyil','error'); }
  };
  reader.readAsText(file);
}
function resetData(){
  if(!requireAdmin()) return;
  if(!confirm('Bütün data (layihələr, müştərilər, qeydlər və s.) silinəcək və tətbiq tam təmiz vəziyyətə qayıdacaq. Bu, həm admin, həm də bütün işçilər üçün dərhal görünəcək. Davam edilsin?')) return;
  DB = defaultDB(); saveDB(); toast('Sayt tamamilə təmizləndi'); navigate('dashboard');
}

/* =========================================================
   ADMIN PAGE
   ========================================================= */
function renderAdmin(root){
  if(!requireAdmin('Admin panelinə giriş yalnız admin üçündür')){ navigate('dashboard'); return; }
  const storageBytes = new Blob([JSON.stringify(DB)]).size;
  root.innerHTML = `
    <div class="view-header"><div><h1>Admin Paneli</h1><p>Bütün iş sahəsini idarə et — dəyişikliklər dərhal hər kəsə görünür</p></div></div>

    <div class="stat-grid">
      ${statCard('layers','Layihələr', DB.projects.length, 'v','')}
      ${statCard('users','Müştərilər', DB.clients.length, 't','')}
      ${statCard('file-text','Qeydlər + Sənədlər', DB.notes.length+DB.documents.length, 'b','')}
      ${statCard('package','Yaddaş həcmi', fmtBytes(storageBytes), 'a','')}
    </div>

    <div class="card panel">
      <div class="panel-head"><h3>Rol &amp; İcazə İdarəetməsi</h3></div>
      <div class="settings-row">
        <div><div class="sr-label">Admin PIN</div><div class="sr-sub">İşçilər Admin rejiminə keçmək üçün bu PIN-i bilməlidir</div></div>
        <div style="display:flex;gap:8px"><input class="input" id="admin-pin-field" type="text" value="${escapeHtml(DB.settings.adminPin)}" style="width:120px"><button class="btn-primary" onclick="updateAdminPin()">Yadda saxla</button></div>
      </div>
      <div class="settings-row">
        <div><div class="sr-label">İşçi kimi önizlə</div><div class="sr-sub">Tətbiqi işçi gözü ilə görmək üçün rejimi dəyiş</div></div>
        <button class="btn-ghost" onclick="switchRolePrompt()"><span data-icon="eye"></span>İşçi rejiminə keç</button>
      </div>
      <div class="settings-row">
        <div><div class="sr-label">Bu cihazda rolu unut</div><div class="sr-sub">Növbəti açılışda rol seçim ekranı göstərilir</div></div>
        <button class="btn-ghost" onclick="localStorage.removeItem('${ROLE_KEY}');toast('Rol sıfırlandı, səhifəni yenilə');">Rolu unut</button>
      </div>
    </div>

    <div class="card panel">
      <div class="panel-head"><h3>Toplu Əməliyyatlar</h3></div>
      <div class="admin-page-grid">
        <div class="card admin-action-card">
          <div class="aa-title">Bitmiş tapşırıqları təmizlə</div>
          <div class="aa-sub">${DB.tasks.filter(t=>t.status==='done').length} bitmiş tapşırıq siyahıdan silinəcək</div>
          <button class="btn-ghost" style="width:100%;justify-content:center" onclick="bulkClearDoneTasks()"><span data-icon="check"></span>Təmizlə</button>
        </div>
        <div class="card admin-action-card">
          <div class="aa-title">Arxiv layihələri sil</div>
          <div class="aa-sub">${DB.projects.filter(p=>p.status==='hold').length} dayandırılmış layihə silinəcək (tapşırıqları ilə)</div>
          <button class="btn-ghost" style="width:100%;justify-content:center" onclick="bulkDeleteHoldProjects()"><span data-icon="trash"></span>Sil</button>
        </div>
        <div class="card admin-action-card">
          <div class="aa-title">Şəkil/Video yaddaşını boşalt</div>
          <div class="aa-sub">${DB.images.length} şəkil silinəcək — yaddaşı azaltmaq üçün</div>
          <button class="btn-ghost" style="width:100%;justify-content:center" onclick="bulkClearImages()"><span data-icon="image"></span>Şəkilləri sil</button>
        </div>
        <div class="card admin-action-card">
          <div class="aa-title">Bütün datanı ixrac et</div>
          <div class="aa-sub">JSON ehtiyat nüsxəsi kimi yüklə</div>
          <button class="btn-ghost" style="width:100%;justify-content:center" onclick="exportData()"><span data-icon="download"></span>İxrac et</button>
        </div>
        <div class="card admin-action-card">
          <div class="aa-title">Datanı idxal et</div>
          <div class="aa-sub">Əvvəllər ixrac edilmiş JSON faylı yüklə</div>
          <button class="btn-ghost" style="width:100%;justify-content:center" onclick="document.getElementById('admin-import-input').click()"><span data-icon="upload"></span>İdxal et</button>
          <input type="file" id="admin-import-input" accept=".json" style="display:none">
        </div>
        <div class="card admin-action-card danger">
          <div class="aa-title">Bütün datanı sıfırla</div>
          <div class="aa-sub">Hər şey silinir, sayt tam təmiz vəziyyətə qayıdır — geri qaytarıla bilməz, həm admin, həm işçilər üçün eyni anda</div>
          <button class="btn-ghost" style="width:100%;justify-content:center" onclick="resetData()"><span data-icon="trash"></span>Sıfırla</button>
        </div>
      </div>
    </div>

    <div class="card panel">
      <div class="panel-head"><h3>Fəaliyyət qeydi</h3></div>
      ${DB.activity.slice(0,10).map(a=>`<div class="row-item" style="cursor:default"><span data-icon="${a.icon}" style="color:var(--text-tertiary)"></span><div class="ri-title" style="font-weight:400">${escapeHtml(a.text)}</div><div class="row-right">${timeAgo(a.ts)}</div></div>`).join('') || emptyRow('Fəaliyyət yoxdur')}
    </div>
  `;
  document.getElementById('admin-import-input').addEventListener('change', importData);
  hydrateIcons(root);
}
function updateAdminPin(){
  const v = document.getElementById('admin-pin-field').value.trim();
  if(!v){ toast('PIN boş ola bilməz','warn'); return; }
  DB.settings.adminPin = v; saveDB(); toast('Admin PIN yeniləndi');
}
function bulkClearDoneTasks(){
  if(!requireAdmin()) return;
  const n = DB.tasks.filter(t=>t.status==='done').length;
  DB.tasks = DB.tasks.filter(t=>t.status!=='done'); saveDB();
  logActivity(`${n} bitmiş tapşırıq toplu təmizləndi`,'check');
  toast(n+' tapşırıq silindi'); navigate('admin');
}
function bulkDeleteHoldProjects(){
  if(!requireAdmin()) return;
  const ids = DB.projects.filter(p=>p.status==='hold').map(p=>p.id);
  DB.projects = DB.projects.filter(p=>p.status!=='hold');
  DB.tasks = DB.tasks.filter(t=>!ids.includes(t.projectId));
  saveDB(); logActivity(`${ids.length} arxiv layihə toplu silindi`,'layers');
  toast(ids.length+' layihə silindi'); navigate('admin');
}
function bulkClearImages(){
  if(!requireAdmin()) return;
  const n = DB.images.length;
  DB.images = []; saveDB();
  logActivity('Bütün şəkillər toplu silindi','image');
  toast(n+' şəkil silindi'); navigate('admin');
}

/* =========================================================
   COMMAND PALETTE / GLOBAL SEARCH
   ========================================================= */
const cmdkBackdrop = document.getElementById('cmdk-backdrop');
const cmdkInput = document.getElementById('cmdk-input');
const cmdkList = document.getElementById('cmdk-list');

const QUICK_ACTIONS = [
  {label:'Yeni layihə yarat', icon:'plus', admin:true, run:()=>openProjectForm()},
  {label:'Yeni müştəri əlavə et', icon:'users', admin:true, run:()=>openClientForm()},
  {label:'Yeni qeyd yaz', icon:'file-text', admin:true, run:()=>{ navigate('notes'); setTimeout(createNote,50); }},
  {label:'Yeni ideya əlavə et', icon:'bulb', admin:true, run:()=>openIdeaForm()},
  {label:'Kod snippet əlavə et', icon:'code', admin:true, run:()=>openSnippetForm()},
  {label:'Dashboard-a get', icon:'grid', run:()=>navigate('dashboard')},
  {label:'Layihələrə get', icon:'layers', run:()=>navigate('projects')},
  {label:'Təqvimə get', icon:'calendar', run:()=>navigate('calendar')},
  {label:'Analitikaya get', icon:'bar-chart', run:()=>navigate('analytics')},
  {label:'AI Alətlərinə get', icon:'sparkles', run:()=>navigate('ai')},
  {label:'Admin panelinə get', icon:'shield', admin:true, run:()=>navigate('admin')},
  {label:'Ayarlara get', icon:'settings', admin:true, run:()=>navigate('settings')},
];
function visibleQuickActions(){ return isAdmin() ? QUICK_ACTIONS : QUICK_ACTIONS.filter(a=>!a.admin); }

function openCmdk(){
  cmdkBackdrop.classList.add('open');
  cmdkInput.value=''; cmdkInput.focus();
  renderCmdkResults('');
}
function closeCmdk(){ cmdkBackdrop.classList.remove('open'); }
document.getElementById('search-trigger').addEventListener('click', openCmdk);
cmdkBackdrop.addEventListener('click', e=>{ if(e.target===cmdkBackdrop) closeCmdk(); });
cmdkInput.addEventListener('input', e=>renderCmdkResults(e.target.value));

function renderCmdkResults(q){
  q = q.toLowerCase().trim();
  let html = '';
  if(!q){
    html += `<div class="cmdk-group-label">Sürətli əməliyyatlar</div>`;
    html += visibleQuickActions().map((a,i)=>`<div class="cmdk-item" data-idx="${QUICK_ACTIONS.indexOf(a)}" data-kind="action"><span data-icon="${a.icon}"></span>${a.label}</div>`).join('');
  } else {
    const results = [];
    DB.projects.forEach(p=>{ if(p.name.toLowerCase().includes(q)) results.push({label:p.name, sub:'Layihə', icon:'layers', run:()=>openProject(p.id)}); });
    DB.clients.forEach(c=>{ if(c.name.toLowerCase().includes(q) || (c.company||'').toLowerCase().includes(q)) results.push({label:c.name, sub:'Müştəri', icon:'users', run:()=>{navigate('clients'); setTimeout(()=>openClientDetail(c.id),80);}}); });
    DB.notes.forEach(n=>{ if((n.title||'').toLowerCase().includes(q)) results.push({label:n.title, sub:'Qeyd', icon:'file-text', run:()=>{navigate('notes'); setTimeout(()=>selectNote(n.id),80);}}); });
    DB.ideas.forEach(i=>{ if(i.title.toLowerCase().includes(q)) results.push({label:i.title, sub:'İdeya', icon:'bulb', run:()=>{navigate('ideas'); setTimeout(()=>openIdeaForm(i.id),80);}}); });
    DB.codeSnippets.forEach(s=>{ if(s.title.toLowerCase().includes(q)) results.push({label:s.title, sub:'Kod', icon:'code', run:()=>navigate('code')}); });
    const actionMatches = visibleQuickActions().filter(a=>a.label.toLowerCase().includes(q));
    if(actionMatches.length){ html += `<div class="cmdk-group-label">Əməliyyatlar</div>` + actionMatches.map((a,i)=>`<div class="cmdk-item" data-akind="qa" data-aidx="${QUICK_ACTIONS.indexOf(a)}"><span data-icon="${a.icon}"></span>${a.label}</div>`).join(''); }
    if(results.length){ html += `<div class="cmdk-group-label">Nəticələr</div>` + results.map((r,i)=>`<div class="cmdk-item" data-rkind="res" data-ridx="${i}"><span data-icon="${r.icon}"></span>${escapeHtml(r.label)}<span class="cmdk-kbd">${r.sub}</span></div>`).join(''); }
    if(!actionMatches.length && !results.length){ html = `<div style="padding:30px;text-align:center;color:var(--text-tertiary);font-size:12.5px">Heç nə tapılmadı</div>`; }
    window._cmdkResults = results;
  }
  cmdkList.innerHTML = html;
  hydrateIcons(cmdkList);
  cmdkList.querySelectorAll('.cmdk-item').forEach(el=>{
    el.addEventListener('click', ()=>{
      closeCmdk();
      if(el.hasAttribute('data-idx')) QUICK_ACTIONS[Number(el.getAttribute('data-idx'))].run();
      else if(el.hasAttribute('data-aidx')) QUICK_ACTIONS[Number(el.getAttribute('data-aidx'))].run();
      else if(el.hasAttribute('data-ridx')) window._cmdkResults[Number(el.getAttribute('data-ridx'))].run();
    });
  });
}

document.addEventListener('keydown', e=>{
  if((e.metaKey||e.ctrlKey) && e.key.toLowerCase()==='k'){ e.preventDefault(); cmdkBackdrop.classList.contains('open') ? closeCmdk() : openCmdk(); }
  else if(e.key==='Escape'){ closeCmdk(); closeModal(); }
});

/* =========================================================
   INIT
   ========================================================= */
window.addEventListener('error', (e)=>{
  try{ toast('Xəta baş verdi: '+(e.message||'naməlum').slice(0,80), 'error'); }catch(_){}
});

function startApp(){
  hydrateIcons(document);
  document.getElementById('app').style.display = '';
  if(DB.settings.sidebarCollapsed) document.getElementById('app').classList.add('collapsed');
  if(DB.settings.theme==='light') document.body.classList.add('theme-light');
  navigate('dashboard');
  updateNavBadges();
  wireRoleGate();
  applyRoleUI();
  if(!getRole()) showRoleGate();
}

initAuth();



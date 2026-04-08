// 静态站点交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                // 显示菜单
                mobileMenu.classList.remove('hidden');
                // 切换图标为关闭
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
            } else {
                // 隐藏菜单
                mobileMenu.classList.add('hidden');
                // 切换图标为汉堡菜单
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
            }
        });
        
        // 点击菜单链接后关闭菜单
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
            });
        });
    }
    
    // 电话点击处理
    const phoneButtons = document.querySelectorAll('#phone-button, #phone-card');
    const phoneNumber = '400-8533-009';
    
    phoneButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                // 移动端：直接拨打电话
                window.location.href = `tel:${phoneNumber}`;
            } else {
                // 桌面端：显示电话号码
                alert(`客服热线：${phoneNumber}\n请使用手机拨打或复制号码`);
            }
        });
    });
    
    // 邮件点击处理
    const emailCard = document.getElementById('email-card');
    const emailAddress = 'contact@rongbing.com';
    
    if (emailCard) {
        emailCard.addEventListener('click', function() {
            window.location.href = `mailto:${emailAddress}`;
        });
    }
    
    // 设置当前年份（版权信息）
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
    
    // 导航链接活跃状态（根据当前页面）
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // 移除所有活跃状态
        link.classList.remove('active');
        
        // 特殊处理：首页可能是 index.html 或空
        if (currentPage === 'index.html' || currentPage === '') {
            if (linkHref === 'index.html' || linkHref === './') {
                link.classList.add('active');
            }
        } else if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
    
    // 平滑滚动（如果页面有锚点链接）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
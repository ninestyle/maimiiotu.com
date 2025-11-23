/*
    Version: 3.0.0 (V3 Refactored)
    Framework: User Configuration (Tier 3)
    Last Modified: 2025-11-23
    Author: Maxim
    Theme: MAI MI IOTU - Minimal White
*/

const siteConfig = {
    // [기본 설정]
    language: 'vi', // Default Language

    // [헤더 설정]
    canvas_image_type: 'cover',
    canvas_image_path: './section/', 
    canvas_image_count: 3,
    canvas_image_format: 'jpg',
    canvas_image_slide: 6,
    canvas_indicators: true,
    canvas_overlay: 'dotted',
    
    // [아이콘 버튼] Profile 섹션으로 연결
    icon_buttons: [
        { name: 'Profile', icon: 'domain', url: '#profile' }
    ]
    
};

// V3 Initialization
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PE_V3 !== 'undefined') {
        PE_V3.init(siteConfig);
    } else {
        console.error("Page Express V3 libraries not loaded.");
    }
});
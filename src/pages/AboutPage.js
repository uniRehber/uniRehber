import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: '#333', textAlign: 'center' }}>Hakkımızda</h2>
      <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.6' }}>
        Sitemiz kullanıcılara güncel bilgileri basit ve pratik bir şekilde ve hiç bir koşul 
        getirmeden ve ücret talep etmeden sunmak için hizmet vermektedir. Bu sitede
        verilen tüm bilgiler, dokümanlar ve haberlerin azda olsa eksik, yanlış, öznel 
        ve / veya güncel olmama ihtimalleri vardır. Siteyi kullanan herkesin bu durumların farkında olması 
        ve nihai kararlarını verip işlemlerini yaparken bu durumu göz önünde bulundurmaları önemle rica olunur. 
        Kullanıcı ve adayların nihai kararlarında ve işlemlerinde YÖK, ÖSYM, MEB vb. resmi kurumların 
        kaynaklarından ilk elden faydalanmaları ve bilgileri kontrol etmeleri tavsiye olunur. Site doğabilecek 
        yanlış anlamalardan ve yanlışlıklardan dolayı sorumluluk kabul etmez. Site tüm kullanıcıların bu uyarıları 
        okumuş olduklarını kabul ederiz.
      </p>
    </div>
  );
}

export default AboutPage;

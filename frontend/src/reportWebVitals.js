const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
/*Bu kod parçası, web uygulamanızın 
performansını ölçmek için kullanılan Web Vitals 
kütüphanesini entegre ediyor. Bu kütüphane, web sayfanızın 
kullanıcı deneyimini ölçmek için önemli performans 
metriklerini izlemenizi sağlar..*/
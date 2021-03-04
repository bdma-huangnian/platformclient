
// // Compatible Wechat input loses foucs and can't scroll
// // 兼容微信的输入框失去焦点时候无法滚动
// // 如果是微信平台
  // const isIPhone = window.navigator.userAgent.indexOf('iPhone') > -1;
  document.body.addEventListener('click', event => {
    const target = event.target;
    if (['input', 'textarea'].includes(target.nodeName.toLowerCase())) {
      target.onblur = () => {
        window.scrollTo(0, document.body.scrollTop);
      }
      target.onsearch = () => {
        target.blur();
      }
      target.onchange = () => {
        target.blur();
      }
    } else {
      const elements = target.getElementsByTagName('input');
      if (elements.length === 0) { return; }
      for (const ele of elements) {
        ele.onblur = () => {
          window.scrollTo(0, document.body.scrollTop);
        }
        ele.onsearch = () => {
          ele.blur();
        }
        ele.onchange = () => {
          ele.blur();
        }
      }
    }
  }, true);

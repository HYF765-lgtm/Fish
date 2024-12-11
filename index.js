let hotWord = document.querySelector('.hot-word');
let list = document.querySelector('.list');

(function () {
    let hotWords = ['GXNU', '螺蛳粉', '老友粉', '桂林米粉', '馄饨', '云南米线', '肠粉', '黄焖鸡'];
    let index = 0;
    setInterval(function () {
        index++;
        if (index > hotWords.length - 1) {
            index = 0;
        }
        hotWord.placeholder = hotWords[index];
    }, 3000);
})();
let listArr = ['GXNU', '螺蛳粉', '老友粉', '桂林米粉', '馄饨', '云南米线', '肠粉', '黄焖鸡','鸭血粉丝','烧烤','麻辣烫','渔粉','牛腩粉','米饭','烧卤饭','鸡丝凉面','干拌云吞','瓦煲饭','小碗菜','冒菜','饺子'];
hotWord.oninput = function () {
    list.innerHTML = ''; // 清空之前的列表
    let value = hotWord.value.trim(); // 去掉首尾空格
    if (value === '') {
        list.style.display = 'none'; // 如果输入为空，隐藏列表
        return;
    }

    // 遍历数组，查找匹配项
    for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].indexOf(value) !== -1) {
            // 创建匹配项
            let p = document.createElement('p');
            p.textContent = listArr[i];
            p.style.cursor = 'pointer';

            // 点击匹配项时填充输入框并隐藏列表
            p.onclick = function () {
                hotWord.value = listArr[i];
                list.style.display = 'none';
            };

            list.appendChild(p); // 添加到列表中
        }
    }

    // 如果有匹配项，显示列表；否则隐藏
    list.style.display = list.children.length > 0 ? 'block' : 'none';
};

// 失去焦点时隐藏列表
hotWord.onblur = function () {
    setTimeout(() => {
        list.style.display = 'none';
    }, 100); // 延时隐藏，确保点击列表时不会被立即触发
};
// 获取所有图片元素
const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0; // 当前显示的图片索引
let interval; // 定时器变量

// 初始化：设置第一张图片为显示状态
images[currentIndex].classList.add('active');

// 切换图片函数
function showNextImage() {
    // 当前图片移出视图
    images[currentIndex].classList.remove('active');
    images[currentIndex].classList.add('previous');

    // 更新索引，循环到下一张图片
    currentIndex = (currentIndex + 1) % images.length;

    // 下一张图片进入视图
    images[currentIndex].classList.remove('previous');
    images[currentIndex].classList.add('active');
}

// 自动播放函数
function startSlider() {
    interval = setInterval(showNextImage, 3000); // 每 3 秒切换一次图片
}

// 停止播放函数（悬停时）
function stopSlider() {
    clearInterval(interval);
}

// 开始自动播放
startSlider();

// 鼠标悬停暂停播放，离开恢复播放
const sliderContainer = document.querySelector('.image-slider');
sliderContainer.addEventListener('mouseenter', stopSlider);
sliderContainer.addEventListener('mouseleave', startSlider);

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
  
    // 监听所有图片的点击事件
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "flex"; // 显示模态窗口
        modalImage.src = img.src; // 设置模态窗口图片为点击的图片
      });
    });
  
    // 点击放大后的图片或模态背景关闭模态窗口
    modal.addEventListener("click", () => {
      modal.style.display = "none"; // 隐藏模态窗口
    });
  });
  
  

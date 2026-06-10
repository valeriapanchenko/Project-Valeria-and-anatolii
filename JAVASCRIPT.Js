document.addEventListener('DOMContentLoaded', () => {
    const balanceEl = document.getElementById('user-balance');
    const cartCounter = document.getElementById('cart-counter');
    const adminBtn = document.getElementById('admin-refill-btn');
    const productsContainer = document.getElementById('products-container');
    const searchBar = document.getElementById('search-bar');

    
    const products = [
        
        {
            id: 1,
            category: "actual",
            img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop&q=80",
            title: "Кофта сіра худі Nike 🚁🚁",
            price: 2500,
            desc: "Матеріал: трикотаж. Зручне худі сірого кольору.<br>артикул: NK-BL-01<br><b>Ціна: 2500 грн</b>"
        },
        {
            id: 2,
            category: "actual",
            img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки Nike Air Max Lime ⚙️⚙️",
            price: 3200,
            desc: "Спортивні кросівки з амортизацією, яскраво-зелений колір.<br>артикул: NK-GR-02<br><b>Ціна: 3200 грн</b>"
        },
        
        {
            id: 4,
            category: "actual",
            img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop&q=80",
            title: "Джинси класичні сині 👖👖",
            price: 1500,
            desc: "Стильний синій денім, заужений крій.<br>артикул: NK-FL-04<br><b>Ціна: 1500 грн</b>"
        },
        {
            id: 5,
            category: "actual",
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки Air Max Red 🔥",
            price: 4100,
            desc: "Бігові кросівки, классичний силует.<br>артикул: NK-RD-05<br><b>Ціна: 4100 грн</b>"
        },
        
        
        {
            id: 8,
            category: "actual",
            img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки Стріт High 👟💸",
            price: 2100,
            desc: "Високі кросівки, яскравий молодіжний дизайн.<br>артикул: ST-LW-08<br><b>Ціна: 2100 грн</b>"
        },
        {
            id: 9,
            category: "actual",
            img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop&q=80",
            title: "Куртка демісезонна Urban 🧥",
            price: 3500,
            desc: "Стильний бомбер, захист від вітру.<br>артикул: URB-JK-09<br><b>Ціна: 3500 грн</b>"
        },
        {
            id: 10,
            category: "actual",
            img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&auto=format&fit=crop&q=80",
            title: "Кепка Стріт Стайл 🧢",
            price: 650,
            desc: "Регульований ремінець, вигнутий козирок.<br>артикул: ST-CP-10<br><b>Ціна: 650 грн</b>"
        },
        {
            id: 11,
            category: "actual",
            img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=80",
            title: "Худі біле класичне 🤍",
            price: 1750,
            desc: "Мінімалістичний оверсайз дизайн.<br>артикул: WT-HD-11<br><b>Ціна: 1750 грн</b>"
        },
        {
            id: 12,
            category: "actual",
            img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки Basketball Про 🏀",
            price: 2990,
            desc: "Висока фіксація гомілковостопного суглоба.<br>артикул: BS-PR-12<br><b>Ціна: 2990 грн</b>"
        },
        {
            id: 13,
            category: "actual",
            img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=80",
            title: "Футболка чорна базова 🖤",
            price: 850,
            desc: "Натуральний дихаючий коттон.<br>артикул: BL-TS-13<br><b>Ціна: 850 грн</b>"
        },

       
        {
            id: 14,
            category: "new",
            img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки бігові Sport ❄️",
            price: 4800,
            desc: "Легкі кросівки з білою підошвою для тренувань.<br>артикул: WN-JK-14<br><b>Ціна: 4800 грн</b>"
        },
        {
            id: 15,
            category: "new",
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80",
            title: "Жовтий спортивний костюм 💛",
            price: 1350,
            desc: "Нова колекція яскравого жіночого одягу, худі та шорти.<br>артикул: YL-LS-15<br><b>Ціна: 1350 грн</b>"
        },
        {
            id: 16,
            category: "new",
            img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&auto=format&fit=crop&q=80",
            title: "Білий в'язаний топ 🧥",
            price: 1950,
            desc: "М'яка преміальна пряжа, вільний крій.<br>артикул: WT-SW-16<br><b>Ціна: 1950 грн</b>"
        },
        {
            id: 17,
            category: "new",
            img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки шкіряні Осінь 🥾",
            price: 3400,
            desc: "Водовідштовхувальна шкіра, міцна підошва.<br>артикул: LE-BT-17<br><b>Ціна: 3400 грн</b>"
        },
        {
            id: 18,
            category: "new",
            img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&auto=format&fit=crop&q=80",
            title: "Футболка з графічним принтом 🎨",
            price: 1400,
            desc: "Унікальний малюнок, стійкий до прання.<br>артикул: GR-SW-18<br><b>Ціна: 1400 грн</b>"
        },
        {
            id: 19,
            category: "new",
            img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&auto=format&fit=crop&q=80",
            title: "Чорні кросівки Run Sport 🏃‍♂️",
            price: 2900,
            desc: "Полегшена підошва для бігу та ходьби.<br>артикул: RN-BL-19<br><b>Ціна: 2900 грн</b>"
        },
        
        {
            id: 21,
            category: "new",
            img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&auto=format&fit=crop&q=80",
            title: "Футболка з принтом Новинка 👕",
            price: 750,
            desc: "Трендовий оверсайз крій для літа.<br>артикул: PR-TS-21<br><b>Ціна: 750 грн</b>"
        },
        {
            id: 22,
            category: "new",
            img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&auto=format&fit=crop&q=80",
            title: "Пальто кежуал сучасне 🧥",
            price: 4500,
            desc: "Елегантний міський стиль на осінь.<br>артикул: CZ-PL-22<br><b>Ціна: 4500 грн</b>"
        },
        {
            id: 23,
            category: "new",
            img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки кольорові літні 🌈",
            price: 3100,
            desc: "Яскравий дизайн, дихаюча сітка.<br>артикул: CL-KR-23<br><b>Ціна: 3100 грн</b>"
        },
        {
            id: 24,
            category: "new",
            img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80",
            title: "Сорочка в клітинку Стріт 👔",
            price: 1250,
            desc: "М'яка фланелева тканина з карманами.<br>артикул: FL-SH-24<br><b>Ціна: 1250 грн</b>"
        },
        {
            id: 25,
            category: "new",
            img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400&auto=format&fit=crop&q=80",
            title: "Комплект теплого одягу 🧶",
            price: 3800,
            desc: "В'язаний джемпер та штани високої якості.<br>артикул: KM-WS-25<br><b>Ціна: 3800 грн</b>"
        },

        
        {
            id: 26,
            category: "sales",
            img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&auto=format&fit=crop&q=80",
            title: "Футболка базовий розпродаж % 👕",
            price: 450,
            desc: "Знижка 50% на літні залишки.<br>артикул: SL-TS-26<br><b>Ціна: 450 грн</b>"
        },
        
        {
            id: 31,
            category: "sales",
            img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop&q=80",
            title: "Шкіряна куртка байкерська 🧥",
            price: 2990,
            desc: "Розпродаж преміум колекції минулого року.<br>артикул: SL-LE-31<br><b>Ціна: 2990 грн</b>"
        },
        {
            id: 32,
            category: "sales",
            img: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=400&auto=format&fit=crop&q=80",
            title: "Стильний піджак акція % 👔",
            price: 1900,
            desc: "Повсякденна елегантна модель дешевше.<br>артикул: SL-BL-32<br><b>Ціна: 1900 грн</b>"
        },
        {
            id: 33,
            category: "sales",
            img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80",
            title: "Костюм класика SALE 👔",
            price: 3500,
            desc: "Комплект піджак та брюки високої якості.<br>артикул: SL-ST-33<br><b>Ціна: 3500 грн</b>"
        },
        {
            id: 34,
            category: "sales",
            img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&auto=format&fit=crop&q=80",
            title: "Темно-синій костюм Акція 👔",
            price: 3200,
            desc: "Прекрасний вибір для випускного вечора.<br>артикул: SL-BLU-34<br><b>Ціна: 3200 грн</b>"
        },
        {
            id: 35,
            category: "sales",
            img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&auto=format&fit=crop&q=80",
            title: "Шорти спортивні легкі 🩳",
            price: 500,
            desc: "Зручні шорти для літніх тренувань.<br>артикул: SL-SH-35<br><b>Ціна: 500 грн</b>"
        },
        {
            id: 36,
            category: "sales",
            img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&auto=format&fit=crop&q=80",
            title: "Сорочка класична біла 👔",
            price: 800,
            desc: "100% бавовна, легке прасування праскою.<br>артикул: SL-WT-36<br><b>Ціна: 800 грн</b>"
        },
        {
            id: 37,
            category: "sales",
            img: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=400&auto=format&fit=crop&q=80",
            title: "Пальто демісезонне SALE 🧥",
            price: 2700,
            desc: "Знижена ціна на теплий верхній одяг.<br>артикул: SL-PL-37<br><b>Ціна: 2700 грн</b>"
        },
        

        
        {
            id: 39,
            category: "popular",
            img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&auto=format&fit=crop&q=80",
            title: "Топ продажів: Кросівки Стріт 🌟",
            price: 2900,
            desc: "Найбільш продавана модель цього місяця.<br>артикул: POP-KR-39<br><b>Ціна: 2900 грн</b>"
        },
        {
            id: 40,
            category: "popular",
            img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки Air Max Хіт сезону 🔥",
            price: 4300,
            desc: "Абсолютний лідер за відгуками покупців.<br>артикул: POP-RM-40<br><b>Ціна: 4300 грн</b>"
        },
        
        {
            id: 42,
            category: "popular",
            img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&auto=format&fit=crop&q=80",
            title: "Топ: Футболка чорна з принтом 🖤",
            price: 1500,
            desc: "Популярний оверсайз стиль серед молоді.<br>артикул: POP-HD-42<br><b>Ціна: 1500 грн</b>"
        },
        {
            id: 43,
            category: "popular",
            img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop&q=80",
            title: "Джинси класичні сині Трендові 👖",
            price: 1650,
            desc: "Зручність, перевірена сотнями клієнтів.<br>артикул: POP-JG-43<br><b>Ціна: 1650 грн</b>"
        },
        {
            id: 44,
            category: "popular",
            img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop&q=80",
            title: "Куртка Urban Популярна 🧥",
            price: 3700,
            desc: "Поєднання комфорту та практичності в місті.<br>артикул: POP-JK-44<br><b>Ціна: 3700 грн</b>"
        },
        {
            id: 45,
            category: "popular",
            img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки шкіряні Популярні 🔥",
            price: 4100,
            desc: "Стильное забарвлення, високий рівень комфорту.<br>артикул: POP-AM-45<br><b>Ціна: 4100 грн</b>"
        },
        {
            id: 46,
            category: "popular",
            img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=80",
            title: "Футболка чорна базова Топ 🖤",
            price: 950,
            desc: "Найкращий вибір під будь-який аутфіт.<br>артикул: POP-BL-46<br><b>Ціна: 950 грн</b>"
        },
        {
            id: 47,
            category: "popular",
            img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&auto=format&fit=crop&q=80",
            title: "Кросівки бігові Sport Трендові ❄️",
            price: 5200,
            desc: "Захищає від екстремального зимового холоду.<br>артикул: POP-WN-47<br><b>Ціна: 5200 грн</b>"
        },
        
        
        
    ];

    let currentCategory = 'all';

    function renderProducts() {
        if (!productsContainer) return;
        productsContainer.innerHTML = '';
        
        const searchText = searchBar ? searchBar.value.toLowerCase().trim() : '';

        const filtered = products.filter(product => {
            const matchesCategory = (currentCategory === 'all' || product.category === currentCategory);
            const matchesSearch = product.title.toLowerCase().includes(searchText);
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            productsContainer.innerHTML = '<p style="text-align:center; width:100%; font-size:18px; color: #aaa; margin-top: 20px;">Нічого не знайдено за вашим запитом 🔍</p>';
            return;
        }

        filtered.forEach(product => {
            productsContainer.innerHTML += `
                <article class="product-card">
                    <img src="${product.img}" alt="${product.title}" class="product-img">
                    <div class="product-info">
                        <span class="info-label">Опис</span>
                        <h3 class="info-title">${product.title}</h3>
                        <p class="info-desc">${product.desc}</p>
                    </div>
                    <button class="buy-btn" data-id="${product.id}">купити</button>
                </article>
            `;
        });

        const buyButtons = productsContainer.querySelectorAll('.buy-btn');
        buyButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    function addToCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        if (!product) return;

        let currentBalance = parseInt(localStorage.getItem('balance')) || 1650;

        if (currentBalance < product.price) {
            alert(`❌ Недостатньо коштів! Товар коштує ${product.price} грн, а твій баланс ${currentBalance} грн.`);
            return;
        }

        currentBalance -= product.price;
        localStorage.setItem('balance', currentBalance.toString());

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        updateBalanceDisplay();
        updateCartCounter();
        
        alert(`🛍️ Товар додано до корзини! Списано ${product.price} грн.`);
    }

    function updateBalanceDisplay() {
        const balance = localStorage.getItem('balance') || '1650';
        if (balanceEl) balanceEl.textContent = balance + ' грн';
    }

    function updateCartCounter() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cartCounter) cartCounter.textContent = cart.length;
    }

    if (adminBtn) {
        adminBtn.addEventListener('click', () => {
            const amount = prompt("Введіть суму в грн для зарахування на баланс:", "1000");
            if (amount === null) return;
            const parsedAmount = parseInt(amount);
            if (isNaN(parsedAmount) || parsedAmount <= 0) {
                alert("Будь ласка, введіть коректне число!");
                return;
            }
            let currentBalance = parseInt(localStorage.getItem('balance')) || 1650;
            currentBalance += parsedAmount;
            localStorage.setItem('balance', currentBalance.toString());
            updateBalanceDisplay();
            alert(`💰 Баланс успешно поповнено на +${parsedAmount} грн!`);
        });
    }

    if (searchBar) {
        searchBar.addEventListener('input', renderProducts);
    }

    const bannerItems = document.querySelectorAll('.banner-item-link');
    bannerItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = link.getAttribute('data-category');
            renderProducts();
        });
    });

    renderProducts(); 
    updateBalanceDisplay();
    updateCartCounter();
});
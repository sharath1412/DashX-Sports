document.addEventListener('DOMContentLoaded', () => {

    const productDatabase = [
        { 
            id: 1, 
            name: 'Nike Pegasus 41 Women', 
            price: 659.00, 
            image: 'images/pegasus.png',
            description: 'Responsive cushioning in the Pegasus provides an energised ride for everyday road running.',
            sizes: ['UK 6','UK 7','UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
            category: 'standard'
        },
        { 
            id: 2, 
            name: 'Jordan ADG 5', 
            price: 869.00, 
            image: 'images/jordanadg.png',
            description: 'The best find ways to improve. Hit the range for another bucket of balls. Push putts across the shaggy carpet or scoot something soft across the hardwood.',
            sizes: ['UK 6','UK 7','UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
            category: 'standard'
        },
        { 
            id: 3, 
            name: 'F50 Messi Elite Firm Ground Boots', 
            price: 1199.00, 
            image: 'images/f50.png',
            description: 'Engineered for speed, tuned for Lionel Messi. These adidas Elite football boots are part of a collection created to match the GOAT on pitch requirements.',
            sizes: ['UK 6','UK 7','UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
            category: 'standard'
        },
        { 
            id: 4, 
            name: 'Paris Saint-Germain 2025/26 Match Home', 
            price: 515.00, 
            image: 'images/psg.png',
            description: 'PSG 2025/26 home kit takes its design cues from three famous Parisian landmarks. A striking middle stripe interrupts this classic blue kit, a design detail that was inspired by the skeletal frameworks of the architectural icons.',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            category: 'standard'
        },
        { 
            id: 5, 
            name: 'FEAR OF GOD ATHLETICS SOLID FLEECE HOODIE', 
            price: 699.00, 
            image: 'images/fear.png',
            description: 'The Fear of God Athletics Solid Fleece Hoodie is all about embracing the moment, making it an essential piece in your wardrobe.',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            category: 'standard'
        },        
        { 
            id: 6, 
            name: 'Nike Utility Speed 2.0', 
            price: 369.00, 
            image: 'images/speed.png',
            description: 'Keep your gear organised with exterior zipped front pockets for small items and a spacious main compartment with a luggage-style zip that opens fully to the bottom.',
            sizes: ['ONE SIZE'],
            category: 'standard'
        },
        { 
            id: 7, 
            name: 'Adimule Slides', 
            price: 379.00, 
            image: 'images/slides.png',
            description: 'Tell your feet to relax — your go-to slides are within view. With a closed toe and slip-on design, this adidas pick puts some polish on comfort.',
            sizes: ['UK 6','UK 7','UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],   
            category: 'standard'
        },
        { 
            id: 8, 
            name: 'Nike Everyday Plus Cushioned', 
            price: 49.00, 
            image: 'images/socks.png',
            description: 'The Nike Everyday Plus Cushioned Socks bring comfort to your workout with extra cushioning under the heel and forefoot and a snug, supportive arch band. Sweat-wicking power and breathability up top help keep your feet dry and cool to help push you through that extra set.',
            sizes: ['UK 2-5', 'UK 5-8', 'UK 8-11', 'UK 11-14.5'],
            category: 'standard'
        },
        { 
            id: 9, 
            name: 'Graphic Cap', 
            price: 179.00, 
            image: 'images/cap.png',
            description: 'Stay focused on your game, not the glare. This adidas golf cap is built with a pre-curved brim to shade your eyes from the sun. An adjustable strap lets you find the right fit, and a golf graphic across the front shows your dedication to the game.',
            sizes: ['OSFM'],
            category: 'standard'
        },        
        {
            id: 101, 
            name: 'Nike Phantom 6 High Elite', 
            price: 1499.00, 
            image: 'images/phantom6.png',
            description: 'The Phantom 6 is hungry for defence-destroying passes and shots that scream into top corners.',
            sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
            category: 'limited'
        },
        {
            id: 102, 
            name: "Y-3 Rayon Twill Hooded Top", 
            price: 2099.00, 
            image: 'images/y3rayon.png',
            description: 'A weather-resistant, lightweight jacket with reflective details for urban explorers. Extremely limited run.',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            category: 'limited'
        }
    ];

    let cart = JSON.parse(localStorage.getItem('dashx-cart')) || [];
    const cartCountElement = document.getElementById('cart-count');

    const saveCart = () => {
        localStorage.setItem('dashx-cart', JSON.stringify(cart));
        updateCartCount();
    };

    const updateCartCount = () => {
        if (cartCountElement) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountElement.textContent = totalItems;
        }
    };

    const pagePath = window.location.pathname.split("/").pop();

    const renderProducts = (productsToRender, containerElement) => {
        if (!containerElement) return;

        containerElement.innerHTML = '';
        productsToRender.forEach(product => {
            const isLimited = product.category === 'limited';
            const limitedBannerHTML = isLimited ? '<div class="limited-banner">LIMITED</div>' : '';

            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                ${limitedBannerHTML}
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">RM${product.price.toFixed(2)}</p>
                </a>
            `;
            containerElement.appendChild(productCard);
        });
    };
    
    if (pagePath === 'products.html') {
        const standardProducts = productDatabase.filter(p => p.category === 'standard');
        renderProducts(standardProducts, document.getElementById('product-grid'));
    }

    if (pagePath === 'limited-edition.html') {
        const limitedProducts = productDatabase.filter(p => p.category === 'limited');
        renderProducts(limitedProducts, document.getElementById('limited-product-grid'));
    }

    if (pagePath === 'product-detail.html') {
        const detailContainer = document.getElementById('product-detail-container');
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = productDatabase.find(p => p.id == productId);

        if (product && detailContainer) {
            detailContainer.innerHTML = `
                <div class="product-detail-layout">
                    <div class="product-image-gallery">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h1>${product.name}</h1>
                        <p class="price">RM${product.price.toFixed(2)}</p>
                        <p>${product.description}</p>
                        
                        <div class="selection-controls">
                            <label for="size-options">Select Size:</label>
                            <select id="size-options">
                                ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                            </select>
                            <button class="cta-button" id="detail-add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('detail-add-to-cart-btn').addEventListener('click', () => {
                const selectedSize = document.getElementById('size-options').value;
                const cartId = `${product.id}-${selectedSize}`;

                const existingItem = cart.find(item => item.cartId === cartId);
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({ cartId, id: product.id, name: product.name, price: product.price, size: selectedSize, image: product.image, quantity: 1 });
                }
                saveCart();
                alert(`${product.name} (Size: ${selectedSize}) has been added to your cart.`);
            });
        } else if (detailContainer) {
            detailContainer.innerHTML = '<h2>Product Not Found</h2><p>Sorry, the product you are looking for does not exist.</p>';
        }
    }

    if (pagePath === 'checkout.html') {
        const cartContainer = document.getElementById('cart-items-container');
        const summaryContainer = document.getElementById('checkout-summary');

        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Your shopping cart is empty.</p>';
        } else {
            let totalPrice = 0;
            cartContainer.innerHTML = '';

            cart.forEach(item => {
                totalPrice += item.price * item.quantity;
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>Size: ${item.size}</p>
                        <p><strong>RM${(item.price * item.quantity).toFixed(2)}</strong> (${item.quantity} x RM${item.price.toFixed(2)})</p>
                    </div>
                    <button class="remove-btn" data-cartid="${item.cartId}">Remove</button>
                `;
                cartContainer.appendChild(cartItemElement);
            });

            summaryContainer.style.display = 'block';
            summaryContainer.querySelector('#summary-details').textContent = `Total: RM${totalPrice.toFixed(2)}`;

            cartContainer.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const cartIdToRemove = e.target.dataset.cartid;
                    cart = cart.filter(item => item.cartId !== cartIdToRemove);
                    saveCart();
                    window.location.reload();
                });
            });

            document.getElementById('checkout-button').addEventListener('click', () => {
                alert('Thank you for your purchase! (This is a simulation). Your cart will now be cleared.');
                cart = [];
                saveCart();
                window.location.href = 'index.html';
            });
        }
    }

    if (pagePath === 'gallery.html') {
        const slider = document.querySelector('.slider');
        if (slider) {
            const slides = slider.querySelector('.slides');
            const slideImages = slider.querySelectorAll('.slide');
            const prevBtn = slider.querySelector('.slider-btn.prev');
            const nextBtn = slider.querySelector('.slider-btn.next');
            let currentIndex = 0;
            
            const goToSlide = (index) => {
                if (index < 0) index = slideImages.length - 1;
                if (index >= slideImages.length) index = 0;
                currentIndex = index;
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            };

            nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
            prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        }
    }
    
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check localStorage to see if a theme was saved from a previous visit
    const savedTheme = localStorage.getItem('dashx-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.checked = true;
    }

    // Add the event listener for when the user clicks the toggle
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('dashx-theme', 'dark'); // Save the choice
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('dashx-theme', 'light'); // Save the choice
            }
        });
    }
    
     const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const emailInput = document.getElementById('newsletter-email');
            
            if (emailInput.value) {
                alert(`Thank you! ${emailInput.value} has been subscribed to our newsletter.`);
                
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    updateCartCount();

});
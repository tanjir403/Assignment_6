import { useState } from "react";
import products from "./data/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning("Already added");
      return;
    }

    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from cart");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.info("Cart empty");
      return;
    }
    setCart([]);
    toast.success("Checkout done");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const getTagClass = (tagType) => {
    if (tagType === "orange") return "bg-orange-100 text-orange-600";
    if (tagType === "purple") return "bg-purple-100 text-purple-600";
    if (tagType === "green") return "bg-green-100 text-green-600";
    if (tagType === "yellow") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navbar */}
<div className="navbar bg-white px-6 md:px-10 py-4 shadow-md flex">
  {/* Logo */}
  <div className="flex-1">
    <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-8">
    <a className="text-sm font-medium text-slate-800 hover:text-purple-600 transition cursor-pointer">
      Product
    </a>
    <a className="text-sm font-medium text-slate-800 hover:text-purple-600 transition cursor-pointer">
      Reviews
    </a>
    <a className="text-sm font-medium text-slate-800 hover:text-purple-600 transition cursor-pointer">
      Pricing
    </a>
    <a className="text-sm font-medium text-slate-800 hover:text-purple-600 transition cursor-pointer">
      Testimonials
    </a>
    <a className="text-sm font-medium text-slate-800 hover:text-purple-600 transition cursor-pointer">
      Login
    </a>

    <div className="flex items-center gap-2 cursor-pointer">
     <FaShoppingCart className="text-lg text-slate-700" />
     <span className="text-sm font-semibold">({cart.length})</span>
    </div>

    <button className="btn btn-sm rounded-full px-6 bg-purple-600 text-white border-none hover:bg-purple-700">
      Register
    </button>
  </div>

  {/* Mobile Menu */}
<div className="relative md:hidden flex gap-3">

   <div className="flex items-center gap-2 mr-2">
    <FaShoppingCart className="text-lg text-slate-700" />
    <span className="text-sm font-semibold">({cart.length})</span>
   </div>

  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="btn btn-ghost btn-circle hover:bg-purple-100 border-none"
  >
    <FaBars className="text-lg text-slate-700" />
  </button>

  <div
    className={`absolute right-0 top-full mt-3 w-52 bg-white rounded-box shadow-lg z-[999] p-3 ${
      mobileMenuOpen ? "block" : "hidden"
    }`}
  >
    <ul className="space-y-2">
      <li>
        <a
          onClick={() => setMobileMenuOpen(false)}
          className="block cursor-pointer text-sm font-medium hover:text-purple-600"
        >
          Product
        </a>
      </li>
      <li>
        <a
          onClick={() => setMobileMenuOpen(false)}
          className="block cursor-pointer text-sm font-medium hover:text-purple-600"
        >
          Reviews
        </a>
      </li>
      <li>
        <a
          onClick={() => setMobileMenuOpen(false)}
          className="block cursor-pointer text-sm font-medium hover:text-purple-600"
        >
          Pricing
        </a>
      </li>
      <li>
        <a
          onClick={() => setMobileMenuOpen(false)}
          className="block cursor-pointer text-sm font-medium hover:text-purple-600"
        >
          Testimonials
        </a>
      </li>

      <div className="border-t my-2"></div>

      <li>
        <a
          onClick={() => setMobileMenuOpen(false)}
          className="block cursor-pointer text-sm font-medium hover:text-purple-600"
        >
          Login
        </a>
      </li>

      <li>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
        >
          Register
        </button>
      </li>
    </ul>
  </div>
</div>
</div>
      {/* Hero */}
      <section className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-10 py-16 md:py-20 bg-gray-100">
        <div>
          <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
            🚀 New AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="mt-5 text-gray-600 text-base leading-7 max-w-xl">
            Access premium tools, design assets, templates, and productivity solutions
            all in one place. Built for modern creators and digital professionals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn rounded-full px-6 bg-purple-600 text-white border-none hover:bg-purple-700">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-full px-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
              View Pricing
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/banner.png"
            alt="Banner Illustration"
            className="w-full max-w-md rounded-2xl"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6 md:px-10">
          <div>
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="mt-2 text-sm md:text-base">Active Users</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="mt-2 text-sm md:text-base">Premium Tools</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">4.9</h2>
            <p className="mt-2 text-sm md:text-base">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Toggle */}
      <div className="text-center my-10 px-4">
        <button
          onClick={() => setView("products")}
          className={`btn rounded-full px-6 border-none ${
            view === "products"
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "btn-outline border-2 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
          }`}
        >
          Product
        </button>

        <button
          onClick={() => setView("cart")}
          className={`btn rounded-full px-6 ml-3 ${
            view === "cart"
              ? "bg-purple-600 text-white border-none hover:bg-purple-700"
              : "btn-outline border-2 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* Products */}
      {view === "products" && (
        <section className="px-6 md:px-10 pb-16">
          <h2 className="text-3xl font-bold text-center mb-3">Premium Digital Tools</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            Choose from our curated collection of high-quality tools, templates,
            and creative resources designed to boost productivity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => {
              const added = cart.find((i) => i.id === p.id);

              return (
                <div
                  key={p.id}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <img src={p.icon} alt={p.name} className="w-14 h-14 object-contain" />
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTagClass(p.tagType)}`}>
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-3 leading-7">
                    {p.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-3xl font-bold">${p.price}</p>
                    <p className="text-sm text-gray-400 mt-1">/{p.period}</p>
                  </div>

                  <ul className="mt-5 text-sm space-y-2 text-gray-700">
                    {p.features.map((f, i) => (
                      <li key={i}>✔ {f}</li>
                    ))}
                  </ul>

                  <button
                    onClick={() => addToCart(p)}
                    className={`btn mt-6 w-full rounded-full border-none ${
                      added
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    {added ? "Added ✓" : "Buy Now"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Cart */}
      {view === "cart" && (
        <section className="max-w-3xl mx-auto px-6 md:px-10 pb-16">
          <h2 className="text-2xl font-bold text-center mb-3">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mb-8">No products added yet</p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                      </div>

                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-sm btn-outline text-red-500 border-red-300 rounded-full px-4"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white rounded-2xl shadow-sm p-5">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn mt-5 w-full rounded-full bg-purple-600 text-white border-none hover:bg-purple-700"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </section>
      )}

      {/* Steps */}
      <section className="bg-gray-100 py-16 px-6 md:px-10 text-center">
        <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mb-10 mt-3">Start using premium tools in just a few minutes</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <img
              className="mx-auto mb-5 w-16 h-16 rounded-full bg-purple-100 p-3"
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt="Create Account"
            />
            <h3 className="font-bold text-lg">Create Account</h3>
            <p className="text-sm text-gray-500 mt-3 leading-6">
              Sign up in seconds and access your personal dashboard instantly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <img
              className="mx-auto mb-5 w-16 h-16 rounded-full bg-purple-100 p-3"
              src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
              alt="Choose Products"
            />
            <h3 className="font-bold text-lg">Choose Products</h3>
            <p className="text-sm text-gray-500 mt-3 leading-6">
              Explore premium tools, compare features, and pick what fits your needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <img
              className="mx-auto mb-5 w-16 h-16 rounded-full bg-purple-100 p-3"
              src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png"
              alt="Start Creating"
            />
            <h3 className="font-bold text-lg">Start Creating</h3>
            <p className="text-sm text-gray-500 mt-3 leading-6">
              Download, launch, and start creating with your selected resources.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 md:px-10 text-center">
        <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-3">Choose the plan that matches your workflow and team size</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-8 text-left rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold">Starter</h3>
            <p className="text-gray-500 mt-2">Perfect for getting started</p>
            <p className="text-4xl font-bold mt-5">
              $0 <span className="text-base font-medium text-gray-500">/month</span>
            </p>

            <ul className="mt-6 text-sm space-y-3 text-gray-700">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="btn mt-8 w-full rounded-full border-2 border-purple-600 text-purple-600 bg-white hover:bg-purple-50">
              Get Started
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg scale-100 md:scale-105 text-left">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="mt-2 text-purple-100">Best for professionals</p>
            <p className="text-4xl font-bold mt-5">
              $29 <span className="text-base font-medium text-purple-100">/month</span>
            </p>

            <ul className="mt-6 text-sm space-y-3">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="btn mt-8 w-full rounded-full bg-white text-purple-600 border-none hover:bg-gray-100">
              Start Free Trial
            </button>
          </div>

          <div className="bg-white p-8 text-left rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-gray-500 mt-2">For teams and businesses</p>
            <p className="text-4xl font-bold mt-5">
              $99 <span className="text-base font-medium text-gray-500">/month</span>
            </p>

            <ul className="mt-6 text-sm space-y-3 text-gray-700">
              <li>✔ All premium tools included</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Dedicated support</li>
              <li>✔ Team collaboration</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced insights</li>
            </ul>

            <button className="btn mt-8 w-full rounded-full border-2 border-purple-600 text-purple-600 bg-white hover:bg-purple-50">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-xl">DigiTools</h2>
            <p className="text-sm text-gray-400 mt-3 leading-6">
              Premium digital tools and resources for creators, marketers, and modern professionals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Product</h4>
            <p className="text-sm mt-3 text-gray-400">Features</p>
            <p className="text-sm mt-2 text-gray-400">Pricing</p>
            <p className="text-sm mt-2 text-gray-400">Integrations</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Company</h4>
            <p className="text-sm mt-3 text-gray-400">About</p>
            <p className="text-sm mt-2 text-gray-400">Blog</p>
            <p className="text-sm mt-2 text-gray-400">Careers</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Resources</h4>
            <p className="text-sm mt-3 text-gray-400">Help Center</p>
            <p className="text-sm mt-2 text-gray-400">Contact</p>
            <p className="text-sm mt-2 text-gray-400">Privacy Policy</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 DigiTools. All rights reserved.
        </div>
      </footer>

      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </div>
  );
}

export default App;
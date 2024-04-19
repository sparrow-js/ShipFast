interface props {}

export default function MarketIntroduce({}: props) {
    return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <i className="fas fa-coffee text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Wide variety of choices</h3>
          <p>A marketplace offers a diverse range of coffee beans, catering to the different tastes and preferences of customers.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <i className="fas fa-tags text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Competitive pricing</h3>
          <p>Marketplaces tend to have competitive pricing, allowing customers to find quality coffee beans at reasonable prices.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <i className="fas fa-handshake text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Direct access to sellers</h3>
          <p>In a marketplace, customers have direct access to coffee bean sellers, providing an opportunity for personalized customer service and building relationships.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <i className="fas fa-shopping-cart text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Convenient and secure ordering</h3>
          <p>Marketplaces generally offer convenient and secure ordering options, ensuring a smooth and hassle-free purchasing experience for customers.</p>
        </div>
      </div>
    </div>
    )
}
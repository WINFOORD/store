export function FeaturesSection() {
  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'On orders over €50'
    },
    {
      icon: '🌱',
      title: 'Sustainable',
      description: 'Eco-friendly packaging'
    },
    {
      icon: '⭐',
      title: 'Quality Guaranteed',
      description: '100% satisfaction promise'
    }
  ];
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h4 className="font-bold text-gray-900">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
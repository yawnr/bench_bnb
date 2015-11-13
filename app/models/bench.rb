class Bench < ActiveRecord::Base

  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    benches = [];

    Bench.all.each do |bench|

      if (bench.lat > bounds["southWest"]["lat"].to_f
          bench.lng > bounds["southWest"]["lng"].to_f &&
          bench.lat < bounds["northEast"]["lat"].to_f &&
          bench.lng < bounds["northEast"]["lng"].to_f
          )
        benches.push(bench)

      end
    end

    return benches
  end

end

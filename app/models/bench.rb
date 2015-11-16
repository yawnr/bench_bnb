class Bench < ActiveRecord::Base

  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds, filterParams)
    benches = [];

    Bench.all.each do |bench|

      if (bench.lat > bounds["southWest"]["lat"].to_f
          bench.lng > bounds["southWest"]["lng"].to_f &&
          bench.lat < bounds["northEast"]["lat"].to_f &&
          bench.lng < bounds["northEast"]["lng"].to_f &&
          bench.seating > filterParams[:min].to_i &&
          bench.seating < filterParams[:max].to_i
          )
        benches.push(bench)

      end
    end

    puts filterParams
    puts benches
    return benches
  end

end

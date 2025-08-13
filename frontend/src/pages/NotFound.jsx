import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="glass rounded-3xl p-12 border border-white/20">
          {/* 404 Animation */}
          <div className="text-8xl mb-8 animate-bounce">🎁</div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Oops! Gift Not Found
          </h2>
          
          <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto">
            Looks like this gift suggestion got lost in the wrapping paper! 
            Don't worry, we have plenty of other awkward gifts waiting for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-primary text-lg px-8 py-4"
            >
              🏠 Go Home
            </Link>
            
            <Link
              to="/about"
              className="btn-secondary text-lg px-8 py-4"
            >
              ℹ️ Learn More
            </Link>
          </div>
          
          <div className="mt-12 text-white/50 text-sm">
            <p>Maybe try searching for a different awkward gift? 🎭</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 
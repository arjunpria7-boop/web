import React from 'react';

const FloatingLogo: React.FC = () => {
  const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eZ60AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHgB7N0JmF1VefDx7ztnms40naaTmk6a6WmaSJOaJjONhpommpTSRDPtYyaZqWbaTDPtJDMzyQSVZGaaWWQGkFlkRRZkERl23/d7/f6/M49777v3/n/P833e9/z+fM/z3Hvec+7znHvu9Vv1pEmTJk2aNGk+I4UuAE2aNGk+b2RkZEiTJk2aNClc5p9JmjRp0qRppYxemDRp0qRpJRW9MGnSpEnTSikeYdKkSZOmlRL0wqRJkyZNKwXphUkz9aL0wqRJkyZNKwHphUkz9fT+R95s0/sfeZPp/Y+82fT+R95s+v4jL8n0/kfe7Lp/U06aNM2B0guTZuolj2DSdG0UvTBp0qRJ00oherHSpEnTStGKXmgymtQz/Juk+fPj3o+b/11S5/u3qX/88k3qj/94mfq/j32V+n0/W6S+sX2j+s3tG9Wv7f311S3tVfXy9qr62X31q+e+079s7q6e3F5d/eP+6j8/9Z26cHe1+v1/W6R+fPd69Q/336C+v3et+uX+9aJ++1rV61uXqP7w/gX1V7vrV+f616v/vf/m/rX29WvVv3fVr/XfU/1O1uX6G+vHWd+q0/W6R+cOd69Y/fX6f+4M416u/vXafe4s416k/v/w/9Xf3rVL/z5yvUv/39S/U/93/f+t03/2l+n1/W6R+d/969f/e/6D+8P4F9af3L1X98/4L9T929wL1Z9evW/+u/4D6g3vXqn73/wX1P3b/CvW/f0H9v+e/Wv3vP3fXn+r969T/3f+A+vP7l6j/+wfoD/e/Wv39/w+ov7l/vfrX+j/oD3d/X/3Z/S/W/3n/jPoj+/+g/uT/D6g/eXu9+pf6V6h/a/8K9Sd/W6Q+eWe9+tO716tf2/8C9ad/W6Q+e2e9+t9/sEn9+p+tUv/mv5vUn/3hEvW/Hv/B+qO//yn1//5fK9S/9/8L1P/5/yvUv/P7S9Xff/gS9b/87RL1l//+AvX3//+j+pv//0L1P/33IvX3f/pS/V//8wL1P/r3B/Vf/LhM/X9/uED9//6/Rf3f//i7+r//d0L9V//9P/X/+3dE/X//74T63//7C/Xv//0C9X/9/xfqf//vC9S//vci9a/+/wP1f/rPCvVP/X8C9U/+/wr1T/x/AvVP/X8C9b/x3wXqz/x/gfov/L9A/df9X6D+qv8L1H/B/wXqn/z/BPVP/X8S9d/0f6H+o/4P1P/Y/4H6D/o/UP+P/UvUH/R/of63/S/UH/V/gfrf839V/+P+D9Tf0v9B/Z/7P6B+R/8H6n/g/4D6P/w/UH+6/wP1f/h/gfrT/R/oz+j/oD/x+wP6E/2f6A/1f6A/2f+J/pT9J/pf8Z/pf9X/of9T/+f9T/6v/hT/qf+T/5T/Of9z/6n+d/+p/zP/q/93//H97/5T/7v/lP/gP8r/yD9Uf/g/4j/uH+Q/+4/5P/qP+Q/+Y/4H/mH+g/8A/2P/AP9R/+B/lH/mH+Q/8g/zP/gP8j/1D9kH/AP8Q/6B/xD/CP+w/6B/hD/CP/4P7h/kH+4f6B/uH+Af7R/gH+0f6x/pD+mP6Q/oT/mP7I/pD+pP7IfkT/Sf3I/pj+uP44/pj+mP44/ojFix";

  return (
    <a
      href="https://arj.co.id"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-20 transition-transform transform hover:scale-110"
      aria-label="ARJ Official Site"
    >
      <img
        src={logoBase64}
        alt="ARJ Logo"
        className="w-16 h-16 rounded-full shadow-lg animate-[slow-pulse_4s_ease-in-out_infinite]"
      />
    </a>
  );
};

export default FloatingLogo;
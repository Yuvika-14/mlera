"use client";

import Navbar from "../components/Navbar";
import InfoCard from "../components/InfoCard";
import FormulaBlock from "../components/FormulaBlock";
import DataTable from "../components/DataTable";
import Footer from "../components/Footer";

export default function Home() {

    return (
<main className="min-h-screen p-6">
<Navbar />


<section className="max-w-3xl mx-auto mt-10 space-y-8">
<InfoCard id="section1" title="1. What is Linear Regression?">
<p>
Linear Regression is a supervised machine learning algorithm that models the
relationship between input X and output Y.
</p>
</InfoCard>


<InfoCard id="section2" title="2. Mathematical Formula">
<FormulaBlock formula={"Y = \\beta_0 + \\beta_1 X + \\epsilon"} />
</InfoCard>


<InfoCard id="section3" title="3. Example Dataset">
<DataTable />
</InfoCard>


<InfoCard id="section4" title="4. What is β₀ (Intercept)?">
<p>
The intercept (β₀) represents the predicted value of Y when X = 0.
</p>
</InfoCard>


<InfoCard id="section5" title="5. What is β₁ (Slope)?">
<p>
The slope (β₁) indicates how much Y changes for every one‑unit increase in X.
</p>
</InfoCard>


<InfoCard id="section6" title="6. Error Term (ε)">
<p>
The error term captures the difference between the predicted values and
the actual values.
</p>
</InfoCard>


<InfoCard id="section7" title="7. Cost Function (MSE)">
<FormulaBlock formula={"MSE = \\frac{1}{n} \\sum (Y_i - \\hat{Y_i})^2"} />
</InfoCard>


<InfoCard id="section8" title="8. Gradient Descent Optimization">
<p>
Gradient Descent is used to minimize the cost function by updating parameters
β₀ and β₁ iteratively.
</p>
</InfoCard>


<InfoCard id="section9" title="9. Assumptions of Linear Regression">
<ul className="list-disc list-inside space-y-1">
<li>Linearity</li>
<li>Independence</li>
<li>Homoscedasticity</li>
<li>Normality of errors</li>
</ul>
</InfoCard>


<InfoCard id="section10" title="10. Real‑World Example">
<p>
Linear Regression is often used to predict house prices, sales forecasting,
and understanding relationships between variables.
</p>
</InfoCard>
</section>


<Footer />
</main>
);
}
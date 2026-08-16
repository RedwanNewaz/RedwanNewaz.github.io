export const tags = [
  'Autonomous Systems',
  'Decentralized Systems',
  'Gaussian Process',
  'Spatiotemporal fields',
  'Deep Learning',
  'Multimodal Sensor Fusion',
  'Ensemble Learning',
  'Fiducial Marker Detection',
  'Pedestrain Detection',
  'Self-driving Cars',
  'Children with ASD',
  'Self-taught Robots',
  'Privacy Preserving Database',
  'ABA therapy',
  'Topographic Mapping ',
  'Source Localization',
  'Variational Bayesian',
  'GMM',
  'Environmental Monitoring',
  'Wetland Loss',
  'Water Quality',
  'Adaptive Sampling',
  'Multi-UAV Systems',
  'Bayesian Optimization',
  'Kinodynamic Planning',
  'Coverage Path Planning',
  'Energy-Aware Planning',
  'Signal Temporal Logic',
  'Laboratory Automation',
  'Formal Guarantees',
  'Manipulation',
  'Digital Twins',
  'Digital Forensics',
  'Physical AI',
];

export const researchData = [
  {
    id: 1,
    title: "Distributed Robotic Information Gathering Systems",
    desc: "Robot teams that decide where to sample next, and keep learning when communication is limited",
    tags: [
      "Autonomous Systems",
      "Decentralized Systems",
      "Gaussian Process",
      "Spatiotemporal fields",
      "Adaptive Sampling",
    ],
    image: "rigs.png",
  },
  {
    id: 2,
    title: "Constrained Reinforcement Learning",
    desc: "Planning under uncertainties with probabilistic guarantees",
    tags: ["POMDP", "MCTS", "CSP", "LSTM", "Model Checking", "SMT Solver"],
    // publishedDate: '3 September 2024',
    image: "rl.png",
    relatedPublication: [31, 23, 27, 18, 19, 21],
    longDesc: [
      "Constrained Reinforcement Learning (CRL) is a branch of reinforcement learning focused on finding optimal policies that not only maximize rewards but also satisfy specific constraints, such as safety or resource limits. In many real-world applications like autonomous vehicles, robotics, or healthcare systems, agents must operate under constraints to ensure safe and reliable performance. These constraints can be probabilistic, meaning the agent must respect them with a certain probability, especially in environments where outcomes are uncertain or dynamic. CRL formalizes this challenge by using Constrained Markov Decision Processes (CMDPs), allowing agents to balance reward maximization with constraint satisfaction.",
      "CRL algorithms employ various techniques to handle constraints, including Lagrangian-based methods, primal-dual optimization, and safe exploration strategies. These approaches ensure that agents can explore and learn effectively while maintaining performance within acceptable safety margins. CRL has become particularly important in domains where safety is paramount, such as autonomous navigation or decision-making in critical systems, where violating constraints can lead to catastrophic outcomes. The balance between learning, reward optimization, and constraint handling under uncertainty is what makes CRL a challenging and vital area of research.",
    ],
    concludingParagraph: ['This is the concluding paragraph of the first research paper on CRL.', 'This paper explores various techniques to handle constraints in CRL, including Lagrangian-based methods, primal-dual optimization, and safe'],
    details: [
      {
        header: "Introduction to the problem",
        content: {
          bulletPoint: [],
          paragraph: [
            "In Constrained Reinforcement Learning (CRL), the challenge is to develop agents that can learn optimal policies while adhering to certain constraints, especially under uncertainty. Traditional reinforcement learning aims at maximizing cumulative rewards, but in many real-world applications like autonomous systems, robotics, and healthcare, agents must also respect safety or performance constraints. These constraints can be expressed probabilistically to ensure safe operation under uncertainties. The problem arises from the need to balance the trade-off between optimizing for reward and meeting constraints in environments where the dynamics are not fully known or are stochastic.",
            "In CRL, the complexity is heightened by the inherent uncertainties in the environment, where outcomes are often unpredictable or partially observable. Agents not only have to learn the optimal actions but also need to consider the probabilistic nature of constraints such as safety margins, resource limits, or performance thresholds.",
          ],
        },
      },
      {
        header: "Solution Approach",
        content: {
          bulletPoint: [
            {
              beforePointsParagraph: [
                "The solution approach in CRL typically involves formulating the problem as a Constrained Markov Decision Process (CMDP), where the agent seeks to maximize expected rewards while keeping the expected cost of violating constraints below a specified threshold.",
                "A few common approaches include:",
              ],
              points: [
                {
                  header: "Lagrangian-based methods",
                  description: [
                    "These methods convert the constrained problem into an unconstrained one by incorporating the constraints into the reward function using Lagrange multipliers. The agent learns both the policy and the optimal multiplier value to balance the reward maximization and constraint satisfaction.",
                  ],
                },
                {
                  header: "Primal-dual methods",
                  description: [
                    "These are iterative optimization methods where the agent alternates between updating the policy (primal) and the constraint multipliers (dual) to satisfy both objectives over time.",
                  ],
                },
                {
                  header: "Safe exploration techniques",
                  description: [
                    "These ensure that during the learning process, the agent respects constraints, even under uncertainties.",
                    "Model-based methods can be employed where the agent learns an approximate model of the environment and uses it to plan trajectories that probabilistically guarantee constraint satisfaction.",
                  ],
                },
              ],
            },
          ],
          paragraph: [],
        },
      },
      {
        header: "Evaluation",
        content: {
          bulletPoint: [
            {
              beforePointsParagraph: [
                "The evaluation of CRL methods focuses on measuring two key aspects:",
              ],
              points: [
                {
                  header: "Performance (Reward)",
                  description: [
                    "This is evaluated based on the agent's ability to maximize cumulative rewards, similar to traditional reinforcement learning.",
                  ],
                },
                {
                  header: "Safety",
                  description: [
                    "Constraint violation rate: How often or how severely the agent violates the constraints.",
                    "Probabilistic guarantees: Whether the agent satisfies constraints with a high probability, especially under uncertainties in the environment dynamics.",
                  ],
                },
              ],
            },
          ],
          paragraph: [
            "Evaluation is often done through simulation or real-world testing in domains like robotics, autonomous driving, or resource allocation, where safety and performance are critical. Performance comparisons may include baselines like unconstrained RL algorithms or CRL algorithms with different methods of constraint handling (e.g., Lagrangian vs. chance-constrained approaches).",
            "This ensures that CRL methods not only achieve high rewards but do so while meeting predefined safety or operational constraints under uncertainty, making them suitable for critical applications.",
          ],
        },
      },
    ],
  },
  {
    id: 3,
    title: "Vision-based Robust Perception Systems",
    desc: "Precise robot localization and object detection in diverse surroundings",
    tags: [
      "Deep Learning",
      "Multimodal Sensor Fusion",
      "Ensemble Learning",
      "Fiducial Marker Detection",
      "Pedestrain Detection",
      "Self-driving Cars",
    ],
    // publishedDate: '3 September 2024',
    image: "localization.png",
  },
  {
    id: 4,
    title: "Robotic Applied Behavior Analysis",
    desc: "Social robots that play adaptive games with children with autism to deliver ABA therapy at scale",
    tags: [
      "Children with ASD",
      "Self-taught Robots",
      "Privacy Preserving Database",
      "ABA therapy",
    ],
    // publishedDate: '3 September 2024',
    image: "raba.png",
  },
  {
    id: 5,
    title: "Disaster Robotics",
    desc: "Deploying UAVs for rapid emergency response and disaster recovery coordination",
    tags: [
      "Topographic Mapping ",
      "Source Localization",
      "Variational Bayesian",
      "GMM",
    ],
    // publishedDate: '3 September 2024',
    image: "drone_fleet.png",
  },
  {
    id: 6,
    title: "Environmental Monitoring for a Disappearing Coast",
    desc: "Drone and boat teams that survey wetlands and waterways on their own, funded by the EPA and NSF",
    tags: [
      "Environmental Monitoring",
      "Wetland Loss",
      "Water Quality",
      "Multi-UAV Systems",
      "Adaptive Sampling",
    ],
    image: "asvs.png",
  },
  {
    id: 7,
    title: "Sample-Efficient Motion Planning",
    desc: "Bayesian optimization and learned cost maps for kinodynamic planning in cluttered, energy-limited settings",
    tags: [
      "Bayesian Optimization",
      "Kinodynamic Planning",
      "Coverage Path Planning",
      "Energy-Aware Planning",
      "Signal Temporal Logic",
    ],
    image: "flying_robots.png",
  },
  {
    id: 8,
    title: "Laboratory Automation and Trustworthy Manipulation",
    desc: "Self-driving laboratories where robots translate a scientist's goal into verified, safe plans",
    tags: [
      "Laboratory Automation",
      "Formal Guarantees",
      "Manipulation",
      "Autonomous Systems",
    ],
    image: "manipulator.png",
  },
  {
    id: 9,
    title: "Digital Forensics and Interactive Digital Twins",
    desc: "Robots that reconstruct scenes as interactive digital twins, and methods that hold autonomous systems accountable",
    tags: [
      "Digital Twins",
      "Digital Forensics",
      "Physical AI",
      "Multimodal Sensor Fusion",
    ],
    image: "robotic-forensic.png",
  },
];

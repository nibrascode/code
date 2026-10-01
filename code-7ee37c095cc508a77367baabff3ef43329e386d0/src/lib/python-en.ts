import type { ProgrammingSection } from "@/lib/programming";

export const PYTHON_EN: readonly ProgrammingSection[] = [
  {
    id: "nedir",
    title: "What is Python?",
    blocks: [
      {
        paragraphs: [
          "Python is a popular programming language known for its simple and readable syntax. It is used by both beginners and professional developers in many different fields.",
          "Python is a high-level, general-purpose programming language. Its relatively simple syntax makes Python easier to read and understand compared with many other programming languages.",
          "Python is used in web development, artificial intelligence, machine learning, data analysis, automation, scientific computing, and many other areas.",
          "There is also a large ecosystem of Python libraries and frameworks that extend the language's capabilities.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [
          "Python is a versatile programming language known for its readable syntax and wide range of applications.",
        ],
      },
    ],
  },
  {
    id: "istifade",
    title: "What is Python used for?",
    blocks: [
      {
        paragraphs: ["Python can be used in many areas of software development."],
      },
      {
        heading: "Web development",
        paragraphs: [
          "Python can be used to build the server side of websites and web applications. Frameworks such as Django and Flask are commonly used for this purpose.",
        ],
      },
      {
        heading: "Artificial intelligence",
        paragraphs: [
          "Python is widely used in artificial intelligence and machine learning projects. Many libraries are available for processing data and developing models.",
        ],
      },
      {
        heading: "Data analysis",
        paragraphs: ["Python can be used to process, analyze, and visualize large amounts of data."],
      },
      {
        heading: "Automation",
        paragraphs: ["Python scripts can automate repetitive tasks such as processing files and data."],
      },
      {
        heading: "Education",
        paragraphs: ["Because of its readable syntax, Python is also widely used for teaching programming."],
      },
      {
        heading: "In short",
        paragraphs: [
          "Python is used for web development, artificial intelligence, data analysis, automation, and programming education.",
        ],
      },
    ],
  },
  {
    id: "ne-etmek",
    title: "What can you do with Python?",
    blocks: [
      {
        paragraphs: [
          "Python can be used to create everything from small scripts to complex software projects.",
          "With Python, you can:",
        ],
        list: [
          "Build web applications",
          "Create automation scripts",
          "Analyze data",
          "Develop artificial intelligence projects",
          "Process files automatically",
          "Work with APIs",
          "Perform calculations",
          "Create simple games and programs",
          "Work on scientific and technical projects",
        ],
      },
      {
        heading: "Simple example",
        code: 'name = "Nibras Code"\nprint("Hello,", name)',
        after: ["This code stores a value in a variable and displays it on the screen."],
      },
      {
        heading: "In short",
        paragraphs: [
          "Python is a general-purpose language that can be used for many different programming and automation projects.",
        ],
      },
    ],
  },
  {
    id: "oyrenmek",
    title: "Is Python difficult to learn?",
    blocks: [
      {
        paragraphs: [
          "Python is often chosen by people who are starting to learn programming because its syntax is relatively simple and readable.",
          "However, learning Python at an advanced level requires time and practice. Developers need to understand variables, conditions, loops, functions, data structures, object-oriented programming, and other concepts.",
        ],
      },
      {
        heading: "How to start learning Python?",
        paragraphs: ["A beginner can follow this order:"],
        list: [
          "Learn basic Python syntax",
          "Learn variables and data types",
          "Learn conditions and loops",
          "Learn functions",
          "Learn lists, dictionaries, and other data structures",
          "Build small projects",
          "Learn libraries related to a chosen field",
        ],
        ordered: true,
      },
      {
        paragraphs: ["Writing code regularly is an important part of learning programming."],
      },
      {
        heading: "In short",
        paragraphs: [
          "Python can be a good language for beginners, but reaching a good level requires continuous learning and practice.",
        ],
      },
    ],
  },
  {
    id: "ustunluk",
    title: "Advantages and disadvantages of Python",
    blocks: [
      {
        paragraphs: [
          "Like any programming language, Python has both advantages and limitations.",
        ],
      },
      {
        heading: "Advantages",
        list: [
          "Readable syntax: Python code is relatively easy to read and write.",
          "Wide range of applications: Python is used in areas ranging from web development to artificial intelligence.",
          "Large ecosystem: There are many libraries and frameworks for different tasks.",
          "Large community: Many tutorials, documentation resources, and examples are available.",
          "Cross-platform: Python can be used on different operating systems.",
        ],
      },
      {
        heading: "Disadvantages",
        paragraphs: [
          "Python is not necessarily the best choice for every project. In some situations where very high performance or strict resource limitations are important, other programming languages may be more suitable.",
          "Python programs can also be slower in some cases than programs written in compiled languages.",
        ],
      },
      {
        heading: "In short",
        paragraphs: ["The advantages and limitations of Python depend on the requirements of the project."],
      },
    ],
  },
  {
    id: "sintaksis",
    title: "Python syntax and basic concepts",
    blocks: [
      {
        paragraphs: ["Understanding several basic concepts is important when starting with Python."],
      },
      {
        heading: "Variables",
        paragraphs: ["Variables are used to store data."],
        code: 'name = "Mahir"\nage = 25',
      },
      {
        heading: "Conditions",
        paragraphs: ['The "if" statement allows different code to run depending on a condition.'],
        code: 'age = 20\n\nif age >= 18:\n    print("Adult")',
      },
      {
        heading: "Loops",
        paragraphs: ["Loops allow an operation to be repeated."],
        code: "for i in range(5):\n    print(i)",
      },
      {
        heading: "Functions",
        paragraphs: ["Functions are reusable blocks of code."],
        code: 'def greet(name):\n    print("Hello,", name)\n\ngreet("Nibras Code")',
      },
      {
        paragraphs: [
          "Important Python concepts include variables, data types, conditions, loops, functions, and data structures.",
        ],
      },
    ],
  },
  {
    id: "numuneler",
    title: "Python code examples",
    blocks: [
      {
        paragraphs: ["Practical examples can help beginners understand Python syntax."],
      },
      {
        heading: "Print text",
        code: 'print("Hello, World!")',
      },
      {
        heading: "Add two numbers",
        code: "a = 10\nb = 5\n\nresult = a + b\nprint(result)",
      },
      {
        heading: "Use a condition",
        code: 'score = 85\n\nif score >= 50:\n    print("Passed")\nelse:\n    print("Failed")',
      },
      {
        heading: "Loop example",
        code: "for i in range(1, 6):\n    print(i)",
      },
      {
        heading: "Simple function",
        code: "def add(a, b):\n    return a + b\n\nprint(add(10, 20))",
      },
      {
        paragraphs: ["These examples provide a simple introduction to Python programming."],
      },
    ],
  },
  {
    id: "suallar",
    title: "Frequently asked questions about Python",
    blocks: [
      {
        heading: "What is Python?",
        paragraphs: [
          "Python is a general-purpose programming language used to create software and solve different programming tasks.",
        ],
      },
      {
        heading: "What is Python used for?",
        paragraphs: [
          "Python is used in web development, artificial intelligence, machine learning, data analysis, automation, scientific computing, and other areas.",
        ],
      },
      {
        heading: "Is Python difficult to learn?",
        paragraphs: [
          "Python has a relatively readable syntax, which can make it suitable for beginners. Developing advanced skills requires regular practice.",
        ],
      },
      {
        heading: "Is Python free?",
        paragraphs: ["Yes. Python is open-source software and can be used without purchasing the language itself."],
      },
      {
        heading: "Can Python be used to create websites?",
        paragraphs: ["Yes. Python can be used to build the server side of websites and web applications."],
      },
      {
        heading: "Can Python be used for artificial intelligence?",
        paragraphs: ["Yes. Python is widely used in artificial intelligence and machine learning."],
      },
      {
        heading: "Can Python be used to create mobile apps?",
        paragraphs: [
          "Yes, there are tools for developing mobile applications with Python. However, other languages and technologies are also widely used for Android and iOS development.",
        ],
      },
      {
        heading: "Are Python and JavaScript the same?",
        paragraphs: [
          "No. Python and JavaScript are different programming languages with different syntax and features.",
        ],
      },
      {
        heading: "Is Python good for beginners?",
        paragraphs: [
          "Yes. Its relatively simple and readable syntax makes Python a popular choice for people starting to learn programming.",
        ],
      },
    ],
  },
  {
    id: "javascript",
    title: "Difference Between Python and JavaScript",
    blocks: [
      {
        paragraphs: [
          "Python and JavaScript are both widely used programming languages, but they are commonly used for different purposes. Python is popular for artificial intelligence, data analysis, automation, and backend development. JavaScript is mainly used to create interactive websites and frontend applications. It can also be used for backend development with technologies such as Node.js.",
        ],
      },
    ],
  },
  {
    id: "java",
    title: "Difference Between Python and Java",
    blocks: [
      {
        paragraphs: [
          "Python and Java are popular programming languages used for different purposes. Python has a simple and readable syntax and is widely used in artificial intelligence, data analysis, automation, and backend development. Java is commonly used for large software systems, backend services, enterprise applications, and applications designed to run across different platforms.",
        ],
      },
    ],
  },
];

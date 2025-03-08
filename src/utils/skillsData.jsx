import {
  FaReact,
  FaNodeJs,
  FaNode,
  FaDatabase,
  FaPython,
  FaJsSquare,
  FaCode,
  FaHtml5,
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaAws,
} from "react-icons/fa";

const skillsList = [
  {
    id: 0,
    rating: 4,
    technology: "React",
    icon: <FaReact size={42} color="#61DAFB" />,
    section: "FRONTEND",
    keyTopics: {
      eventLoop: true,
      modules: true,
      npm: true,
      callbacks: true,
      promises: true,
      asyncAwait: true,
      streams: true,
      fileSystem: true,
      httpModule: true,
      expressJs: true,
      middleware: true,
      routing: true,
      requestResponseObjects: true,
      templateEngines: true,
      errorHandling: true,
      restfulAPIs: true,
      authenticationAuthorization: true,
      databaseIntegration: true,
      websockets: true,
      testing: true,
      debugging: true,
      securityBestPractices: true,
    },
  },
  {
    id: 1,
    rating: 3,
    technology: "NodeJs",
    icon: <FaNodeJs size={42} />,
    section: "BACKEND",
    keyTopics: {
      eventLoop: true,
      modules: true,
      npm: true,
      callbacks: true,
      promises: true,
      asyncAwait: true,
      streams: true,
      fileSystem: true,
      httpModule: true,
      expressJs: true,
      middleware: true,
      routing: true,
      requestResponseObjects: true,
      templateEngines: true,
      errorHandling: true,
      restfulAPIs: true,
      authenticationAuthorization: true,
      databaseIntegration: true,
      websockets: true,
      testing: true,
      debugging: true,
      securityBestPractices: true,
    },
  },
  {
    id: 2,
    rating: 3,
    technology: "ExpressJs",
    icon: <FaNode size={42} color="#68A063" />,
    section: "BACKEND",
    keyTopics: {
      eventLoop: true,
      modules: true,
      npm: true,
      callbacks: true,
      promises: true,
      asyncAwait: true,
      streams: true,
      fileSystem: true,
      httpModule: true,
      expressJs: true,
      middleware: true,
      routing: true,
      requestResponseObjects: true,
      templateEngines: true,
      errorHandling: true,
      restfulAPIs: true,
      authenticationAuthorization: true,
      databaseIntegration: true,
      websockets: true,
      testing: true,
      debugging: true,
      securityBestPractices: true,
    },
  },
  {
    id: 3,
    rating: 4,
    technology: "SQL",
    icon: <FaDatabase size={42} color="#4169E1" />,
    section: "DATABASE",
    keyTopics: {
      relationalDatabases: true,
      nonRelationalDatabases: true,
      databaseManagementSystems: true,
      dataModeling: true,
      databaseDesign: true,
      querying: true,
      transactions: true,
      indexing: true,
      normalization: true,
      denormalization: true,
      ACIDProperties: true,
      CAPTheorem: true,
      CRUDOperations: true,
      SQLSyntax: true,
      joins: true,
      aggregateFunctions: true,
      constraints: true,

      views: true,
      storedProcedures: true,
      triggers: true,
      consistency: true,
      availability: true,
      partitionTolerance: true,
    },
  },
  {
    id: 4,
    rating: 3,
    technology: "Python",
    icon: <FaPython size={42} color="#3776AB" />,
    section: "PROGRAMMING",
    keyTopics: {
      variablesAndDataTypes: true,
      operators: true,
      controlFlow: true,
      functions: true,
      lists: true,
      tuples: true,
      dictionaries: true,
      sets: true,
      strings: true,
      fileIO: true,
      exceptions: true,
      comprehensions: true,
      classesAndObjects: true,
      inheritance: true,
      modulesAndPackages: true,
      standardLibrary: true,
      scopeAndNamespace: true,
      iteratorsAndGenerators: true,
      decorators: true,
      lambdaFunctions: true,
      mapFilterReduce: true,
      virtualEnvironments: true,
      pep8: true,
    },
  },
  {
    id: 5,
    rating: 4,
    technology: "javascript",
    icon: <FaJsSquare size={42} color="#F7DF1E" />,
    section: "PROGRAMMING",
    keyTopics: {
      variablesAndDataTypes: true,
      operators: true,
      controlFlow: true,
      functions: true,
      scope: true,
      arrays: true,
      objects: true,
      classesAndPrototypes: true,
      errorHandling: true,
      domManipulation: true,
      events: true,
      asynchronousJavascript: true,
      fetchAPI: true,
      json: true,
      localStorage: true,
      es6Features: true,
      modules: true,
      closures: true,
      higherOrderFunctions: true,
      regularExpressions: true,
      browserAPIs: true,
      debuggingTechniques: true,
      testing: true,
      securityBestPractices: true,
    },
  },
  {
    id: 6,
    rating: 4,
    technology: "GitHub",
    icon: <FaGithub size={42} color="#007ACC" />,
    section: "TOOLS",
    keyTopics: {
      repositories: true,
      issues: true,
      pullRequests: true,
      branches: true,
      collaboration: true,
      forking: true,
      cloning: true,
      commitHistory: true,
      mergeRequests: true,
      codeReviews: true,
      githubActions: true,
      githubPages: true,
      githubCLI: true,
      githubDesktop: true,
      gists: true,
      securityFeatures: true,
      githubAPI: true,
    },
  },
  {
    id: 7,
    rating: 4,
    technology: "vs Code",
    icon: <FaCode size={42} />,
    section: "TOOLS",
    keyTopics: {
      editorBasics: true,
      fileManagement: true,
      editingFeatures: true,
      extensions: true,
      themes: true,
      keyboardShortcuts: true,
      terminalIntegration: true,
      versionControl: true,
      debugging: true,
      taskAutomation: true,
      integratedTerminal: true,
      snippets: true,
      codeNavigation: true,
      codeRefactoring: true,
      customization: true,
      remoteDevelopment: true,
      collaborationFeatures: true,
      debuggingFeatures: true,
    },
  },
  {
    id: 8,
    rating: 5,
    technology: "HTML5",
    icon: <FaHtml5 size={42} color="#E34F26" />,
    section: "TECHNOLOGY",
    keyTopics: {
      documentStructure: true,
      elementsAndTags: true,
      attributes: true,
      semanticHTML: true,
      headingsAndParagraphs: true,
      lists: true,
      links: true,
      images: true,
      tables: true,
      forms: true,
      inputElements: true,
      labelsAndFieldsets: true,
      selectDropdownsAndOptions: true,
      textarea: true,
      buttons: true,
      inlineVsBlockElements: true,
      divisions: true,
      spans: true,
      metadata: true,
      comments: true,
    },
  },
  {
    id: 9,
    rating: 4,
    technology: "Bootstrap",
    icon: <FaBootstrap size={42} color="#7952B3" />,
    section: "TECHNOLOGY",
    keyTopics: {
      gridSystem: true,
      typography: true,
      buttons: true,
      forms: true,
      tables: true,
      alerts: true,
      badges: true,
      cards: true,
      navbar: true,
      dropdowns: true,
      modals: true,
      carousel: true,
      pagination: true,
      icons: true,
      utilities: true,
      responsiveDesign: true,
      customization: true,
      layoutContainers: true,
      accessibilityFeatures: true,
      browserCompatibility: true,
      theming: true,
      componentLibrary: true,
    },
  },
  {
    id: 10,
    rating: 4,
    technology: "CSS3",
    icon: <FaCss3 size={42} color="#1572B6" />,
    section: "TECHNOLOGY",
    keyTopics: {
      selectors: true,
      boxModel: true,
      displayProperty: true,
      positioning: true,
      floats: true,
      flexbox: true,
      gridLayout: true,
      typography: true,
      colorsAndBackgrounds: true,
      borders: true,
      marginAndPadding: true,
      unitsOfMeasurement: true,
      mediaQueries: true,
      pseudoClassesAndElements: true,
      transitions: true,
      animations: true,
      transformations: true,
      boxShadowAndTextShadow: true,
      responsiveDesignTechniques: true,
      cssVariables: true,
      cssSpecificity: true,
    },
  },
  {
    id: 11,
    rating: 3,
    technology: "Cloud Practitioner",
    icon: <FaAws size={42} color="#232f3e" />,
    section: "TECHNOLOGY",
    keyTopics: {
      "AWS Global Infrastructure": true,
      EC2: true,
      "Load Balancers": true,
      "AMI EBS": true,
      S3: true,
      EFS: true,
      Volumes: true,
      "Snapshots VPC": true,
      NAT: true,
      "Bastion Hosts": true,
      " RouteS3": true,
      "I AM": true,
      "Cost Calculator ": true,
    },
  },
];

export { skillsList };

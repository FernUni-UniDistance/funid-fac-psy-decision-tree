const tree = {
  goal: {
    area: "Analysestrategie",
    question: "Möchten Sie eine Hypothese oder ein Modell mit mehreren Variablen prüfen oder Hypothesen explorativ entdecken?",
    hint: "Starten Sie mit der Rolle Ihrer Analyse: Soll eine vorab formulierte Annahme geprüft werden, oder möchten Sie Muster, Dimensionen oder Gruppen in den Daten entdecken?",
    step: "Strategie",
    answers: [
      { label: "Eine Hypothese oder ein Modell mit mehreren Variablen prüfen", next: "researchGoal" },
      { label: "Hypothesen explorativ entdecken", next: "discoveryStructure" }
    ]
  },
  researchGoal: {
    area: "Ausgangspunkt",
    question: "Welche Art von Forschungsfrage möchten Sie beantworten?",
    hint: "Beginnen Sie mit dem Ziel der Analyse. Der Baum führt Sie anschließend über Skalenniveau, Gruppendesign und Verteilungsannahmen.",
    step: "Fragestellung",
    answers: [
      { label: "Zusammenhang zwischen Variablen prüfen", next: "associationScale" },
      { label: "Unterschiede zwischen Mittelwerten, Medianen oder Varianzen vergleichen", next: "comparisonOutcome" },
      { label: "Eine Zielvariable vorhersagen", next: "predictionOutcome" },
      { label: "Häufigkeiten, Kategorien oder Anteile vergleichen", next: "categoricalDesign" }
    ]
  },
  discoveryStructure: {
    area: "Exploration",
    question: "Welche Struktur möchten Sie in den Daten explorativ entdecken?",
    hint: "Explorative Verfahren helfen, Variablen zu bündeln, Personen oder Objekte zu gruppieren oder Distanzen in wenigen Dimensionen darzustellen.",
    step: "Exploration",
    answers: [
      { label: "Mehrere Variablen anhand einer Korrelationsmatrix bündeln oder reduzieren", result: "factorAnalysis" },
      { label: "Direkte Beziehungen zwischen Variablen als Netzwerk explorieren", result: "networkAnalysis" },
      { label: "Ähnliche Personen oder Objekte zu Gruppen zusammenfassen", result: "clusterAnalysis" },
      { label: "Distanzen zwischen Personen oder Objekten mit möglichst wenigen Dimensionen darstellen", result: "multidimensionalScaling" }
    ]
  },
  associationScale: {
    area: "Skalenniveau",
    question: "Wie sind die Variablen skaliert?",
    hint: "Für Zusammenhänge ist besonders wichtig, ob die Variablen metrisch, ordinal oder nominal/kategorial sind.",
    step: "Skalenniveau",
    answers: [
      { label: "Beide Variablen metrisch", next: "normalAssociation" },
      { label: "Mindestens eine Variable ordinal", next: "rankCorrelationChoice" },
      { label: "Zwei kategoriale Variablen", result: "chiSquareAssociation" },
      { label: "Alle Variablen sind nominal (mehrwegige Tabelle)", result: "logLinearModel" },
      { label: "Mehr als zwei Variablen in einem Pfad- oder Klassifikationsmodell", next: "causalModelVariables" }
    ]
  },
  causalModelVariables: {
    area: "Pfad- oder Klassifikationsmodell",
    question: "Welche Art von multivariablem Modell möchten Sie prüfen?",
    hint: "Diese Verfahren modellieren gerichtete Pfade oder klassifizieren eine nominale Zielvariable. Kausale Evidenz entsteht nur, wenn Theorie, Design und Messung dies unterstützen.",
    step: "Modelltyp",
    answers: [
      { label: "Alle Variablen sind messbar / beobachtet", result: "pathAnalysis" },
      { label: "Messbare Variablen und latente Variablen", next: "latentModelType" },
      { label: "Nominale abhängige Variable und intervallskalierte unabhängige Variablen", result: "discriminantAnalysis" }
    ]
  },
  latentModelType: {
    area: "Latentes Modell",
    question: "Möchten Sie nur ein Messmodell prüfen oder zusätzlich gerichtete Pfade testen?",
    hint: "CFA prüft, ob beobachtete Indikatoren zu einem vorab definierten Faktorenmodell passen. SEM ergänzt gerichtete Pfade zwischen latenten und/oder beobachteten Variablen.",
    step: "Latentes Modell",
    answers: [
      { label: "Nur das Messmodell prüfen", result: "confirmatoryFactorAnalysis" },
      { label: "Messmodell plus gerichtete Strukturpfade prüfen", result: "structuralEquationModeling" }
    ]
  },
  normalAssociation: {
    area: "Voraussetzung",
    question: "Ist ein linearer Zusammenhang plausibel und sind starke Ausreißer ausgeschlossen?",
    hint: "Ein Streudiagramm ist hier oft hilfreicher als ein einzelner Kennwert.",
    step: "Annahmen",
    answers: [
      { label: "Ja, lineare Beziehung ist plausibel", result: "pearson" },
      { label: "Nein oder unsicher", next: "rankCorrelationChoice" }
    ]
  },
  rankCorrelationChoice: {
    area: "Rangkorrelation",
    question: "Welche Rangkorrelation möchten Sie berichten?",
    hint: "Spearman ist verbreitet und gut interpretierbar. Kendall's Tau ist oft stabiler bei kleinen Stichproben oder vielen Bindungen.",
    step: "Testwahl",
    answers: [
      { label: "Spearman-Rangkorrelation", result: "spearman" },
      { label: "Kendall's Rangkorrelation", result: "kendall" }
    ]
  },
  comparisonOutcome: {
    area: "Skalenniveau",
    question: "Welche Art von abhängiger Variable liegt vor?",
    hint: "Metrische Zielgrößen führen meist zu t-Tests oder Varianzanalysen. Ordinale Zielgrößen benötigen robuste Alternativen.",
    step: "Skalenniveau",
    answers: [
      { label: "Metrische abhängige Variable", next: "metricDependentVariables" },
      { label: "Ordinale abhängige Variable", next: "ordinalGroups" },
      { label: "Wiederholte oder geclusterte Beobachtungen", next: "mixedModelOutcome" },
      { label: "Varianzen vergleichen", next: "varianceComparison" }
    ]
  },
  metricDependentVariables: {
    area: "Abhängige Variablen",
    question: "Wie viele metrische abhängige Variablen möchten Sie gemeinsam vergleichen?",
    hint: "MANOVA und MANCOVA sind sinnvoll, wenn mehrere zusammenhängende metrische Zielvariablen gleichzeitig zwischen Gruppen verglichen werden.",
    step: "Zielvariablen",
    answers: [
      { label: "Eine metrische abhängige Variable", next: "singleMetricCovariates" },
      { label: "Zwei oder mehr metrische abhängige Variablen", next: "multivariateCovariates" }
    ]
  },
  singleMetricCovariates: {
    area: "Kovariaten",
    question: "Möchten Sie eine oder mehrere Kovariaten kontrollieren?",
    hint: "ANCOVA wird verwendet, wenn Gruppen auf einer metrischen Zielvariable verglichen werden und zusätzliche metrische Kovariaten kontrolliert werden sollen.",
    step: "Kovariaten",
    answers: [
      { label: "Nein, keine Kovariaten", next: "metricGroups" },
      { label: "Ja, eine oder mehrere Kovariaten", result: "ancova" }
    ]
  },
  multivariateCovariates: {
    area: "Kovariaten",
    question: "Möchten Sie eine oder mehrere Kovariaten kontrollieren?",
    hint: "Kovariaten sind zusätzliche metrische Variablen, die vor dem Gruppenvergleich statistisch kontrolliert werden.",
    step: "Kovariaten",
    answers: [
      { label: "Nein, keine Kovariaten", result: "manova" },
      { label: "Ja, eine oder mehrere Kovariaten", result: "mancova" }
    ]
  },
  mixedModelOutcome: {
    area: "Mehrebenen-/Mixed-Design",
    question: "Welches Skalenniveau hat die abhängige Variable im Mixed Model?",
    hint: "Mixed Models sind sinnvoll, wenn Beobachtungen in Personen, Teams, Klassen, Kliniken oder Messzeitpunkten verschachtelt sind oder wenn wiederholte Messungen unbalanciert sind.",
    step: "Mixed Model",
    answers: [
      { label: "Metrische abhängige Variable", result: "linearMixedModel" },
      { label: "Dichotome oder kategoriale abhängige Variable", result: "generalizedLinearMixedModel" },
      { label: "Ordinale abhängige Variable", result: "ordinalMixedModel" }
    ]
  },
  varianceComparison: {
    area: "Varianzen",
    question: "Welche Varianz möchten Sie prüfen oder vergleichen?",
    hint: "Varianztests sind empfindlich gegenüber Verletzungen der Normalverteilung. Prüfen Sie daher immer zusätzlich Verteilung und Ausreißer.",
    step: "Varianzen",
    answers: [
      { label: "Stichprobenvarianz gegen bekannte Populationsvarianz prüfen", result: "chiSquareVariance" },
      { label: "Zwei Stichprobenvarianzen miteinander vergleichen", result: "varianceFTest" }
    ]
  },
  metricGroups: {
    area: "Gruppendesign",
    question: "Wie viele Gruppen oder Messzeitpunkte vergleichen Sie?",
    hint: "Unterscheiden Sie unabhängige Gruppen von verbundenen Messungen, etwa Vorher-Nachher-Daten.",
    step: "Gruppen",
    answers: [
      { label: "Eine Stichprobe gegen einen Sollwert", next: "oneSampleKnownVariance" },
      { label: "Zwei unabhängige Gruppen", next: "twoIndependentNormal" },
      { label: "Zwei verbundene Messungen", next: "twoPairedNormal" },
      { label: "Mehr als zwei Gruppen oder Zeitpunkte", next: "manyGroupsDesign" }
    ]
  },
  oneSampleKnownVariance: {
    area: "Voraussetzung",
    question: "Ist die Populationsstandardabweichung oder Populationsvarianz bekannt?",
    hint: "Ein z-Test für eine Stichprobe setzt voraus, dass die Populationsstreuung vor der Analyse bekannt ist. Wird die Streuung aus der Stichprobe geschätzt, ist meist der t-Test passend.",
    step: "Annahmen",
    answers: [
      { label: "Ja, Populationsstreuung ist bekannt", result: "oneSampleZ" },
      { label: "Nein, Streuung wird aus der Stichprobe geschätzt", next: "oneSampleNormal" }
    ]
  },
  oneSampleNormal: {
    area: "Voraussetzung",
    question: "Ist die metrische Variable ungefähr normalverteilt?",
    hint: "Bei kleinen Stichproben ist die Annahme wichtiger. Bei großen Stichproben hilft zusätzlich die grafische Prüfung.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "oneSampleT" },
      { label: "Nein oder deutlich schief", result: "oneSampleWilcoxon" }
    ]
  },
  twoIndependentNormal: {
    area: "Voraussetzung",
    question: "Sind Normalverteilung und Varianzhomogenität ausreichend plausibel?",
    hint: "Prüfen Sie Verteilung je Gruppe und betrachten Sie die Gruppengrößen.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "independentT" },
      { label: "Nein oder unsicher", result: "mannWhitney" }
    ]
  },
  twoPairedNormal: {
    area: "Voraussetzung",
    question: "Sind die Differenzen der verbundenen Messungen ungefähr normalverteilt?",
    hint: "Bei Paarvergleichen zählt die Verteilung der Differenzwerte, nicht nur jede Messung einzeln.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "pairedT" },
      { label: "Nein oder ordinal", result: "wilcoxon" }
    ]
  },
  manyGroupsDesign: {
    area: "Gruppendesign",
    question: "Wie viele Faktoren vergleichen Sie und gibt es Messwiederholungen?",
    hint: "Bei mehr als einem Faktor können Haupteffekte und Interaktionen geprüft werden. Messwiederholungen ändern das Modell und die Annahmen.",
    step: "Gruppen",
    answers: [
      { label: "Ein Faktor: unabhängige Gruppen", next: "anovaAssumptions" },
      { label: "Ein Faktor: wiederholte Messungen", next: "repeatedAssumptions" },
      { label: "Zwei oder mehr Faktoren: keine Messwiederholung", next: "twoWayAnovaAssumptions" },
      { label: "Zwei oder mehr Faktoren: mit Messwiederholung", next: "twoWayRepeatedAssumptions" }
    ]
  },
  anovaAssumptions: {
    area: "Voraussetzung",
    question: "Sind Normalverteilung je Gruppe und Varianzhomogenität vertretbar?",
    hint: "Bei verletzten Annahmen ist eine nichtparametrische Alternative oft robuster.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "anova" },
      { label: "Nein oder ordinal", result: "kruskalWallis" }
    ]
  },
  repeatedAssumptions: {
    area: "Voraussetzung",
    question: "Sind metrische Messwerte und Sphärizität ausreichend plausibel?",
    hint: "Bei wiederholten Messungen können Korrekturen wie Greenhouse-Geisser nötig werden.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "repeatedAnova" },
      { label: "Nein oder ordinal", result: "friedman" }
    ]
  },
  twoWayAnovaAssumptions: {
    area: "Voraussetzung",
    question: "Sind Normalverteilung je Zelle, Varianzhomogenität und unabhängige Beobachtungen plausibel?",
    hint: "Eine faktorielle ANOVA prüft Haupteffekte und Interaktionen für zwei oder mehr Faktoren.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "twoWayAnova" },
      { label: "Nein oder ordinal", result: "nonparametricTwoWayAnova" }
    ]
  },
  twoWayRepeatedAssumptions: {
    area: "Voraussetzung",
    question: "Sind metrische Messwerte, passende Sphärizitätsannahmen und ein balanciertes Messwiederholungsdesign plausibel?",
    hint: "Bei zwei oder mehr Faktoren mit Messwiederholung können Haupteffekte, Interaktionen und Korrekturen für Sphärizität relevant sein.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "twoWayRepeatedAnova" },
      { label: "Nein oder ordinal", result: "nonparametricTwoWayRepeatedAnova" }
    ]
  },
  ordinalGroups: {
    area: "Gruppendesign",
    question: "Wie sind die ordinalen Messungen angeordnet?",
    hint: "Die robusten Alternativen unterscheiden ebenfalls zwischen unabhängigen und verbundenen Daten.",
    step: "Gruppen",
    answers: [
      { label: "Zwei unabhängige Gruppen", result: "mannWhitney" },
      { label: "Zwei verbundene Messungen", result: "wilcoxon" },
      { label: "Mehrere unabhängige Gruppen", result: "kruskalWallis" },
      { label: "Mehrere verbundene Messungen", result: "friedman" }
    ]
  },
  categoricalDesign: {
    area: "Kategorien",
    question: "Wie ist die kategoriale Fragestellung aufgebaut?",
    hint: "Für Häufigkeiten und Anteile zählen Anzahl Variablen, erwartete Zellhäufigkeiten und ob die Beobachtungen verbunden sind.",
    step: "Kategorien",
    answers: [
      { label: "Zwei unabhängige kategoriale Variablen", result: "chiSquareAssociation" },
      { label: "Kleine erwartete Häufigkeiten in einer 2x2-Tabelle", result: "fisher" },
      { label: "Zwei verbundene dichotome Messungen", result: "mcnemar" },
      { label: "Theoretische und empirische Verteilung bei zweistufiger Variable vergleichen", result: "binomialTest" },
      { label: "Theoretische und empirische Verteilung bei mehrstufiger Variable vergleichen", result: "chiSquareGoodness" }
    ]
  },
  predictionOutcome: {
    area: "Zielvariable",
    question: "Welches Skalenniveau hat die vorherzusagende Zielvariable?",
    hint: "Die Zielvariable bestimmt die Modellfamilie. Die Prädiktoren können metrisch oder kategorial codiert sein.",
    step: "Zielvariable",
    answers: [
      { label: "Metrische Zielvariable", result: "linearRegression" },
      { label: "Dichotome Zielvariable", result: "logisticRegression" },
      { label: "Mehrstufige kategoriale Zielvariable", result: "multinomialRegression" }
    ]
  },
};

const results = {
  pearson: {
    title: "Pearson-Korrelation",
    summary: "Geeignet, wenn zwei metrische Variablen auf einen linearen Zusammenhang geprüft werden.",
    assumptions: ["Metrische Variablen", "Lineare Beziehung", "Keine dominanten Ausreißer", "Bei Inferenz: annähernde bivariate Normalität"]
  },
  spearman: {
    title: "Spearman-Rangkorrelation",
    summary: "Robuste Wahl für ordinale Variablen oder monotone Zusammenhänge ohne strenge Linearitätsannahme.",
    assumptions: ["Mindestens ordinales Skalenniveau", "Monotone Beziehung", "Unabhängige Beobachtungen"]
  },
  kendall: {
    title: "Kendall's Rangkorrelation",
    summary: "Rangbasierte Korrelation für ordinale Variablen oder monotone Zusammenhänge, besonders hilfreich bei kleinen Stichproben oder vielen Bindungen.",
    assumptions: ["Mindestens ordinales Skalenniveau", "Monotone Beziehung", "Unabhängige Beobachtungen", "Geeignet bei Bindungen oder kleineren Stichproben"]
  },
  chiSquareAssociation: {
    title: "Chi-Quadrat-Test auf Unabhängigkeit",
    summary: "Prüft, ob zwei kategoriale Variablen statistisch voneinander abhängig sind.",
    assumptions: ["Kategoriale Variablen", "Unabhängige Beobachtungen", "Ausreichend erwartete Zellhäufigkeiten"]
  },
  logLinearModel: {
    title: "Log-lineares Modell",
    summary: "Modelliert Zusammenhänge und Interaktionen zwischen mehreren nominalen Variablen in einer Kontingenztabelle.",
    assumptions: ["Mehrere nominale Variablen", "Häufigkeitsdaten in einer Kontingenztabelle", "Unabhängige Beobachtungen", "Ausreichende erwartete Zellhäufigkeiten"]
  },
  pathAnalysis: {
    title: "Pfadanalyse (Mediation)",
    summary: "Modelliert gerichtete Beziehungen zwischen mehreren beobachteten Variablen, häufig zur Prüfung direkter, indirekter oder mediierter Effekte.",
    assumptions: ["Alle Variablen sind beobachtet/messbar", "Theoretisch begründete Pfadrichtung", "Lineare Beziehungen", "Ausreichende Stichprobengröße", "Kausale Interpretation nur bei geeignetem Design"]
  },
  structuralEquationModeling: {
    title: "Strukturgleichungsmodellierung (SEM)",
    summary: "Kombiniert Messmodelle für latente Variablen mit gerichteten Strukturpfaden zwischen latenten und beobachteten Variablen.",
    assumptions: ["Latente Konstrukte werden durch mehrere Indikatoren gemessen", "Theoretisch begründetes Mess- und Strukturmodell", "Ausreichende Stichprobengröße", "Modellfit und alternative Modelle prüfen"]
  },
  confirmatoryFactorAnalysis: {
    title: "Konfirmatorische Faktorenanalyse (CFA)",
    summary: "Prüft, ob ein vorab theoretisch festgelegtes Messmodell zu den beobachteten Indikatoren passt.",
    assumptions: ["Latente Konstrukte sind vorab definiert", "Mehrere Indikatoren pro Faktor", "Theoretisch begründete Zuordnung der Items zu Faktoren", "Ausreichende Stichprobengröße", "Modellfit und lokale Fehlanpassungen prüfen"]
  },
  discriminantAnalysis: {
    title: "Diskriminanzanalyse",
    summary: "Klassifiziert Fälle in nominale Gruppen anhand mehrerer intervallskalierter Prädiktoren und beschreibt, welche Variablen die Gruppen trennen.",
    assumptions: ["Nominale abhängige Variable mit bekannten Gruppen", "Intervallskalierte unabhängige Variablen", "Multivariate Normalität innerhalb der Gruppen", "Ähnliche Kovarianzmatrizen", "Ausreichende Gruppengrößen"]
  },
  oneSampleT: {
    title: "Einstichproben-t-Test",
    summary: "Vergleicht den Mittelwert einer metrischen Stichprobe mit einem vorgegebenen Referenzwert.",
    assumptions: ["Metrische Variable", "Unabhängige Beobachtungen", "Annähernde Normalverteilung"]
  },
  oneSampleZ: {
    title: "Einstichproben-z-Test",
    summary: "Vergleicht den Mittelwert einer metrischen Stichprobe mit einem Referenzwert, wenn die Populationsstandardabweichung oder Populationsvarianz bekannt ist.",
    assumptions: ["Metrische Variable", "Unabhängige Beobachtungen", "Populationsstandardabweichung oder Populationsvarianz bekannt", "Normalverteilung der Population oder ausreichend große Stichprobe"]
  },
  oneSampleWilcoxon: {
    title: "Wilcoxon-Vorzeichenrangtest für eine Stichprobe",
    summary: "Nichtparametrische Alternative, wenn ein Median oder Rangmuster gegen einen Referenzwert geprüft wird.",
    assumptions: ["Mindestens ordinale Daten", "Symmetrische Differenzen hilfreich", "Unabhängige Beobachtungen"]
  },
  independentT: {
    title: "t-Test für unabhängige Stichproben",
    summary: "Vergleicht die Mittelwerte zweier unabhängiger Gruppen bei metrischer Zielvariable.",
    assumptions: ["Zwei unabhängige Gruppen", "Metrische Zielvariable", "Annähernde Normalverteilung", "Varianzhomogenität oder Welch-Korrektur"]
  },
  mannWhitney: {
    title: "Mann-Whitney-U-Test",
    summary: "Nichtparametrische Alternative zum unabhängigen t-Test für zwei unabhängige Gruppen.",
    assumptions: ["Zwei unabhängige Gruppen", "Mindestens ordinale Zielvariable", "Ähnliche Verteilungsform bei Lageinterpretation"]
  },
  pairedT: {
    title: "t-Test für abhängige Stichproben",
    summary: "Vergleicht zwei verbundene Mittelwerte, zum Beispiel Vorher-Nachher-Messungen.",
    assumptions: ["Zwei verbundene Messungen", "Metrische Differenzwerte", "Annähernde Normalverteilung der Differenzen"]
  },
  wilcoxon: {
    title: "Wilcoxon-Vorzeichenrangtest",
    summary: "Nichtparametrische Wahl für zwei verbundene Messungen oder ordinale Paarvergleiche.",
    assumptions: ["Zwei verbundene Messungen", "Mindestens ordinale Werte", "Paarweise Zuordnung vorhanden"]
  },
  anova: {
    title: "Einfaktorielle ANOVA",
    summary: "Vergleicht Mittelwerte von mehr als zwei unabhängigen Gruppen.",
    assumptions: ["Unabhängige Gruppen", "Metrische Zielvariable", "Normalverteilung je Gruppe", "Varianzhomogenität"]
  },
  ancova: {
    title: "ANCOVA",
    summary: "Vergleicht Gruppen auf einer metrischen Zielvariable und kontrolliert dabei eine oder mehrere Kovariaten.",
    assumptions: ["Eine metrische Zielvariable", "Eine oder mehrere kategoriale unabhängige Variablen", "Eine oder mehrere metrische Kovariaten", "Lineare Beziehung zwischen Kovariaten und Zielvariable", "Homogene Regressionssteigungen", "Normalverteilung der Residuen und Varianzhomogenität"]
  },
  manova: {
    title: "MANOVA",
    summary: "Vergleicht mehrere zusammenhängende metrische Zielvariablen gleichzeitig zwischen Gruppen.",
    assumptions: ["Zwei oder mehr metrische Zielvariablen", "Eine oder mehrere kategoriale unabhängige Variablen", "Unabhängige Beobachtungen", "Multivariate Normalität innerhalb der Gruppen", "Ähnliche Kovarianzmatrizen"]
  },
  mancova: {
    title: "MANCOVA",
    summary: "Vergleicht mehrere metrische Zielvariablen zwischen Gruppen und kontrolliert dabei eine oder mehrere Kovariaten.",
    assumptions: ["Zwei oder mehr metrische Zielvariablen", "Eine oder mehrere kategoriale unabhängige Variablen", "Metrische Kovariaten", "Lineare Beziehung zwischen Kovariaten und Zielvariablen", "Homogene Regressionssteigungen", "Multivariate Normalität und ähnliche Kovarianzmatrizen"]
  },
  repeatedAnova: {
    title: "ANOVA mit Messwiederholung",
    summary: "Prüft Mittelwertunterschiede über mehrere verbundene Messzeitpunkte oder Bedingungen.",
    assumptions: ["Verbundene Messungen", "Metrische Zielvariable", "Sphärizität oder geeignete Korrektur"]
  },
  twoWayAnova: {
    title: "Faktorielle ANOVA (zwei oder mehr Faktoren)",
    summary: "Prüft Haupteffekte und Interaktionen von zwei oder mehr unabhängigen Faktoren auf eine metrische Zielvariable.",
    assumptions: ["Zwei oder mehr kategoriale unabhängige Faktoren", "Metrische Zielvariable", "Unabhängige Beobachtungen", "Normalität innerhalb der Zellen", "Homogenität der Varianzen"]
  },
  twoWayRepeatedAnova: {
    title: "Faktorielle ANOVA mit Messwiederholung (zwei oder mehr Faktoren)",
    summary: "Prüft Haupteffekte und Interaktionen von zwei oder mehr Faktoren, wenn mindestens ein Faktor innerhalb derselben Personen gemessen wird.",
    assumptions: ["Mindestens ein Messwiederholungsfaktor", "Metrische Zielvariable", "Sphärizität oder geeignete Korrektur", "Balancierte Zuordnung der Messzeitpunkte/Bedingungen"]
  },
  linearMixedModel: {
    title: "Lineares Mixed Model",
    summary: "Modelliert metrische Zielvariablen bei wiederholten, verschachtelten oder geclusterten Beobachtungen mit festen und zufälligen Effekten.",
    assumptions: ["Metrische abhängige Variable", "Beobachtungen sind in Personen, Teams oder Messzeitpunkten verschachtelt", "Zufällige Effekte fachlich begründet", "Residualdiagnostik und Varianzstruktur prüfen"]
  },
  generalizedLinearMixedModel: {
    title: "Generalisiertes lineares Mixed Model",
    summary: "Erweitert logistische oder andere generalisierte Modelle auf wiederholte, verschachtelte oder geclusterte Daten.",
    assumptions: ["Dichotome, kategoriale oder Zähldaten als abhängige Variable", "Geeignete Linkfunktion und Verteilung", "Cluster oder Personen als zufällige Effekte", "Ausreichende Ereignisse pro Parameter"]
  },
  ordinalMixedModel: {
    title: "Ordinales Mixed Model",
    summary: "Modelliert ordinale Zielvariablen mit wiederholten oder geclusterten Beobachtungen, häufig über kumulative Link-Modelle.",
    assumptions: ["Ordinale abhängige Variable", "Wiederholte oder geclusterte Beobachtungen", "Proportional-Odds-Annahme prüfen", "Zufällige Effekte fachlich begründet"]
  },
  kruskalWallis: {
    title: "Kruskal-Wallis-Test",
    summary: "Nichtparametrische Alternative zur einfaktoriellen ANOVA für mehrere unabhängige Gruppen.",
    assumptions: ["Mehrere unabhängige Gruppen", "Mindestens ordinale Zielvariable", "Unabhängige Beobachtungen"]
  },
  friedman: {
    title: "Friedman-Test",
    summary: "Nichtparametrische Alternative zur ANOVA mit Messwiederholung für mehrere verbundene Bedingungen.",
    assumptions: ["Mehrere verbundene Messungen", "Mindestens ordinale Werte", "Gleiche Fälle in allen Bedingungen"]
  },
  nonparametricTwoWayAnova: {
    title: "Nichtparametrische faktorielle ANOVA (ART)",
    summary: "Robuste Alternative für faktorielle Designs mit zwei oder mehr unabhängigen Faktoren, häufig über die Aligned-Rank-Transform-Methode.",
    assumptions: ["Zwei oder mehr kategoriale unabhängige Faktoren", "Mindestens ordinale Zielvariable", "Unabhängige Beobachtungen", "Interaktionen werden über rangtransformierte Daten geprüft"]
  },
  nonparametricTwoWayRepeatedAnova: {
    title: "Nichtparametrische faktorielle ANOVA mit Messwiederholung (ART)",
    summary: "Robuste Alternative für faktorielle Designs mit zwei oder mehr Faktoren und Messwiederholung, wenn parametrische Annahmen nicht tragfähig sind.",
    assumptions: ["Mindestens ein Messwiederholungsfaktor", "Mindestens ordinale Zielvariable", "Gleiche Fälle in den verbundenen Bedingungen", "Interaktionen werden über rangtransformierte Daten geprüft"]
  },
  fisher: {
    title: "Exakter Test nach Fisher",
    summary: "Prüft Zusammenhänge in kleinen 2x2-Kreuztabellen, wenn Chi-Quadrat-Annahmen nicht halten.",
    assumptions: ["Dichotome kategoriale Variablen", "Unabhängige Beobachtungen", "Kleine erwartete Häufigkeiten"]
  },
  mcnemar: {
    title: "McNemar-Test",
    summary: "Vergleicht zwei verbundene dichotome Messungen, etwa Vorher-Nachher-Kategorien.",
    assumptions: ["Zwei verbundene dichotome Messungen", "Paarweise Daten", "Diskordante Paare sind relevant"]
  },
  binomialTest: {
    title: "Binomial-Test",
    summary: "Prüft, ob die empirische Häufigkeit oder der Anteil einer zweistufigen Variable von einer theoretisch erwarteten Wahrscheinlichkeit abweicht.",
    assumptions: ["Zweistufige kategoriale Variable", "Theoretisch erwarteter Anteil definiert", "Unabhängige Beobachtungen", "Feste Anzahl von Versuchen oder Fällen"]
  },
  chiSquareGoodness: {
    title: "Chi-Quadrat-Test (eindimensionaler)",
    summary: "Prüft, ob die empirische Häufigkeitsverteilung einer mehrstufigen kategorialen Variable zu einer theoretisch erwarteten Verteilung passt.",
    assumptions: ["Mehrstufige kategoriale Variable", "Erwartete Häufigkeiten oder Anteile definiert", "Unabhängige Beobachtungen", "Ausreichend erwartete Häufigkeiten je Kategorie"]
  },
  linearRegression: {
    title: "Lineare Regression",
    summary: "Modelliert eine metrische Zielvariable mithilfe eines oder mehrerer Prädiktoren; das Modell liefert ohne geeignetes Design keine Evidenz für Kausalität.",
    assumptions: ["Metrische Zielvariable", "Lineare Zusammenhänge", "Unabhängige Residuen", "Homoskedastizität und Residualdiagnostik", "Vorhersage oder Zusammenhang, nicht automatisch Kausalität"]
  },
  logisticRegression: {
    title: "Binäre logistische Regression",
    summary: "Modelliert die Wahrscheinlichkeit einer dichotomen Zielvariable.",
    assumptions: ["Dichotome Zielvariable", "Unabhängige Beobachtungen", "Keine starke Multikollinearität", "Ausreichende Ereigniszahl"]
  },
  multinomialRegression: {
    title: "Multinomiale logistische Regression",
    summary: "Modelliert eine kategoriale Zielvariable mit mehr als zwei Ausprägungen.",
    assumptions: ["Mehrstufige kategoriale Zielvariable", "Unabhängige Beobachtungen", "Referenzkategorie sinnvoll definiert"]
  },
  factorAnalysis: {
    title: "Faktorenanalyse",
    summary: "Exploratives Verfahren, um mehrere korrelierte Variablen auf wenige zugrunde liegende Faktoren oder Dimensionen zu reduzieren.",
    assumptions: ["Mehrere metrische oder annähernd metrische Variablen", "Sinnvolle Korrelationen zwischen Variablen", "Ausreichende Stichprobengröße", "Interpretierbare Faktorstruktur", "Keine A-priori-Hypothese zu den Beziehungen zwischen den Faktoren"]
  },
  networkAnalysis: {
    title: "Netzwerkanalyse",
    summary: "Exploriert direkte Beziehungen zwischen mehreren Variablen als Netzwerk aus Knoten und Kanten.",
    assumptions: ["Mehrere metrische oder ordinale Variablen", "Kanten werden als bedingte Zusammenhänge interpretiert", "Ausreichende Stichprobengröße", "Stabilität und Robustheit des Netzwerks prüfen", "Keine kausale Interpretation ohne geeignetes Design"]
  },
  clusterAnalysis: {
    title: "Clusteranalyse",
    summary: "Exploratives Verfahren, um Personen oder Objekte anhand ihrer Ähnlichkeit in Gruppen zu ordnen.",
    assumptions: ["Merkmale zur Beschreibung von Personen oder Objekten", "Geeignete Skalierung oder Standardisierung", "Sinnvolles Distanz- oder Ähnlichkeitsmaß", "Clusterlösung fachlich interpretierbar"]
  },
  multidimensionalScaling: {
    title: "Multidimensionale Skalierung",
    summary: "Exploratives Verfahren, um Distanzen oder Unähnlichkeiten zwischen Personen oder Objekten in wenigen Dimensionen darzustellen.",
    assumptions: ["Distanz- oder Unähnlichkeitsmatrix", "Objekte oder Personen sind vergleichbar", "Zahl der Dimensionen wird anhand von Stress und Interpretierbarkeit gewählt", "Darstellung dient primär der Exploration"]
  },
  chiSquareVariance: {
    title: "Chi-Quadrat-Test für eine Varianz",
    summary: "Prüft, ob eine Stichprobenvarianz von einer bekannten oder theoretischen Populationsvarianz abweicht.",
    assumptions: ["Eine metrische Variable", "Bekannte oder theoretisch begründete Populationsvarianz", "Unabhängige Beobachtungen", "Normalverteilung in der Population"]
  },
  varianceFTest: {
    title: "F-Test zum Vergleich zweier Varianzen",
    summary: "Vergleicht, ob sich die Varianzen zweier unabhängiger Stichproben unterscheiden.",
    assumptions: ["Zwei unabhängige Stichproben", "Metrische Zielvariable", "Normalverteilung in beiden Populationen", "Empfindlich gegenüber Ausreißern und Schiefe"]
  }
};

const languagePacks = {
  de: {
    lang: "de",
    ui: {
      appTitle: "Entscheidungsbaum statistischer Testverfahren",
      institutionLabel: "Unidistance Suisse",
      toolBadge: "Research Lab Tool",
      languageLabel: "Sprache",
      searchShort: "Suchen",
      searchTitle: "Test direkt suchen",
      searchIntro: "Suchen Sie nach einem Test oder Verfahren und öffnen Sie die Empfehlung direkt.",
      searchLabel: "Test oder Stichwort",
      searchPlaceholder: "z. B. ANOVA, Regression, Wilcoxon ...",
      searchEmpty: "Kein passender Test gefunden.",
      helpShort: "Hilfe",
      closeSearch: "Suche schließen",
      closeHelp: "Hilfe schließen",
      back: "Zurück",
      reset: "Neu starten",
      pathLabel: "Pfad",
      historyHeading: "Ihr Entscheidungspfad",
      previousDecisionsLabel: "Bisherige Entscheidungen",
      stageCurrent: "Aktuell",
      stageDone: "Erledigt",
      stageOpen: "Noch offen",
      pathProgressOf: "von",
      emptyHistory: "Beantworten Sie die erste Frage, um Ihren Analysepfad aufzubauen.",
      currentQuestionLabel: "Aktuelle Frage",
      requiredBadge: "Pflichtangabe",
      answerInstruction: "Wählen Sie die Antwort, die am besten zu Ihrem Analyseziel passt:",
      previewHeading: "Ergebnisvorschau",
      selectedTestLabel: "Ausgewählter Test",
      reasonLabel: "Begründung",
      previewPlaceholder: "Noch nicht ausgewählt",
      screenshotPreviewPlaceholder: "Das Ergebnis wird hier angezeigt",
      recommendedLabel: "Empfohlenes Verfahren",
      assumptionsHeading: "Voraussetzungen",
      scenarioHeading: "Beispielsituationen",
      psychologyScenarioLabel: "Psychologie",
      sportScenarioLabel: "Sportwissenschaft",
      procedureHeading: "Umsetzung",
      procedureToolLabel: "Ausgabe",
      jamoviScreenshotCaption: "Jamovi-Oberfläche für dieses Verfahren.",
      jamoviScreenshotAlt: "Jamovi-Fenster mit Daten und Ergebnistabelle für dieses Verfahren",
      datasetHeading: "Beispieldatensatz",
      datasetText: "Laden Sie den vorbereiteten CSV-Datensatz herunter, um diese Analyse in Jamovi oder R nachzuvollziehen.",
      downloadDataset: "Datensatz herunterladen",
      copyResult: "Ergebnis kopieren",
      exploreAlternatives: "Alternativen ansehen",
      orientationLabel: "Orientierung",
      orientationHeading: "Was wird geprüft?",
      matrixGoal: "Strategie",
      matrixScale: "Skalenniveau",
      matrixGroups: "Gruppen",
      matrixResult: "Testwahl",
      noteHeading: "Hinweis",
      noteText: "Der Baum unterstützt bei der Auswahl eines üblichen statistischen Tests. Fachliche Annahmen und Studiendesign sollten anschließend geprüft werden.",
      abbreviationsHeading: "Abkürzungen",
      abbrIndependent: "Unabhängige Variable(n)",
      abbrDependent: "Abhängige Variable",
      abbrInstrument: "Instrument(e)/Messung(en)",
      abbrSample: "Stichprobengröße",
      footerNote: "Diese Entscheidungshilfe ersetzt nicht die inhaltliche Prüfung durch Fachliteratur und Methodenlehre.",
      footerContact: "Fehler oder Verbesserungsvorschläge:",
      helpTitle: "So verwenden Sie den Entscheidungsbaum",
      helpIntro: "Wählen Sie jeweils die Antwort, die zu Ihrer Forschungsfrage passt. Der Pfad links bleibt sichtbar, damit Sie nachvollziehen können, warum ein Test vorgeschlagen wird.",
      helpGoodHeading: "Gute Eingaben",
      helpGoodText: "Klären Sie vorab abhängige Variable, Skalenniveau, Anzahl Gruppen und ob Messungen verbunden sind.",
      helpLimitsHeading: "Grenzen",
      helpLimitsText: "Der Baum ersetzt keine Prüfung von Verteilung, Stichprobengröße, Ausreißern oder Modellannahmen.",
      questionStep: "Frage",
      resultStep: "Ergebnis",
      resultMode: "Testwahl",
      nextQuestion: "Nächste Frage",
      resultBranch: "Ergebnis",
      nextQuestionAction: "Weiter zur Frage",
      resultBranchAction: "Ergebnis anzeigen",
      noResult: "Noch kein Ergebnis vorhanden",
      copied: "Ergebnis wurde kopiert",
      copyBlocked: "Kopieren im Browser blockiert",
      chooseAnotherPath: "Wählen Sie einen anderen Pfad",
      sectionLocked: "Dieser Bereich wird durch Ihre Antworten erreicht",
      pathLabelInCopy: "Pfad",
      procedureLabelInCopy: "Umsetzung"
    },
    tree,
    results
  },
  en: {
    lang: "en",
    ui: {
      appTitle: "Decision Tree for Statistical Tests",
      institutionLabel: "Unidistance Suisse",
      toolBadge: "Research Lab Tool",
      languageLabel: "Language",
      searchShort: "Search",
      searchTitle: "Search for a test",
      searchIntro: "Search for a test or procedure and open the recommendation directly.",
      searchLabel: "Test or keyword",
      searchPlaceholder: "e.g., ANOVA, regression, Wilcoxon ...",
      searchEmpty: "No matching test found.",
      helpShort: "Help",
      closeSearch: "Close search",
      closeHelp: "Close help",
      back: "Back",
      reset: "Restart",
      pathLabel: "Path",
      historyHeading: "Your decision path",
      previousDecisionsLabel: "Previous decisions",
      stageCurrent: "Current",
      stageDone: "Done",
      stageOpen: "Open",
      pathProgressOf: "of",
      emptyHistory: "Answer the first question to build your analysis path.",
      currentQuestionLabel: "Current question",
      requiredBadge: "Required",
      answerInstruction: "Choose the answer that best matches your analysis goal:",
      previewHeading: "Result preview",
      selectedTestLabel: "Selected test",
      reasonLabel: "Rationale",
      previewPlaceholder: "Not selected yet",
      screenshotPreviewPlaceholder: "The result will appear here",
      recommendedLabel: "Recommended procedure",
      assumptionsHeading: "Assumptions",
      scenarioHeading: "Example situations",
      psychologyScenarioLabel: "Psychology",
      sportScenarioLabel: "Sport science",
      procedureHeading: "Procedure",
      procedureToolLabel: "Output",
      jamoviScreenshotCaption: "Jamovi interface for this procedure.",
      jamoviScreenshotAlt: "Jamovi window with data and results table for this procedure",
      datasetHeading: "Example dataset",
      datasetText: "Download the prepared CSV dataset to run this analysis in Jamovi or R.",
      downloadDataset: "Download dataset",
      copyResult: "Copy result",
      exploreAlternatives: "View alternatives",
      orientationLabel: "Orientation",
      orientationHeading: "What is being checked?",
      matrixGoal: "Strategy",
      matrixScale: "Scale level",
      matrixGroups: "Groups",
      matrixResult: "Test choice",
      noteHeading: "Note",
      noteText: "The tree helps you choose a common statistical test. Substantive assumptions and study design should still be checked afterwards.",
      abbreviationsHeading: "Abbreviations",
      abbrIndependent: "Independent variable(s)",
      abbrDependent: "Dependent variable",
      abbrInstrument: "Instrument(s)/measurement(s)",
      abbrSample: "Sample size",
      footerNote: "This decision aid does not replace substantive checking with the literature and methods guidance.",
      footerContact: "To report bugs or suggest improvements:",
      helpTitle: "How to use the decision tree",
      helpIntro: "Choose the answer that matches your research question. The path on the left stays visible so you can see why a test is suggested.",
      helpGoodHeading: "Good inputs",
      helpGoodText: "Clarify the dependent variable, scale level, number of groups, and whether measurements are paired.",
      helpLimitsHeading: "Limits",
      helpLimitsText: "The tree does not replace checks of distribution, sample size, outliers, or model assumptions.",
      questionStep: "Question",
      resultStep: "Result",
      resultMode: "Test choice",
      nextQuestion: "Next question",
      resultBranch: "Result",
      nextQuestionAction: "Next question",
      resultBranchAction: "Show result",
      noResult: "No result yet",
      copied: "Result copied",
      copyBlocked: "Copying was blocked by the browser",
      chooseAnotherPath: "Choose another path",
      sectionLocked: "This section is reached through your answers",
      pathLabelInCopy: "Path",
      procedureLabelInCopy: "Procedure"
    },
    tree: {
      goal: {
        area: "Analysis strategy",
        question: "Do you want to test a hypothesis or a model with multiple variables, or discover hypotheses exploratively?",
        hint: "Start with the role of your analysis: are you testing a predefined assumption, or are you trying to discover patterns, dimensions, or groups in the data?",
        step: "Strategy",
        answers: [
          { label: "Test a hypothesis or a model with multiple variables", next: "researchGoal" },
          { label: "Discover hypotheses exploratively", next: "discoveryStructure" }
        ]
      },
      researchGoal: {
        area: "Starting point",
        question: "What kind of research question do you want to answer?",
        hint: "Start with the goal of the analysis. The tree then guides you through scale level, group design, and distribution assumptions.",
        step: "Research question",
        answers: [
          { label: "Test association between variables", next: "associationScale" },
          { label: "Compare difference between means, medians or variances", next: "comparisonOutcome" },
          { label: "Predict an outcome variable", next: "predictionOutcome" },
          { label: "Compare frequencies, categories, or proportions", next: "categoricalDesign" }
        ]
      },
      discoveryStructure: {
        area: "Exploration",
        question: "What kind of structure do you want to discover in the data?",
        hint: "Exploratory procedures can group variables, group people or objects, or represent distances in a small number of dimensions.",
        step: "Exploration",
        answers: [
          { label: "Group or reduce several variables using a correlation matrix", result: "factorAnalysis" },
          { label: "Explore direct relations among variables as a network", result: "networkAnalysis" },
          { label: "Group similar people or objects", result: "clusterAnalysis" },
          { label: "Represent distances between people or objects with the minimum number of dimensions", result: "multidimensionalScaling" }
        ]
      },
      associationScale: {
        area: "Scale level",
        question: "How are the variables measured?",
        hint: "For associations, it matters whether variables are metric, ordinal, or nominal/categorical.",
        step: "Scale level",
        answers: [
          { label: "Both variables are metric", next: "normalAssociation" },
          { label: "At least one variable is ordinal", next: "rankCorrelationChoice" },
          { label: "Two categorical variables", result: "chiSquareAssociation" },
          { label: "All variables are nominal (multiway table)", result: "logLinearModel" },
          { label: "More than two variables in a path or classification model", next: "causalModelVariables" }
        ]
      },
      causalModelVariables: {
        area: "Path or classification model",
        question: "What kind of multivariable model do you want to test?",
        hint: "These procedures model directed paths or classify a nominal outcome. They support causal claims only when theory, design, and measurement justify that interpretation.",
        step: "Model type",
        answers: [
          { label: "All variables are measurable / observed", result: "pathAnalysis" },
          { label: "Measurable variables and latent variables", next: "latentModelType" },
          { label: "Nominal dependent variable and interval-scaled independent variables", result: "discriminantAnalysis" }
        ]
      },
      latentModelType: {
        area: "Latent model",
        question: "Do you want to test only a measurement model, or also directional paths?",
        hint: "CFA tests whether observed indicators fit a predefined factor model. SEM adds directional paths among latent and/or observed variables.",
        step: "Latent model",
        answers: [
          { label: "Test only the measurement model", result: "confirmatoryFactorAnalysis" },
          { label: "Test measurement model plus directional structural paths", result: "structuralEquationModeling" }
        ]
      },
      normalAssociation: {
        area: "Assumption",
        question: "Is a linear relationship plausible and are strong outliers ruled out?",
        hint: "A scatterplot is often more useful here than a single coefficient.",
        step: "Assumptions",
        answers: [
          { label: "Yes, a linear relationship is plausible", result: "pearson" },
          { label: "No or unsure", next: "rankCorrelationChoice" }
        ]
      },
      rankCorrelationChoice: {
        area: "Rank correlation",
        question: "Which rank correlation do you want to report?",
        hint: "Spearman is common and easy to interpret. Kendall's tau is often more stable with small samples or many ties.",
        step: "Test choice",
        answers: [
          { label: "Spearman rank correlation", result: "spearman" },
          { label: "Kendall's rank correlation", result: "kendall" }
        ]
      },
      comparisonOutcome: {
        area: "Scale level",
        question: "What type of dependent variable do you have?",
        hint: "Metric outcomes usually lead to t-tests or ANOVA. Ordinal outcomes need robust alternatives.",
        step: "Scale level",
        answers: [
          { label: "Metric dependent variable", next: "metricDependentVariables" },
          { label: "Ordinal dependent variable", next: "ordinalGroups" },
          { label: "Repeated or clustered observations", next: "mixedModelOutcome" },
          { label: "Compare variances", next: "varianceComparison" }
        ]
      },
      metricDependentVariables: {
        area: "Dependent variables",
        question: "How many metric dependent variables do you want to compare jointly?",
        hint: "MANOVA and MANCOVA are useful when several related metric outcomes are compared between groups at the same time.",
        step: "Dependent variables",
        answers: [
          { label: "One metric dependent variable", next: "singleMetricCovariates" },
          { label: "Two or more metric dependent variables", next: "multivariateCovariates" }
        ]
      },
      singleMetricCovariates: {
        area: "Covariates",
        question: "Do you want to control for one or more covariates?",
        hint: "ANCOVA is used when groups are compared on one metric outcome while additional metric covariates are controlled.",
        step: "Covariates",
        answers: [
          { label: "No covariates", next: "metricGroups" },
          { label: "Yes, one or more covariates", result: "ancova" }
        ]
      },
      multivariateCovariates: {
        area: "Covariates",
        question: "Do you want to control for one or more covariates?",
        hint: "Covariates are additional metric variables that are statistically controlled before comparing groups.",
        step: "Covariates",
        answers: [
          { label: "No covariates", result: "manova" },
          { label: "Yes, one or more covariates", result: "mancova" }
        ]
      },
      mixedModelOutcome: {
        area: "Multilevel / mixed design",
        question: "What scale level does the dependent variable have in the mixed model?",
        hint: "Mixed models are useful when observations are nested within people, teams, classes, clinics, or measurement occasions, or when repeated measurements are unbalanced.",
        step: "Mixed model",
        answers: [
          { label: "Metric dependent variable", result: "linearMixedModel" },
          { label: "Dichotomous or categorical dependent variable", result: "generalizedLinearMixedModel" },
          { label: "Ordinal dependent variable", result: "ordinalMixedModel" }
        ]
      },
      varianceComparison: {
        area: "Variances",
        question: "Which variance do you want to test or compare?",
        hint: "Variance tests are sensitive to violations of normality, so always inspect distributions and outliers as well.",
        step: "Variances",
        answers: [
          { label: "Test a sample variance against a known population variance", result: "chiSquareVariance" },
          { label: "Compare two sample variances", result: "varianceFTest" }
        ]
      },
      metricGroups: {
        area: "Group design",
        question: "How many groups or measurement times are you comparing?",
        hint: "Distinguish independent groups from paired measurements, such as pre-post data.",
        step: "Groups",
        answers: [
          { label: "One sample against a target value", next: "oneSampleKnownVariance" },
          { label: "Two independent groups", next: "twoIndependentNormal" },
          { label: "Two paired measurements", next: "twoPairedNormal" },
          { label: "More than two groups or time points", next: "manyGroupsDesign" }
        ]
      },
      oneSampleKnownVariance: {
        area: "Assumption",
        question: "Is the population standard deviation or population variance known?",
        hint: "A one-sample z-test requires the population spread to be known before the analysis. If the spread is estimated from the sample, the t-test is usually the better choice.",
        step: "Assumptions",
        answers: [
          { label: "Yes, the population spread is known", result: "oneSampleZ" },
          { label: "No, the spread is estimated from the sample", next: "oneSampleNormal" }
        ]
      },
      oneSampleNormal: {
        area: "Assumption",
        question: "Is the metric variable approximately normally distributed?",
        hint: "For small samples this assumption matters more. For large samples, graphical checks also help.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "oneSampleT" },
          { label: "No or clearly skewed", result: "oneSampleWilcoxon" }
        ]
      },
      twoIndependentNormal: {
        area: "Assumption",
        question: "Are normality and homogeneity of variances sufficiently plausible?",
        hint: "Check the distribution within each group and consider the group sizes.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "independentT" },
          { label: "No or unsure", result: "mannWhitney" }
        ]
      },
      twoPairedNormal: {
        area: "Assumption",
        question: "Are the differences between paired measurements approximately normal?",
        hint: "For paired comparisons, the distribution of the difference scores is what counts.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "pairedT" },
          { label: "No or ordinal", result: "wilcoxon" }
        ]
      },
      manyGroupsDesign: {
        area: "Group design",
        question: "How many factors are you comparing, and are there repeated measurements?",
        hint: "With more than one factor, you can test main effects and interactions. Repeated measurements change the model and assumptions.",
        step: "Groups",
        answers: [
          { label: "One factor: independent groups", next: "anovaAssumptions" },
          { label: "One factor: repeated measurements", next: "repeatedAssumptions" },
          { label: "Two or more factors: no repeated measurements", next: "twoWayAnovaAssumptions" },
          { label: "Two or more factors: with repeated measurements", next: "twoWayRepeatedAssumptions" }
        ]
      },
      anovaAssumptions: {
        area: "Assumption",
        question: "Are normality within groups and equal variances acceptable?",
        hint: "If assumptions are violated, a nonparametric alternative is often more robust.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "anova" },
          { label: "No or ordinal", result: "kruskalWallis" }
        ]
      },
      repeatedAssumptions: {
        area: "Assumption",
        question: "Are metric measurements and sphericity sufficiently plausible?",
        hint: "With repeated measurements, corrections such as Greenhouse-Geisser may be needed.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "repeatedAnova" },
          { label: "No or ordinal", result: "friedman" }
        ]
      },
      twoWayAnovaAssumptions: {
        area: "Assumption",
        question: "Are normality within cells, homogeneity of variances, and independent observations plausible?",
        hint: "A factorial ANOVA tests main effects and interactions for two or more factors.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "twoWayAnova" },
          { label: "No or ordinal", result: "nonparametricTwoWayAnova" }
        ]
      },
      twoWayRepeatedAssumptions: {
        area: "Assumption",
        question: "Are metric measurements, suitable sphericity assumptions, and a balanced repeated-measures design plausible?",
        hint: "With two or more factors and repeated measurements, main effects, interactions, and sphericity corrections may matter.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "twoWayRepeatedAnova" },
          { label: "No or ordinal", result: "nonparametricTwoWayRepeatedAnova" }
        ]
      },
      ordinalGroups: {
        area: "Group design",
        question: "How are the ordinal measurements arranged?",
        hint: "Robust alternatives also differ between independent and paired data.",
        step: "Groups",
        answers: [
          { label: "Two independent groups", result: "mannWhitney" },
          { label: "Two paired measurements", result: "wilcoxon" },
          { label: "Several independent groups", result: "kruskalWallis" },
          { label: "Several paired measurements", result: "friedman" }
        ]
      },
      categoricalDesign: {
        area: "Categories",
        question: "How is the categorical question structured?",
        hint: "For frequencies and proportions, the number of variables, expected cell counts, and pairedness matter.",
        step: "Categories",
        answers: [
          { label: "Two independent categorical variables", result: "chiSquareAssociation" },
          { label: "Small expected counts in a 2x2 table", result: "fisher" },
          { label: "Two paired dichotomous measurements", result: "mcnemar" },
          { label: "Compare theoretical and empirical distribution for a two-level variable", result: "binomialTest" },
          { label: "Compare theoretical and empirical distribution for a multilevel variable", result: "chiSquareGoodness" }
        ]
      },
      predictionOutcome: {
        area: "Outcome variable",
        question: "What scale level does the outcome variable have?",
        hint: "The outcome variable determines the model family. Predictors can be metric or categorically coded.",
        step: "Outcome variable",
        answers: [
          { label: "Metric outcome variable", result: "linearRegression" },
          { label: "Dichotomous outcome variable", result: "logisticRegression" },
          { label: "Multicategory categorical outcome", result: "multinomialRegression" }
        ]
      }
    },
    results: {
      pearson: { title: "Pearson correlation", summary: "Suitable when two metric variables are tested for a linear relationship.", assumptions: ["Metric variables", "Linear relationship", "No dominant outliers", "For inference: approximate bivariate normality"] },
      spearman: { title: "Spearman rank correlation", summary: "A robust choice for ordinal variables or monotonic relationships without strict linearity.", assumptions: ["At least ordinal scale level", "Monotonic relationship", "Independent observations"] },
      kendall: { title: "Kendall's rank correlation", summary: "Rank-based correlation for ordinal variables or monotonic relationships, especially useful with small samples or many ties.", assumptions: ["At least ordinal scale level", "Monotonic relationship", "Independent observations", "Useful with ties or smaller samples"] },
      chiSquareAssociation: { title: "Chi-square test of independence", summary: "Tests whether two categorical variables are statistically associated.", assumptions: ["Categorical variables", "Independent observations", "Sufficient expected cell counts"] },
      logLinearModel: { title: "Log-linear model", summary: "Models associations and interactions among several nominal variables in a contingency table.", assumptions: ["Several nominal variables", "Frequency data in a contingency table", "Independent observations", "Sufficient expected cell counts"] },
      pathAnalysis: { title: "Path analysis (mediation)", summary: "Models directed relations among several observed variables, often to test direct, indirect, or mediated effects.", assumptions: ["All variables are observed/measurable", "Theoretically justified path direction", "Linear relationships", "Adequate sample size", "Causal interpretation only with a suitable design"] },
      structuralEquationModeling: { title: "Structural equation modeling (SEM)", summary: "Combines measurement models for latent variables with directed structural paths among latent and observed variables.", assumptions: ["Latent constructs measured by multiple indicators", "Theoretically justified measurement and structural model", "Adequate sample size", "Model fit and alternative models should be evaluated"] },
      confirmatoryFactorAnalysis: { title: "Confirmatory factor analysis (CFA)", summary: "Tests whether a theoretically predefined measurement model fits the observed indicators.", assumptions: ["Latent constructs are predefined", "Multiple indicators per factor", "The item-factor assignment is theoretically justified", "Adequate sample size", "Model fit and local misfit should be evaluated"] },
      discriminantAnalysis: { title: "Discriminant analysis", summary: "Classifies cases into nominal groups from several interval-scaled predictors and describes which variables separate the groups.", assumptions: ["Nominal dependent variable with known groups", "Interval-scaled independent variables", "Multivariate normality within groups", "Similar covariance matrices", "Adequate group sizes"] },
      oneSampleT: { title: "One-sample t-test", summary: "Compares the mean of one metric sample with a specified reference value.", assumptions: ["Metric variable", "Independent observations", "Approximate normal distribution"] },
      oneSampleZ: { title: "One-sample z-test", summary: "Compares the mean of one metric sample with a reference value when the population standard deviation or variance is known.", assumptions: ["Metric variable", "Independent observations", "Known population standard deviation or variance", "Normal population or sufficiently large sample"] },
      oneSampleWilcoxon: { title: "One-sample Wilcoxon signed-rank test", summary: "Nonparametric alternative when a median or rank pattern is tested against a reference value.", assumptions: ["At least ordinal data", "Symmetric differences helpful", "Independent observations"] },
      independentT: { title: "Independent-samples t-test", summary: "Compares the means of two independent groups with a metric outcome.", assumptions: ["Two independent groups", "Metric outcome variable", "Approximate normality", "Equal variances or Welch correction"] },
      mannWhitney: { title: "Mann-Whitney U test", summary: "Nonparametric alternative to the independent t-test for two independent groups.", assumptions: ["Two independent groups", "At least ordinal outcome", "Similar distribution shapes for location interpretation"] },
      pairedT: { title: "Paired-samples t-test", summary: "Compares two paired means, for example pre-post measurements.", assumptions: ["Two paired measurements", "Metric difference scores", "Approximate normality of differences"] },
      wilcoxon: { title: "Wilcoxon signed-rank test", summary: "Nonparametric choice for two paired measurements or ordinal paired comparisons.", assumptions: ["Two paired measurements", "At least ordinal values", "Pairing is present"] },
      anova: { title: "One-way ANOVA", summary: "Compares means across more than two independent groups.", assumptions: ["Independent groups", "Metric outcome variable", "Normality within groups", "Homogeneity of variances"] },
      ancova: { title: "ANCOVA", summary: "Compares groups on one metric dependent variable while controlling for one or more covariates.", assumptions: ["One metric dependent variable", "One or more categorical independent variables", "One or more metric covariates", "Linear relation between covariates and the dependent variable", "Homogeneity of regression slopes", "Normally distributed residuals and homogeneity of variance"] },
      manova: { title: "MANOVA", summary: "Compares groups on two or more related metric dependent variables simultaneously.", assumptions: ["Two or more metric dependent variables", "One or more categorical independent variables", "Independent observations", "Multivariate normality within groups", "Homogeneity of covariance matrices", "Meaningful correlations among dependent variables"] },
      mancova: { title: "MANCOVA", summary: "Compares groups on two or more related metric dependent variables while controlling for one or more covariates.", assumptions: ["Two or more metric dependent variables", "One or more categorical independent variables", "One or more metric covariates", "Linear relation between covariates and dependent variables", "Homogeneity of regression slopes", "Multivariate normality and homogeneity of covariance matrices"] },
      repeatedAnova: { title: "Repeated-measures ANOVA", summary: "Tests mean differences across several paired time points or conditions.", assumptions: ["Repeated measurements", "Metric outcome variable", "Sphericity or suitable correction"] },
      twoWayAnova: { title: "Factorial ANOVA (two or more factors)", summary: "Tests the main effects and interactions of two or more independent factors on a metric outcome variable.", assumptions: ["Two or more categorical independent factors", "Metric outcome variable", "Independent observations", "Normality within cells", "Homogeneity of variances"] },
      twoWayRepeatedAnova: { title: "Factorial repeated-measures ANOVA (two or more factors)", summary: "Tests main effects and interactions for two or more factors when at least one factor is measured within the same participants.", assumptions: ["At least one repeated-measures factor", "Metric outcome variable", "Sphericity or suitable correction", "Balanced assignment of time points or conditions"] },
      linearMixedModel: { title: "Linear mixed model", summary: "Models metric outcomes for repeated, nested, or clustered observations using fixed and random effects.", assumptions: ["Metric dependent variable", "Observations nested within people, teams, or measurement occasions", "Random effects are theoretically justified", "Check residual diagnostics and variance structure"] },
      generalizedLinearMixedModel: { title: "Generalized linear mixed model", summary: "Extends logistic or other generalized models to repeated, nested, or clustered data.", assumptions: ["Dichotomous, categorical, or count dependent variable", "Appropriate link function and distribution", "Clusters or persons entered as random effects", "Adequate events per parameter"] },
      ordinalMixedModel: { title: "Ordinal mixed model", summary: "Models ordinal outcomes with repeated or clustered observations, often using cumulative link models.", assumptions: ["Ordinal dependent variable", "Repeated or clustered observations", "Check proportional-odds assumption", "Random effects are theoretically justified"] },
      kruskalWallis: { title: "Kruskal-Wallis test", summary: "Nonparametric alternative to one-way ANOVA for several independent groups.", assumptions: ["Several independent groups", "At least ordinal outcome", "Independent observations"] },
      friedman: { title: "Friedman test", summary: "Nonparametric alternative to repeated-measures ANOVA for several paired conditions.", assumptions: ["Several paired measurements", "At least ordinal values", "Same cases in all conditions"] },
      nonparametricTwoWayAnova: { title: "Nonparametric factorial ANOVA (ART)", summary: "Robust alternative for factorial designs with two or more independent factors, commonly using the aligned-rank-transform approach.", assumptions: ["Two or more categorical independent factors", "At least ordinal outcome", "Independent observations", "Interactions tested on rank-transformed data"] },
      nonparametricTwoWayRepeatedAnova: { title: "Nonparametric factorial repeated-measures ANOVA (ART)", summary: "Robust alternative for factorial repeated-measures designs with two or more factors when parametric assumptions are not tenable.", assumptions: ["At least one repeated-measures factor", "At least ordinal outcome", "Same cases in paired conditions", "Interactions tested on rank-transformed data"] },
      fisher: { title: "Fisher's exact test", summary: "Tests associations in small 2x2 tables when chi-square assumptions are not met.", assumptions: ["Dichotomous categorical variables", "Independent observations", "Small expected counts"] },
      mcnemar: { title: "McNemar test", summary: "Compares two paired dichotomous measurements, such as pre-post categories.", assumptions: ["Two paired dichotomous measurements", "Paired data", "Discordant pairs are relevant"] },
      binomialTest: { title: "Binomial test", summary: "Tests whether the empirical frequency or proportion of a two-level variable differs from a theoretically expected probability.", assumptions: ["Two-level categorical variable", "Theoretically expected proportion is defined", "Independent observations", "Fixed number of trials or cases"] },
      chiSquareGoodness: { title: "Pearson chi-square (one-dimensional)", summary: "Tests whether the empirical frequency distribution of a multilevel categorical variable matches a theoretically expected distribution.", assumptions: ["Multilevel categorical variable", "Expected frequencies or proportions are defined", "Independent observations", "Sufficient expected counts per category"] },
      linearRegression: { title: "Linear regression", summary: "Models a metric outcome variable using one or more predictors; without a suitable design, it does not provide evidence of causality.", assumptions: ["Metric outcome variable", "Linear relationships", "Independent residuals", "Homoscedasticity and residual diagnostics", "Prediction or association, not causality by itself"] },
      logisticRegression: { title: "Binary logistic regression", summary: "Models the probability of a dichotomous outcome variable.", assumptions: ["Dichotomous outcome variable", "Independent observations", "No strong multicollinearity", "Sufficient number of events"] },
      multinomialRegression: { title: "Multinomial logistic regression", summary: "Models a categorical outcome variable with more than two categories.", assumptions: ["Multicategory categorical outcome", "Independent observations", "Meaningful reference category"] },
      factorAnalysis: { title: "Factor analysis", summary: "Exploratory procedure for reducing several correlated variables to a smaller set of latent factors or dimensions.", assumptions: ["Several metric or approximately metric variables", "Meaningful correlations among variables", "Adequate sample size", "Interpretable factor structure", "No a priori hypothesis about the relationships among the factors"] },
      networkAnalysis: { title: "Network analysis", summary: "Explores direct relations among several variables as a network of nodes and edges.", assumptions: ["Several metric or ordinal variables", "Edges are interpreted as conditional associations", "Adequate sample size", "Network stability and robustness should be checked", "No causal interpretation without a suitable design"] },
      clusterAnalysis: { title: "Cluster analysis", summary: "Exploratory procedure for grouping people or objects based on similarity.", assumptions: ["Features describing people or objects", "Appropriate scaling or standardisation", "Meaningful distance or similarity measure", "Cluster solution is substantively interpretable"] },
      multidimensionalScaling: { title: "Multidimensional scaling", summary: "Exploratory procedure for representing distances or dissimilarities among people or objects in a small number of dimensions.", assumptions: ["Distance or dissimilarity matrix", "People or objects are comparable", "Number of dimensions chosen using stress and interpretability", "Primarily an exploratory representation"] },
      chiSquareVariance: { title: "Chi-square test for one variance", summary: "Tests whether a sample variance differs from a known or theoretical population variance.", assumptions: ["One metric variable", "Known or theoretically justified population variance", "Independent observations", "Normality in the population"] },
      varianceFTest: { title: "F-test for comparing two variances", summary: "Compares whether the variances of two independent samples differ.", assumptions: ["Two independent samples", "Metric outcome variable", "Normality in both populations", "Sensitive to outliers and skew"] }
    }
  }
};

Object.assign(languagePacks, window.extraLanguagePacks || {});

const mlLanguageAdditions = {
  de: {
    goalUpdate: {
      question: "Was möchten Sie mit Ihren Daten tun?",
      hint: "Wählen Sie, ob Sie eine vorab formulierte Hypothese prüfen, explorativ Struktur entdecken oder ein Modell zur Vorhersage bzw. Klassifikation neuer Fälle trainieren möchten."
    },
    goalAnswer: { label: "Neue Fälle vorhersagen oder klassifizieren", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: {
        area: "Machine Learning",
        question: "Haben Sie eine bekannte Zielvariable in einem Trainingsdatensatz?",
        hint: "Supervised Learning benötigt bekannte Zielwerte. Ohne Zielvariable geht es eher um Dimensionsreduktion, Gruppierung oder Visualisierung von Strukturen.",
        step: "Lernziel",
        answers: [
          { label: "Ja, die Zielvariable ist bekannt", next: "mlOutcomeType" },
          { label: "Nein, ich möchte Muster ohne Zielvariable entdecken", next: "mlUnsupervisedGoal" }
        ]
      },
      mlOutcomeType: {
        area: "Zielvariable",
        question: "Welche Art von Zielvariable soll vorhergesagt werden?",
        hint: "Bei metrischen Zielvariablen geht es um Regression. Bei kategorialen Zielvariablen geht es um Klassifikation.",
        step: "Zielvariable",
        answers: [
          { label: "Metrische Zielvariable", next: "mlNumericModel" },
          { label: "Kategoriale Zielvariable", next: "mlClassificationModel" }
        ]
      },
      mlNumericModel: {
        area: "Regressionsmodell",
        question: "Welche Art von Vorhersagemodell passt am besten?",
        hint: "Starten Sie oft mit einem interpretierbaren Basismodell und vergleichen Sie flexiblere Modelle per Kreuzvalidierung.",
        step: "Modellwahl",
        answers: [
          { label: "Interpretierbares lineares Basismodell", result: "linearRegression" },
          { label: "Einfache nichtlineare Entscheidungsregeln", result: "decisionTreeRegression" },
          { label: "Stärkere Vorhersage mit vielen Prädiktoren", result: "randomForestRegression" },
          { label: "Vorhersage anhand ähnlicher Fälle", result: "knnRegression" }
        ]
      },
      mlClassificationModel: {
        area: "Klassifikationsmodell",
        question: "Welche Klassifikationslogik passt am besten?",
        hint: "Berichten Sie neben der Treffergenauigkeit immer auch Validierungsstrategie, Klassenverteilung und bei unbalancierten Klassen geeignete Kennwerte.",
        step: "Modellwahl",
        answers: [
          { label: "Dichotome Zielvariable mit interpretierbaren Odds Ratios", result: "logisticRegression" },
          { label: "Mehrstufige Zielvariable mit interpretierbarem Regressionsmodell", result: "multinomialRegression" },
          { label: "Transparente Wenn-dann-Regeln", result: "decisionTreeClassifier" },
          { label: "Robustes Modell mit besserer Vorhersageleistung", result: "randomForestClassifier" },
          { label: "Klassifikation anhand ähnlicher Fälle", result: "knnClassifier" },
          { label: "Schnelles Basismodell für viele einfache Merkmale", result: "naiveBayes" }
        ]
      },
      mlUnsupervisedGoal: {
        area: "Unsupervised Learning",
        question: "Welches explorative Ziel verfolgen Sie ohne bekannte Zielvariable?",
        hint: "Diese Verfahren suchen Struktur in Prädiktoren, ohne eine zuvor bekannte Zielvariable zu trainieren.",
        step: "Exploration",
        answers: [
          { label: "Viele Variablen auf wenige Komponenten reduzieren", result: "principalComponentAnalysis" },
          { label: "Ähnliche Personen oder Objekte gruppieren", result: "clusterAnalysis" },
          { label: "Distanzen zwischen Personen oder Objekten visualisieren", result: "multidimensionalScaling" }
        ]
      }
    },
    results: {
      decisionTreeRegression: { title: "Entscheidungsbaum-Regression", summary: "Sagt eine metrische Zielvariable mit interpretierbaren Wenn-dann-Regeln vorher.", assumptions: ["Metrische Zielvariable", "Trainings- und Testdaten oder Kreuzvalidierung", "Pruning oder Tiefenbegrenzung gegen Overfitting", "Prädiktoren sollten sinnvoll codiert sein"] },
      randomForestRegression: { title: "Random-Forest-Regression", summary: "Kombiniert viele Regressionsbäume, um robuste nichtlineare Vorhersagen für metrische Zielvariablen zu erzeugen.", assumptions: ["Metrische Zielvariable", "Genügend Fälle für Training und Validierung", "Tuning der Anzahl von Bäumen und Variablen pro Split", "Interpretation über variable importance oder partielle Effekte"] },
      knnRegression: { title: "k-Nearest-Neighbors-Regression", summary: "Sagt metrische Werte aus den ähnlichsten Fällen im Merkmalsraum vorher.", assumptions: ["Metrische Zielvariable", "Skalierte/standardisierte Prädiktoren", "Sinnvolle Distanzmetrik", "k per Validierung wählen"] },
      decisionTreeClassifier: { title: "Entscheidungsbaum-Klassifikation", summary: "Klassifiziert Fälle mit transparenten Entscheidungsregeln und eignet sich als gut erklärbares ML-Modell.", assumptions: ["Kategoriale Zielvariable", "Trainings- und Testdaten oder Kreuzvalidierung", "Pruning oder Tiefenbegrenzung gegen Overfitting", "Klassenverteilung prüfen"] },
      randomForestClassifier: { title: "Random-Forest-Klassifikation", summary: "Kombiniert viele Entscheidungsbäume für robuste Klassifikation, oft mit höherer Vorhersageleistung als ein einzelner Baum.", assumptions: ["Kategoriale Zielvariable", "Ausreichende Stichprobe", "Validierung an ungesehenen Daten", "Klassenungleichgewicht berücksichtigen"] },
      knnClassifier: { title: "k-Nearest-Neighbors-Klassifikation", summary: "Klassifiziert Fälle nach den Klassen der ähnlichsten Nachbarn.", assumptions: ["Kategoriale Zielvariable", "Skalierte/standardisierte Prädiktoren", "Sinnvolle Distanzmetrik", "k und Gewichtung per Validierung wählen"] },
      naiveBayes: { title: "Naive-Bayes-Klassifikation", summary: "Schnelles probabilistisches Basismodell für kategoriale Vorhersagen, besonders bei vielen einfachen Merkmalen.", assumptions: ["Kategoriale Zielvariable", "Prädiktoren werden bedingt unabhängig angenähert", "Geeignete Verteilung für metrische Merkmale", "Wahrscheinlichkeiten mit Validierungsdaten prüfen"] },
      principalComponentAnalysis: { title: "Hauptkomponentenanalyse (PCA)", summary: "Reduziert viele korrelierte metrische Variablen auf wenige Komponenten, die möglichst viel Varianz erklären.", assumptions: ["Mehrere metrische oder annähernd metrische Variablen", "Sinnvolle Korrelationen zwischen Variablen", "Standardisierung bei unterschiedlichen Skalen", "Komponenten nach Varianz und Interpretierbarkeit wählen"] }
    }
  },
  en: {
    goalUpdate: {
      question: "What do you want to do with your data?",
      hint: "Choose whether you want to test a predefined hypothesis, discover structure exploratively, or train a model to predict or classify new cases."
    },
    goalAnswer: { label: "Predict or classify new cases", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: {
        area: "Machine learning",
        question: "Do you have a known outcome variable in a training dataset?",
        hint: "Supervised learning needs known target values. Without an outcome variable, the goal is usually dimension reduction, grouping, or visualising structure.",
        step: "Learning goal",
        answers: [
          { label: "Yes, the outcome variable is known", next: "mlOutcomeType" },
          { label: "No, I want to discover patterns without an outcome variable", next: "mlUnsupervisedGoal" }
        ]
      },
      mlOutcomeType: {
        area: "Outcome variable",
        question: "What kind of outcome variable do you want to predict?",
        hint: "Metric outcomes lead to regression. Categorical outcomes lead to classification.",
        step: "Outcome variable",
        answers: [
          { label: "Metric outcome variable", next: "mlNumericModel" },
          { label: "Categorical outcome variable", next: "mlClassificationModel" }
        ]
      },
      mlNumericModel: {
        area: "Regression model",
        question: "Which kind of prediction model fits best?",
        hint: "A good workflow often starts with an interpretable baseline and compares flexible models using cross-validation.",
        step: "Model choice",
        answers: [
          { label: "Interpretable linear baseline", result: "linearRegression" },
          { label: "Simple nonlinear decision rules", result: "decisionTreeRegression" },
          { label: "Stronger prediction with many predictors", result: "randomForestRegression" },
          { label: "Prediction from similar cases", result: "knnRegression" }
        ]
      },
      mlClassificationModel: {
        area: "Classification model",
        question: "Which classification logic fits best?",
        hint: "Alongside accuracy, report the validation strategy, class distribution, and suitable metrics for imbalanced classes.",
        step: "Model choice",
        answers: [
          { label: "Binary outcome with interpretable odds ratios", result: "logisticRegression" },
          { label: "Multicategory outcome with an interpretable regression model", result: "multinomialRegression" },
          { label: "Transparent if-then rules", result: "decisionTreeClassifier" },
          { label: "Robust model with stronger predictive performance", result: "randomForestClassifier" },
          { label: "Classification from similar cases", result: "knnClassifier" },
          { label: "Fast baseline for many simple features", result: "naiveBayes" }
        ]
      },
      mlUnsupervisedGoal: {
        area: "Unsupervised learning",
        question: "What exploratory goal do you have without a known outcome variable?",
        hint: "These procedures search for structure in predictors without training against a known target.",
        step: "Exploration",
        answers: [
          { label: "Reduce many variables to a few components", result: "principalComponentAnalysis" },
          { label: "Group similar people or objects", result: "clusterAnalysis" },
          { label: "Visualise distances between people or objects", result: "multidimensionalScaling" }
        ]
      }
    },
    results: {
      decisionTreeRegression: { title: "Decision tree regression", summary: "Predicts a metric outcome using interpretable if-then decision rules.", assumptions: ["Metric outcome variable", "Training/test split or cross-validation", "Pruning or depth control to reduce overfitting", "Predictors are meaningfully coded"] },
      randomForestRegression: { title: "Random forest regression", summary: "Combines many regression trees to produce robust nonlinear predictions for metric outcomes.", assumptions: ["Metric outcome variable", "Enough cases for training and validation", "Tune number of trees and variables per split", "Interpret with variable importance or partial effects"] },
      knnRegression: { title: "k-nearest neighbors regression", summary: "Predicts metric values from the most similar cases in the feature space.", assumptions: ["Metric outcome variable", "Scaled/standardised predictors", "Meaningful distance metric", "Choose k using validation"] },
      decisionTreeClassifier: { title: "Decision tree classifier", summary: "Classifies cases with transparent decision rules and is useful when interpretability matters.", assumptions: ["Categorical outcome variable", "Training/test split or cross-validation", "Pruning or depth control to reduce overfitting", "Inspect class distribution"] },
      randomForestClassifier: { title: "Random forest classifier", summary: "Combines many decision trees for robust classification, often with stronger prediction than a single tree.", assumptions: ["Categorical outcome variable", "Adequate sample size", "Validation on unseen data", "Handle class imbalance"] },
      knnClassifier: { title: "k-nearest neighbors classifier", summary: "Classifies cases according to the classes of their most similar neighbors.", assumptions: ["Categorical outcome variable", "Scaled/standardised predictors", "Meaningful distance metric", "Choose k and weighting using validation"] },
      naiveBayes: { title: "Naive Bayes classifier", summary: "Fast probabilistic baseline for categorical prediction, especially with many simple features.", assumptions: ["Categorical outcome variable", "Predictors are treated as approximately conditionally independent", "Suitable distribution for metric features", "Check predicted probabilities with validation data"] },
      principalComponentAnalysis: { title: "Principal component analysis (PCA)", summary: "Reduces many correlated metric variables to a smaller set of components that explain as much variance as possible.", assumptions: ["Several metric or approximately metric variables", "Meaningful correlations among variables", "Standardise variables on different scales", "Choose components by explained variance and interpretability"] }
    }
  },
  fr: {
    goalUpdate: {
      question: "Que voulez-vous faire avec vos données ?",
      hint: "Choisissez si vous voulez tester une hypothèse prédéfinie, découvrir une structure de façon exploratoire ou entraîner un modèle pour prédire ou classer de nouveaux cas."
    },
    goalAnswer: { label: "Prédire ou classer de nouveaux cas", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: { area: "Apprentissage automatique", question: "Avez-vous une variable cible connue dans un jeu d'entraînement ?", hint: "L'apprentissage supervisé nécessite des valeurs cibles connues. Sans variable cible, l'objectif est plutôt de réduire les dimensions, regrouper ou visualiser une structure.", step: "Objectif d'apprentissage", answers: [{ label: "Oui, la variable cible est connue", next: "mlOutcomeType" }, { label: "Non, je veux découvrir des motifs sans variable cible", next: "mlUnsupervisedGoal" }] },
      mlOutcomeType: { area: "Variable cible", question: "Quel type de variable cible voulez-vous prédire ?", hint: "Les variables cibles métriques mènent à la régression. Les variables cibles catégorielles mènent à la classification.", step: "Variable cible", answers: [{ label: "Variable cible métrique", next: "mlNumericModel" }, { label: "Variable cible catégorielle", next: "mlClassificationModel" }] },
      mlNumericModel: { area: "Modèle de régression", question: "Quel type de modèle de prédiction convient le mieux ?", hint: "Un bon flux commence souvent par un modèle de base interprétable et compare des modèles plus flexibles par validation croisée.", step: "Choix du modèle", answers: [{ label: "Modèle linéaire de base interprétable", result: "linearRegression" }, { label: "Règles de décision non linéaires simples", result: "decisionTreeRegression" }, { label: "Prédiction plus forte avec de nombreux prédicteurs", result: "randomForestRegression" }, { label: "Prédiction à partir de cas similaires", result: "knnRegression" }] },
      mlClassificationModel: { area: "Modèle de classification", question: "Quelle logique de classification convient le mieux ?", hint: "En plus de l'exactitude, rapportez la stratégie de validation, la distribution des classes et des métriques adaptées aux classes déséquilibrées.", step: "Choix du modèle", answers: [{ label: "Variable binaire avec odds ratios interprétables", result: "logisticRegression" }, { label: "Variable multicatégorielle avec modèle de régression interprétable", result: "multinomialRegression" }, { label: "Règles si-alors transparentes", result: "decisionTreeClassifier" }, { label: "Modèle robuste avec meilleure performance prédictive", result: "randomForestClassifier" }, { label: "Classification à partir de cas similaires", result: "knnClassifier" }, { label: "Modèle de base rapide pour de nombreuses caractéristiques simples", result: "naiveBayes" }] },
      mlUnsupervisedGoal: { area: "Apprentissage non supervisé", question: "Quel objectif exploratoire avez-vous sans variable cible connue ?", hint: "Ces procédures cherchent une structure dans les prédicteurs sans entraînement sur une cible connue.", step: "Exploration", answers: [{ label: "Réduire de nombreuses variables à quelques composantes", result: "principalComponentAnalysis" }, { label: "Regrouper des personnes ou des objets similaires", result: "clusterAnalysis" }, { label: "Visualiser les distances entre personnes ou objets", result: "multidimensionalScaling" }] }
    },
    results: {
      decisionTreeRegression: { title: "Régression par arbre de décision", summary: "Prédit une variable cible métrique avec des règles de décision si-alors interprétables.", assumptions: ["Variable cible métrique", "Découpage entraînement/test ou validation croisée", "Élagage ou limitation de profondeur pour réduire le surapprentissage", "Prédicteurs codés de manière pertinente"] },
      randomForestRegression: { title: "Régression par forêt aléatoire", summary: "Combine de nombreux arbres de régression pour produire des prédictions non linéaires robustes.", assumptions: ["Variable cible métrique", "Nombre de cas suffisant pour entraînement et validation", "Régler le nombre d'arbres et de variables par division", "Interpréter avec importance des variables ou effets partiels"] },
      knnRegression: { title: "Régression k plus proches voisins", summary: "Prédit des valeurs métriques à partir des cas les plus similaires dans l'espace des caractéristiques.", assumptions: ["Variable cible métrique", "Prédicteurs mis à l'échelle/standardisés", "Mesure de distance pertinente", "Choisir k par validation"] },
      decisionTreeClassifier: { title: "Classificateur par arbre de décision", summary: "Classe les cas avec des règles transparentes lorsque l'interprétabilité est importante.", assumptions: ["Variable cible catégorielle", "Découpage entraînement/test ou validation croisée", "Élagage ou limitation de profondeur", "Examiner la distribution des classes"] },
      randomForestClassifier: { title: "Classificateur par forêt aléatoire", summary: "Combine de nombreux arbres pour une classification robuste, souvent plus performante qu'un seul arbre.", assumptions: ["Variable cible catégorielle", "Taille d'échantillon suffisante", "Validation sur des données non vues", "Tenir compte du déséquilibre des classes"] },
      knnClassifier: { title: "Classificateur k plus proches voisins", summary: "Classe les cas selon les classes de leurs voisins les plus similaires.", assumptions: ["Variable cible catégorielle", "Prédicteurs mis à l'échelle/standardisés", "Mesure de distance pertinente", "Choisir k et la pondération par validation"] },
      naiveBayes: { title: "Classificateur naïf bayésien", summary: "Modèle probabiliste rapide pour la prédiction catégorielle, surtout avec de nombreuses caractéristiques simples.", assumptions: ["Variable cible catégorielle", "Indépendance conditionnelle approximative des prédicteurs", "Distribution adaptée pour les variables métriques", "Vérifier les probabilités prédites avec des données de validation"] },
      principalComponentAnalysis: { title: "Analyse en composantes principales (ACP)", summary: "Réduit de nombreuses variables métriques corrélées à quelques composantes expliquant un maximum de variance.", assumptions: ["Plusieurs variables métriques ou approximativement métriques", "Corrélations pertinentes entre variables", "Standardiser les variables sur des échelles différentes", "Choisir les composantes selon variance expliquée et interprétabilité"] }
    }
  },
  es: {
    goalUpdate: {
      question: "¿Qué desea hacer con sus datos?",
      hint: "Elija si quiere probar una hipótesis predefinida, descubrir estructura de forma exploratoria o entrenar un modelo para predecir o clasificar nuevos casos."
    },
    goalAnswer: { label: "Predecir o clasificar nuevos casos", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: { area: "Aprendizaje automático", question: "¿Tiene una variable objetivo conocida en un conjunto de entrenamiento?", hint: "El aprendizaje supervisado necesita valores objetivo conocidos. Sin variable objetivo, el objetivo suele ser reducir dimensiones, agrupar o visualizar estructura.", step: "Objetivo de aprendizaje", answers: [{ label: "Sí, la variable objetivo es conocida", next: "mlOutcomeType" }, { label: "No, quiero descubrir patrones sin variable objetivo", next: "mlUnsupervisedGoal" }] },
      mlOutcomeType: { area: "Variable objetivo", question: "¿Qué tipo de variable objetivo quiere predecir?", hint: "Los objetivos métricos conducen a regresión. Los objetivos categóricos conducen a clasificación.", step: "Variable objetivo", answers: [{ label: "Variable objetivo métrica", next: "mlNumericModel" }, { label: "Variable objetivo categórica", next: "mlClassificationModel" }] },
      mlNumericModel: { area: "Modelo de regresión", question: "¿Qué tipo de modelo predictivo encaja mejor?", hint: "Un buen flujo suele empezar con una línea base interpretable y comparar modelos flexibles mediante validación cruzada.", step: "Elección del modelo", answers: [{ label: "Línea base lineal interpretable", result: "linearRegression" }, { label: "Reglas de decisión no lineales simples", result: "decisionTreeRegression" }, { label: "Predicción más fuerte con muchos predictores", result: "randomForestRegression" }, { label: "Predicción a partir de casos similares", result: "knnRegression" }] },
      mlClassificationModel: { area: "Modelo de clasificación", question: "¿Qué lógica de clasificación encaja mejor?", hint: "Además de la exactitud, reporte la estrategia de validación, la distribución de clases y métricas adecuadas para clases desbalanceadas.", step: "Elección del modelo", answers: [{ label: "Variable binaria con odds ratios interpretables", result: "logisticRegression" }, { label: "Variable multicategórica con modelo de regresión interpretable", result: "multinomialRegression" }, { label: "Reglas transparentes si-entonces", result: "decisionTreeClassifier" }, { label: "Modelo robusto con mayor rendimiento predictivo", result: "randomForestClassifier" }, { label: "Clasificación a partir de casos similares", result: "knnClassifier" }, { label: "Línea base rápida para muchas características simples", result: "naiveBayes" }] },
      mlUnsupervisedGoal: { area: "Aprendizaje no supervisado", question: "¿Qué objetivo exploratorio tiene sin una variable objetivo conocida?", hint: "Estos procedimientos buscan estructura en los predictores sin entrenar contra un objetivo conocido.", step: "Exploración", answers: [{ label: "Reducir muchas variables a pocos componentes", result: "principalComponentAnalysis" }, { label: "Agrupar personas u objetos similares", result: "clusterAnalysis" }, { label: "Visualizar distancias entre personas u objetos", result: "multidimensionalScaling" }] }
    },
    results: {
      decisionTreeRegression: { title: "Regresión con árbol de decisión", summary: "Predice una variable objetivo métrica mediante reglas si-entonces interpretables.", assumptions: ["Variable objetivo métrica", "División entrenamiento/prueba o validación cruzada", "Poda o control de profundidad contra sobreajuste", "Predictores codificados de forma significativa"] },
      randomForestRegression: { title: "Regresión con bosque aleatorio", summary: "Combina muchos árboles de regresión para predicciones no lineales robustas.", assumptions: ["Variable objetivo métrica", "Casos suficientes para entrenamiento y validación", "Ajustar número de árboles y variables por división", "Interpretar con importancia de variables o efectos parciales"] },
      knnRegression: { title: "Regresión k vecinos más cercanos", summary: "Predice valores métricos a partir de los casos más similares en el espacio de características.", assumptions: ["Variable objetivo métrica", "Predictores escalados/estandarizados", "Métrica de distancia significativa", "Elegir k mediante validación"] },
      decisionTreeClassifier: { title: "Clasificador con árbol de decisión", summary: "Clasifica casos con reglas transparentes cuando la interpretabilidad importa.", assumptions: ["Variable objetivo categórica", "División entrenamiento/prueba o validación cruzada", "Poda o control de profundidad", "Revisar distribución de clases"] },
      randomForestClassifier: { title: "Clasificador con bosque aleatorio", summary: "Combina muchos árboles para una clasificación robusta, a menudo más predictiva que un solo árbol.", assumptions: ["Variable objetivo categórica", "Tamaño muestral adecuado", "Validación en datos no vistos", "Manejar desbalance de clases"] },
      knnClassifier: { title: "Clasificador k vecinos más cercanos", summary: "Clasifica casos según las clases de sus vecinos más similares.", assumptions: ["Variable objetivo categórica", "Predictores escalados/estandarizados", "Métrica de distancia significativa", "Elegir k y ponderación mediante validación"] },
      naiveBayes: { title: "Clasificador naive Bayes", summary: "Línea base probabilística rápida para predicción categórica, especialmente con muchas características simples.", assumptions: ["Variable objetivo categórica", "Independencia condicional aproximada entre predictores", "Distribución adecuada para variables métricas", "Comprobar probabilidades predichas con datos de validación"] },
      principalComponentAnalysis: { title: "Análisis de componentes principales (PCA)", summary: "Reduce muchas variables métricas correlacionadas a pocos componentes que explican la mayor varianza posible.", assumptions: ["Varias variables métricas o aproximadamente métricas", "Correlaciones significativas entre variables", "Estandarizar variables con escalas distintas", "Elegir componentes por varianza explicada e interpretabilidad"] }
    }
  },
  it: {
    goalUpdate: {
      question: "Che cosa vuoi fare con i tuoi dati?",
      hint: "Scegli se vuoi testare un'ipotesi predefinita, scoprire strutture in modo esplorativo oppure addestrare un modello per predire o classificare nuovi casi."
    },
    goalAnswer: { label: "Predire o classificare nuovi casi", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: { area: "Machine learning", question: "Hai una variabile esito nota in un dataset di training?", hint: "L'apprendimento supervisionato richiede valori esito noti. Senza variabile esito, l'obiettivo è di solito ridurre dimensioni, raggruppare o visualizzare strutture.", step: "Obiettivo di apprendimento", answers: [{ label: "Sì, la variabile esito è nota", next: "mlOutcomeType" }, { label: "No, voglio scoprire pattern senza variabile esito", next: "mlUnsupervisedGoal" }] },
      mlOutcomeType: { area: "Variabile esito", question: "Che tipo di variabile esito vuoi predire?", hint: "Gli esiti metrici portano alla regressione. Gli esiti categoriali portano alla classificazione.", step: "Variabile esito", answers: [{ label: "Variabile esito metrica", next: "mlNumericModel" }, { label: "Variabile esito categoriale", next: "mlClassificationModel" }] },
      mlNumericModel: { area: "Modello di regressione", question: "Quale tipo di modello predittivo è più adatto?", hint: "Un buon flusso inizia spesso con una baseline interpretabile e confronta modelli flessibili con validazione incrociata.", step: "Scelta del modello", answers: [{ label: "Baseline lineare interpretabile", result: "linearRegression" }, { label: "Regole decisionali non lineari semplici", result: "decisionTreeRegression" }, { label: "Predizione più forte con molti predittori", result: "randomForestRegression" }, { label: "Predizione da casi simili", result: "knnRegression" }] },
      mlClassificationModel: { area: "Modello di classificazione", question: "Quale logica di classificazione è più adatta?", hint: "Oltre all'accuratezza, riporta strategia di validazione, distribuzione delle classi e metriche adatte per classi sbilanciate.", step: "Scelta del modello", answers: [{ label: "Esito binario con odds ratio interpretabili", result: "logisticRegression" }, { label: "Esito multicategoriale con modello di regressione interpretabile", result: "multinomialRegression" }, { label: "Regole trasparenti se-allora", result: "decisionTreeClassifier" }, { label: "Modello robusto con prestazione predittiva più forte", result: "randomForestClassifier" }, { label: "Classificazione da casi simili", result: "knnClassifier" }, { label: "Baseline rapida per molte caratteristiche semplici", result: "naiveBayes" }] },
      mlUnsupervisedGoal: { area: "Apprendimento non supervisionato", question: "Quale obiettivo esplorativo hai senza una variabile esito nota?", hint: "Queste procedure cercano struttura nei predittori senza training su un esito noto.", step: "Esplorazione", answers: [{ label: "Ridurre molte variabili a poche componenti", result: "principalComponentAnalysis" }, { label: "Raggruppare persone o oggetti simili", result: "clusterAnalysis" }, { label: "Visualizzare distanze tra persone o oggetti", result: "multidimensionalScaling" }] }
    },
    results: {
      decisionTreeRegression: { title: "Regressione con albero decisionale", summary: "Predice una variabile esito metrica usando regole decisionali se-allora interpretabili.", assumptions: ["Variabile esito metrica", "Split training/test o validazione incrociata", "Potatura o controllo della profondità contro overfitting", "Predittori codificati in modo significativo"] },
      randomForestRegression: { title: "Regressione random forest", summary: "Combina molti alberi di regressione per produrre predizioni non lineari robuste.", assumptions: ["Variabile esito metrica", "Casi sufficienti per training e validazione", "Regolare numero di alberi e variabili per split", "Interpretare con importanza delle variabili o effetti parziali"] },
      knnRegression: { title: "Regressione k-nearest neighbors", summary: "Predice valori metrici dai casi più simili nello spazio delle caratteristiche.", assumptions: ["Variabile esito metrica", "Predittori scalati/standardizzati", "Metrica di distanza significativa", "Scegliere k con validazione"] },
      decisionTreeClassifier: { title: "Classificatore ad albero decisionale", summary: "Classifica casi con regole trasparenti quando l'interpretabilità è importante.", assumptions: ["Variabile esito categoriale", "Split training/test o validazione incrociata", "Potatura o controllo della profondità", "Controllare distribuzione delle classi"] },
      randomForestClassifier: { title: "Classificatore random forest", summary: "Combina molti alberi per una classificazione robusta, spesso più predittiva di un singolo albero.", assumptions: ["Variabile esito categoriale", "Dimensione campionaria adeguata", "Validazione su dati non visti", "Gestire classi sbilanciate"] },
      knnClassifier: { title: "Classificatore k-nearest neighbors", summary: "Classifica casi secondo le classi dei vicini più simili.", assumptions: ["Variabile esito categoriale", "Predittori scalati/standardizzati", "Metrica di distanza significativa", "Scegliere k e pesatura con validazione"] },
      naiveBayes: { title: "Classificatore naive Bayes", summary: "Baseline probabilistica rapida per predizione categoriale, soprattutto con molte caratteristiche semplici.", assumptions: ["Variabile esito categoriale", "Indipendenza condizionale approssimata tra predittori", "Distribuzione adatta per caratteristiche metriche", "Controllare probabilità predette con dati di validazione"] },
      principalComponentAnalysis: { title: "Analisi delle componenti principali (PCA)", summary: "Riduce molte variabili metriche correlate a poche componenti che spiegano quanta più varianza possibile.", assumptions: ["Più variabili metriche o approssimativamente metriche", "Correlazioni significative tra variabili", "Standardizzare variabili su scale diverse", "Scegliere componenti per varianza spiegata e interpretabilità"] }
    }
  }
};

Object.entries(mlLanguageAdditions).forEach(([language, addition]) => {
  const pack = languagePacks[language];
  if (!pack) return;
  Object.assign(pack.tree.goal, addition.goalUpdate);
  if (!pack.tree.goal.answers.some((answer) => answer.next === addition.goalAnswer.next)) {
    pack.tree.goal.answers.push(addition.goalAnswer);
  }
  Object.assign(pack.tree, addition.tree);
  Object.assign(pack.results, addition.results);
});

const metaLanguageAdditions = {
  de: {
    goalUpdate: {
      question: "Was möchten Sie mit Ihren Daten tun?",
      hint: "Wählen Sie, ob Sie eine einzelne Studie analysieren, explorativ Struktur entdecken, neue Fälle vorhersagen oder mehrere Studien/ Effektgrößen zusammenfassen möchten."
    },
    goalAnswer: { label: "Mehrere Studien oder Effektgrößen zusammenfassen", next: "metaEffectType" },
    tree: {
      metaEffectType: {
        area: "Meta-Analyse",
        question: "Welche Informationen liegen aus Ihren Studien vor?",
        hint: "Wählen Sie das Datenformat anhand der Kennwerte, die Sie aus den Primärstudien extrahiert haben.",
        step: "Eingabeformat",
        answers: [
          { label: "Odds-Ratio-Meta-Analyse", result: "metaOddsRatioAnalysis" },
          { label: "Korrelationskoeffizienten", result: "metaCorrelationAnalysis" },
          { label: "Mittelwertsunterschiede aus n, M und SD", result: "metaMeanDifferenceAnalysis" },
          { label: "Berechnete Effektgrößen mit Stichprobenvarianzen oder Standardfehlern", result: "metaEffectSizeAnalysis" },
          { label: "Anteile/Proportionen aus Ereignishäufigkeit und Gesamtstichprobe", result: "metaProportionAnalysis" }
        ]
      },
      metaHeterogeneity: {
        area: "Heterogenität",
        question: "Ist zwischen den Studien relevante Heterogenität zu erwarten?",
        hint: "Unterschiede in Stichproben, Interventionen, Messinstrumenten oder Studiendesigns sprechen meist für ein Random-Effects-Modell.",
        step: "Modelltyp",
        answers: [
          { label: "Kaum Heterogenität und sehr ähnliche Studien", result: "fixedEffectMetaAnalysis" },
          { label: "Moderate oder hohe Heterogenität erwartet", next: "metaPurpose" }
        ]
      },
      metaPurpose: {
        area: "Zusatzfrage",
        question: "Möchten Sie Heterogenität erklären oder Bias prüfen?",
        hint: "Nach dem gepoolten Effekt können Subgruppen, kontinuierliche Moderatoren oder Small-Study-Effekte geprüft werden.",
        step: "Zusatzanalyse",
        answers: [
          { label: "Nein, gepoolten Gesamteffekt berichten", result: "randomEffectsMetaAnalysis" },
          { label: "Kategoriale Subgruppen vergleichen", result: "subgroupMetaAnalysis" },
          { label: "Kontinuierliche Moderatoren prüfen", result: "metaRegression" },
          { label: "Publikationsbias oder Small-Study-Effekte prüfen", result: "publicationBiasDiagnostics" }
        ]
      }
    },
    results: {
      metaOddsRatioAnalysis: { title: "Odds-Ratio-Meta-Analyse", summary: "Synthetisiert Odds Ratios aus Ereignishäufigkeiten und Gruppengrößen über mehrere Studien.", assumptions: ["Mehrere unabhängige Studien", "Ereignisse und Gesamtstichprobengröße pro Gruppe verfügbar", "Moderator und Study Label können ergänzt werden", "Fixed/Random Effects, Moderatoranalysen und Publikationsbias-Prüfung in den Modelloptionen festlegen"] },
      metaCorrelationAnalysis: { title: "Korrelations-Meta-Analyse", summary: "Synthetisiert Korrelationskoeffizienten aus mehreren Studien.", assumptions: ["Korrelation und Stichprobengröße pro Studie verfügbar", "Studien messen vergleichbare Konstrukte", "Moderator und Study Label können ergänzt werden", "Fixed/Random Effects, Moderatoranalysen und Publikationsbias-Prüfung in den Modelloptionen festlegen"] },
      metaMeanDifferenceAnalysis: { title: "Meta-Analyse von Mittelwertsunterschieden", summary: "Synthetisiert Gruppenunterschiede aus n, Mittelwert und Standardabweichung.", assumptions: ["n, M und SD pro Gruppe verfügbar", "Gruppen und Messskalen sind vergleichbar", "Moderator und Study Label können ergänzt werden", "Fixed/Random Effects, Moderatoranalysen und Publikationsbias-Prüfung in den Modelloptionen festlegen"] },
      metaEffectSizeAnalysis: { title: "Effektgrößen-Meta-Analyse", summary: "Synthetisiert bereits berechnete Effektgrößen mit Varianz oder Standardfehler.", assumptions: ["Effektgröße pro Studie verfügbar", "Varianz oder Standardfehler pro Effektgröße verfügbar", "Moderator und Study Label können ergänzt werden", "Fixed/Random Effects, Moderatoranalysen und Publikationsbias-Prüfung in den Modelloptionen festlegen"] },
      metaProportionAnalysis: { title: "Proportions-Meta-Analyse", summary: "Synthetisiert Anteile aus Ereignishäufigkeiten und Gesamtstichproben.", assumptions: ["Ereignishäufigkeit pro Studie verfügbar", "Gesamtstichprobengröße pro Studie verfügbar", "Moderator und Study Label können ergänzt werden", "Fixed/Random Effects, Moderatoranalysen und Publikationsbias-Prüfung in den Modelloptionen festlegen"] },
      majorMetaAnalysis: { title: "Meta-Analyse", summary: "Synthetisiert mehrere Studien mit der passenden Eingabeoption. Fixed- oder Random-Effects-Modell, Moderatoranalysen und Publikationsbias-Diagnostik werden anschließend in den Modelloptionen ausgewählt.", assumptions: ["Mehrere unabhängige Studien oder Effektgrößen", "Passende Eingabedaten für die gewählte Option", "Fixed vs. Random Effects anhand von Studiendesign und Heterogenität begründen", "Moderatoranalysen und Publikationsbias-Prüfungen als optionale Zusatzanalysen berichten"] },
      fixedEffectMetaAnalysis: { title: "Fixed-Effect-Meta-Analyse", summary: "Schätzt einen gemeinsamen Effekt unter der Annahme, dass alle Studien denselben wahren Effekt teilen.", assumptions: ["Mehrere unabhängige Studien oder Effektgrößen", "Gemeinsame Effektgröße und Standardfehler/Varianz verfügbar", "Studien sind inhaltlich sehr ähnlich", "Heterogenität ist gering"] },
      randomEffectsMetaAnalysis: { title: "Random-Effects-Meta-Analyse", summary: "Schätzt einen mittleren Effekt, wenn wahre Effekte zwischen Studien variieren können.", assumptions: ["Mehrere unabhängige Studien oder Effektgrößen", "Effektgröße und Präzisionsmaß verfügbar", "Zwischenstudienvarianz wird geschätzt", "Heterogenität wird mit tau2/I2 berichtet"] },
      subgroupMetaAnalysis: { title: "Subgruppen-Meta-Analyse", summary: "Vergleicht gepoolte Effekte zwischen kategorial definierten Studiengruppen.", assumptions: ["Subgruppen vorab begründet", "Ausreichend Studien pro Subgruppe", "Gleiche Effektmetrik", "Subgruppenvergleiche vorsichtig interpretieren"] },
      metaRegression: { title: "Meta-Regression", summary: "Prüft, ob kontinuierliche oder mehrere Moderatorvariablen Unterschiede zwischen Studien erklären.", assumptions: ["Ausreichend viele Studien", "Moderator auf Studienebene gemessen", "Gleiche Effektmetrik", "Ökologische Interpretation beachten"] },
      publicationBiasDiagnostics: { title: "Publikationsbias-Diagnostik", summary: "Prüft Funnel-Plot-Asymmetrie und Small-Study-Effekte als Hinweis auf mögliche Verzerrungen.", assumptions: ["Genügend Studien für sinnvolle Diagnostik", "Vergleichbare Effektmetrik", "Asymmetrie kann mehrere Ursachen haben", "Diagnostik nicht als Beweis für Bias interpretieren"] }
    }
  },
  en: {
    goalUpdate: {
      question: "What do you want to do with your data?",
      hint: "Choose whether you want to analyse one study, discover structure exploratively, predict new cases, or synthesize several studies/effect sizes."
    },
    goalAnswer: { label: "Synthesize several studies or effect sizes", next: "metaEffectType" },
    tree: {
      metaEffectType: {
        area: "Meta-analysis",
        question: "Which information is available from your studies?",
        hint: "Choose the data format based on the statistics you extracted from the primary studies.",
        step: "Input format",
        answers: [
          { label: "Odds-ratio meta-analysis", result: "metaOddsRatioAnalysis" },
          { label: "Correlation coefficients", result: "metaCorrelationAnalysis" },
          { label: "Mean differences from n, M, and SD", result: "metaMeanDifferenceAnalysis" },
          { label: "Effect sizes with sampling variances or standard errors", result: "metaEffectSizeAnalysis" },
          { label: "Proportions from event frequency and total sample size", result: "metaProportionAnalysis" }
        ]
      },
      metaHeterogeneity: {
        area: "Heterogeneity",
        question: "Do you expect meaningful heterogeneity between studies?",
        hint: "Differences in samples, interventions, instruments, or designs usually favor a random-effects model.",
        step: "Model type",
        answers: [
          { label: "Little heterogeneity and very similar studies", result: "fixedEffectMetaAnalysis" },
          { label: "Moderate or high heterogeneity expected", next: "metaPurpose" }
        ]
      },
      metaPurpose: {
        area: "Follow-up question",
        question: "Do you want to explain heterogeneity or inspect bias?",
        hint: "After the pooled effect, you may inspect subgroups, continuous moderators, or small-study effects.",
        step: "Additional analysis",
        answers: [
          { label: "No, report the pooled overall effect", result: "randomEffectsMetaAnalysis" },
          { label: "Compare categorical subgroups", result: "subgroupMetaAnalysis" },
          { label: "Test continuous moderators", result: "metaRegression" },
          { label: "Inspect publication bias or small-study effects", result: "publicationBiasDiagnostics" }
        ]
      }
    },
    results: {
      metaOddsRatioAnalysis: { title: "Odds-ratio meta-analysis", summary: "Synthesizes odds ratios from event counts and group sizes across studies.", assumptions: ["Several independent studies", "Events and total sample size available for each group", "Moderator and Study Label can be added", "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options"] },
      metaCorrelationAnalysis: { title: "Correlation-coefficient meta-analysis", summary: "Synthesizes correlation coefficients from several studies.", assumptions: ["Correlation and sample size available for each study", "Studies measure comparable constructs", "Moderator and Study Label can be added", "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options"] },
      metaMeanDifferenceAnalysis: { title: "Mean-difference meta-analysis", summary: "Synthesizes group differences from n, mean, and standard deviation.", assumptions: ["n, M, and SD available for each group", "Groups and measurement scales are comparable", "Moderator and Study Label can be added", "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options"] },
      metaEffectSizeAnalysis: { title: "Effect-size meta-analysis", summary: "Synthesizes already computed effect sizes with their variance or standard error.", assumptions: ["Effect size available for each study", "Variance or standard error available for each effect size", "Moderator and Study Label can be added", "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options"] },
      metaProportionAnalysis: { title: "Proportion meta-analysis", summary: "Synthesizes proportions from event frequencies/counts and total sample sizes.", assumptions: ["Event frequency/count available for each study", "Total sample size available for each study", "Moderator and Study Label can be added", "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options"] },
      majorMetaAnalysis: { title: "Meta-analysis", summary: "Synthesizes several studies with the appropriate input option. The fixed- or random-effects model, moderator analyses, and publication-bias diagnostics are then chosen in the model options.", assumptions: ["Several independent studies or effect sizes", "Input data match the selected option", "Justify fixed vs. random effects from study design and heterogeneity", "Report moderator analyses and publication-bias checks as optional follow-up analyses"] },
      fixedEffectMetaAnalysis: { title: "Fixed-effect meta-analysis", summary: "Estimates one common effect under the assumption that all studies share the same true effect.", assumptions: ["Several independent studies or effect sizes", "Common effect size and standard error/variance available", "Studies are substantively very similar", "Heterogeneity is low"] },
      randomEffectsMetaAnalysis: { title: "Random-effects meta-analysis", summary: "Estimates an average effect when true effects may vary between studies.", assumptions: ["Several independent studies or effect sizes", "Effect size and precision measure available", "Between-study variance is estimated", "Heterogeneity is reported with tau2/I2"] },
      subgroupMetaAnalysis: { title: "Subgroup meta-analysis", summary: "Compares pooled effects between categorically defined groups of studies.", assumptions: ["Subgroups justified in advance", "Enough studies per subgroup", "Same effect metric", "Subgroup comparisons interpreted cautiously"] },
      metaRegression: { title: "Meta-regression", summary: "Tests whether continuous or multiple study-level moderators explain between-study differences.", assumptions: ["Enough studies", "Moderator measured at study level", "Same effect metric", "Ecological interpretation considered"] },
      publicationBiasDiagnostics: { title: "Publication-bias diagnostics", summary: "Inspects funnel-plot asymmetry and small-study effects as possible signs of bias.", assumptions: ["Enough studies for meaningful diagnostics", "Comparable effect metric", "Asymmetry can have several causes", "Diagnostics are not proof of bias"] }
    }
  },
  fr: {
    goalUpdate: { question: "Que voulez-vous faire avec vos données ?", hint: "Choisissez si vous voulez analyser une étude, découvrir une structure, prédire de nouveaux cas ou synthétiser plusieurs études/tailles d'effet." },
    goalAnswer: { label: "Synthétiser plusieurs études ou tailles d'effet", next: "metaEffectType" },
    tree: {
      metaEffectType: { area: "Méta-analyse", question: "Quelles informations sont disponibles dans vos études ?", hint: "Choisissez le format des données selon les statistiques extraites des études primaires.", step: "Format d'entrée", answers: [{ label: "Méta-analyse d'odds ratios", result: "metaOddsRatioAnalysis" }, { label: "Coefficients de corrélation", result: "metaCorrelationAnalysis" }, { label: "Différences de moyennes à partir de n, M et SD", result: "metaMeanDifferenceAnalysis" }, { label: "Tailles d'effet avec variances d'échantillonnage ou erreurs standard", result: "metaEffectSizeAnalysis" }, { label: "Proportions à partir de la fréquence d'événement et de l'effectif total", result: "metaProportionAnalysis" }] },
      metaHeterogeneity: { area: "Hétérogénéité", question: "Attendez-vous une hétérogénéité importante entre les études ?", hint: "Des différences d'échantillons, d'interventions, d'instruments ou de plans favorisent souvent un modèle à effets aléatoires.", step: "Type de modèle", answers: [{ label: "Peu d'hétérogénéité et études très similaires", result: "fixedEffectMetaAnalysis" }, { label: "Hétérogénéité modérée ou élevée attendue", next: "metaPurpose" }] },
      metaPurpose: { area: "Question complémentaire", question: "Voulez-vous expliquer l'hétérogénéité ou examiner un biais ?", hint: "Après l'effet combiné, vous pouvez examiner des sous-groupes, des modérateurs continus ou les effets de petites études.", step: "Analyse complémentaire", answers: [{ label: "Non, rapporter l'effet global combiné", result: "randomEffectsMetaAnalysis" }, { label: "Comparer des sous-groupes catégoriels", result: "subgroupMetaAnalysis" }, { label: "Tester des modérateurs continus", result: "metaRegression" }, { label: "Examiner le biais de publication ou les effets de petites études", result: "publicationBiasDiagnostics" }] }
    },
    results: {
      metaOddsRatioAnalysis: { title: "Méta-analyse d'odds ratios", summary: "Synthétise des odds ratios à partir des fréquences d'événements et des tailles de groupes.", assumptions: ["Plusieurs études indépendantes", "Événements et taille totale disponibles pour chaque groupe", "Moderator et Study Label peuvent être ajoutés", "Choisir effet fixe/aléatoire, modérateurs et biais de publication dans les options du modèle"] },
      metaCorrelationAnalysis: { title: "Méta-analyse de coefficients de corrélation", summary: "Synthétise des coefficients de corrélation provenant de plusieurs études.", assumptions: ["Corrélation et taille d'échantillon disponibles pour chaque étude", "Construits comparables entre études", "Moderator et Study Label peuvent être ajoutés", "Choisir effet fixe/aléatoire, modérateurs et biais de publication dans les options du modèle"] },
      metaMeanDifferenceAnalysis: { title: "Méta-analyse de différences de moyennes", summary: "Synthétise des différences entre groupes à partir de n, moyenne et écart-type.", assumptions: ["n, M et SD disponibles pour chaque groupe", "Groupes et échelles de mesure comparables", "Moderator et Study Label peuvent être ajoutés", "Choisir effet fixe/aléatoire, modérateurs et biais de publication dans les options du modèle"] },
      metaEffectSizeAnalysis: { title: "Méta-analyse de tailles d'effet", summary: "Synthétise des tailles d'effet déjà calculées avec leur variance ou erreur standard.", assumptions: ["Taille d'effet disponible pour chaque étude", "Variance ou erreur standard disponible", "Moderator et Study Label peuvent être ajoutés", "Choisir effet fixe/aléatoire, modérateurs et biais de publication dans les options du modèle"] },
      metaProportionAnalysis: { title: "Méta-analyse de proportions", summary: "Synthétise des proportions à partir des fréquences d'événements et des effectifs totaux.", assumptions: ["Fréquence d'événement disponible pour chaque étude", "Taille totale d'échantillon disponible", "Moderator et Study Label peuvent être ajoutés", "Choisir effet fixe/aléatoire, modérateurs et biais de publication dans les options du modèle"] },
      majorMetaAnalysis: { title: "Méta-analyse", summary: "Synthétise plusieurs études avec l'option d'entrée appropriée. Le modèle à effet fixe ou à effets aléatoires, les analyses de modérateurs et les diagnostics de biais de publication sont ensuite choisis dans les options du modèle.", assumptions: ["Plusieurs études ou tailles d'effet indépendantes", "Données d'entrée adaptées à l'option choisie", "Justifier effet fixe vs effets aléatoires par le plan des études et l'hétérogénéité", "Rapporter les modérateurs et le biais de publication comme analyses complémentaires optionnelles"] },
      fixedEffectMetaAnalysis: { title: "Méta-analyse à effet fixe", summary: "Estime un effet commun en supposant que toutes les études partagent le même effet vrai.", assumptions: ["Plusieurs études ou tailles d'effet indépendantes", "Taille d'effet commune et erreur standard/variance disponibles", "Études substantiellement très similaires", "Hétérogénéité faible"] },
      randomEffectsMetaAnalysis: { title: "Méta-analyse à effets aléatoires", summary: "Estime un effet moyen lorsque les effets vrais peuvent varier entre les études.", assumptions: ["Plusieurs études ou tailles d'effet indépendantes", "Taille d'effet et mesure de précision disponibles", "Variance inter-études estimée", "Hétérogénéité rapportée avec tau2/I2"] },
      subgroupMetaAnalysis: { title: "Méta-analyse par sous-groupes", summary: "Compare les effets combinés entre groupes d'études définis catégoriellement.", assumptions: ["Sous-groupes justifiés à l'avance", "Assez d'études par sous-groupe", "Même métrique d'effet", "Comparaisons interprétées prudemment"] },
      metaRegression: { title: "Méta-régression", summary: "Teste si des modérateurs continus ou multiples au niveau des études expliquent les différences entre études.", assumptions: ["Nombre suffisant d'études", "Modérateur mesuré au niveau de l'étude", "Même métrique d'effet", "Interprétation écologique prise en compte"] },
      publicationBiasDiagnostics: { title: "Diagnostic du biais de publication", summary: "Examine l'asymétrie du funnel plot et les effets de petites études comme indices possibles de biais.", assumptions: ["Assez d'études pour un diagnostic utile", "Métrique d'effet comparable", "L'asymétrie peut avoir plusieurs causes", "Le diagnostic ne prouve pas le biais"] }
    }
  },
  es: {
    goalUpdate: { question: "¿Qué desea hacer con sus datos?", hint: "Elija si quiere analizar un estudio, descubrir estructura, predecir nuevos casos o sintetizar varios estudios/tamaños del efecto." },
    goalAnswer: { label: "Sintetizar varios estudios o tamaños del efecto", next: "metaEffectType" },
    tree: {
      metaEffectType: { area: "Meta-análisis", question: "¿Qué información está disponible en sus estudios?", hint: "Elija el formato de datos según los estadísticos extraídos de los estudios primarios.", step: "Formato de entrada", answers: [{ label: "Meta-análisis de odds ratios", result: "metaOddsRatioAnalysis" }, { label: "Coeficientes de correlación", result: "metaCorrelationAnalysis" }, { label: "Diferencias de medias a partir de n, M y SD", result: "metaMeanDifferenceAnalysis" }, { label: "Tamaños del efecto con varianzas muestrales o errores estándar", result: "metaEffectSizeAnalysis" }, { label: "Proporciones a partir de frecuencia del evento y tamaño muestral total", result: "metaProportionAnalysis" }] },
      metaHeterogeneity: { area: "Heterogeneidad", question: "¿Espera heterogeneidad relevante entre estudios?", hint: "Diferencias en muestras, intervenciones, instrumentos o diseños suelen favorecer un modelo de efectos aleatorios.", step: "Tipo de modelo", answers: [{ label: "Poca heterogeneidad y estudios muy similares", result: "fixedEffectMetaAnalysis" }, { label: "Heterogeneidad moderada o alta esperada", next: "metaPurpose" }] },
      metaPurpose: { area: "Pregunta adicional", question: "¿Quiere explicar la heterogeneidad o inspeccionar sesgo?", hint: "Después del efecto combinado puede examinar subgrupos, moderadores continuos o efectos de estudios pequeños.", step: "Análisis adicional", answers: [{ label: "No, reportar el efecto global combinado", result: "randomEffectsMetaAnalysis" }, { label: "Comparar subgrupos categóricos", result: "subgroupMetaAnalysis" }, { label: "Probar moderadores continuos", result: "metaRegression" }, { label: "Inspeccionar sesgo de publicación o efectos de estudios pequeños", result: "publicationBiasDiagnostics" }] }
    },
    results: {
      metaOddsRatioAnalysis: { title: "Meta-análisis de odds ratios", summary: "Sintetiza odds ratios a partir de frecuencias de eventos y tamaños de grupo.", assumptions: ["Varios estudios independientes", "Eventos y tamaño muestral total disponibles para cada grupo", "Moderator y Study Label pueden añadirse", "Elegir efectos fijos/aleatorios, moderadores y sesgo de publicación en las opciones del modelo"] },
      metaCorrelationAnalysis: { title: "Meta-análisis de coeficientes de correlación", summary: "Sintetiza coeficientes de correlación de varios estudios.", assumptions: ["Correlación y tamaño muestral disponibles para cada estudio", "Constructos comparables entre estudios", "Moderator y Study Label pueden añadirse", "Elegir efectos fijos/aleatorios, moderadores y sesgo de publicación en las opciones del modelo"] },
      metaMeanDifferenceAnalysis: { title: "Meta-análisis de diferencias de medias", summary: "Sintetiza diferencias entre grupos a partir de n, media y desviación estándar.", assumptions: ["n, M y SD disponibles para cada grupo", "Grupos y escalas de medición comparables", "Moderator y Study Label pueden añadirse", "Elegir efectos fijos/aleatorios, moderadores y sesgo de publicación en las opciones del modelo"] },
      metaEffectSizeAnalysis: { title: "Meta-análisis de tamaños del efecto", summary: "Sintetiza tamaños del efecto ya calculados con su varianza o error estándar.", assumptions: ["Tamaño del efecto disponible para cada estudio", "Varianza o error estándar disponible", "Moderator y Study Label pueden añadirse", "Elegir efectos fijos/aleatorios, moderadores y sesgo de publicación en las opciones del modelo"] },
      metaProportionAnalysis: { title: "Meta-análisis de proporciones", summary: "Sintetiza proporciones a partir de frecuencias del evento y tamaños muestrales totales.", assumptions: ["Frecuencia del evento disponible para cada estudio", "Tamaño muestral total disponible", "Moderator y Study Label pueden añadirse", "Elegir efectos fijos/aleatorios, moderadores y sesgo de publicación en las opciones del modelo"] },
      majorMetaAnalysis: { title: "Meta-análisis", summary: "Sintetiza varios estudios con la opción de entrada adecuada. El modelo de efecto fijo o efectos aleatorios, los moderadores y el sesgo de publicación se eligen después en las opciones del modelo.", assumptions: ["Varios estudios o tamaños del efecto independientes", "Datos de entrada adecuados para la opción elegida", "Justificar efecto fijo vs efectos aleatorios según diseño y heterogeneidad", "Reportar moderadores y sesgo de publicación como análisis complementarios opcionales"] },
      fixedEffectMetaAnalysis: { title: "Meta-análisis de efecto fijo", summary: "Estima un efecto común bajo el supuesto de que todos los estudios comparten el mismo efecto verdadero.", assumptions: ["Varios estudios o tamaños del efecto independientes", "Tamaño del efecto común y error estándar/varianza disponibles", "Estudios sustantivamente muy similares", "Heterogeneidad baja"] },
      randomEffectsMetaAnalysis: { title: "Meta-análisis de efectos aleatorios", summary: "Estima un efecto medio cuando los efectos verdaderos pueden variar entre estudios.", assumptions: ["Varios estudios o tamaños del efecto independientes", "Tamaño del efecto y medida de precisión disponibles", "Varianza entre estudios estimada", "Heterogeneidad reportada con tau2/I2"] },
      subgroupMetaAnalysis: { title: "Meta-análisis por subgrupos", summary: "Compara efectos combinados entre grupos de estudios definidos categóricamente.", assumptions: ["Subgrupos justificados previamente", "Suficientes estudios por subgrupo", "Misma métrica de efecto", "Comparaciones interpretadas con cautela"] },
      metaRegression: { title: "Meta-regresión", summary: "Prueba si moderadores continuos o múltiples a nivel de estudio explican diferencias entre estudios.", assumptions: ["Suficientes estudios", "Moderador medido a nivel de estudio", "Misma métrica de efecto", "Interpretación ecológica considerada"] },
      publicationBiasDiagnostics: { title: "Diagnóstico de sesgo de publicación", summary: "Examina asimetría del funnel plot y efectos de estudios pequeños como posibles indicios de sesgo.", assumptions: ["Suficientes estudios para diagnóstico útil", "Métrica de efecto comparable", "La asimetría puede tener varias causas", "El diagnóstico no prueba sesgo"] }
    }
  },
  it: {
    goalUpdate: { question: "Che cosa vuoi fare con i tuoi dati?", hint: "Scegli se analizzare un singolo studio, scoprire struttura, predire nuovi casi o sintetizzare più studi/dimensioni dell'effetto." },
    goalAnswer: { label: "Sintetizzare più studi o dimensioni dell'effetto", next: "metaEffectType" },
    tree: {
      metaEffectType: { area: "Meta-analisi", question: "Quali informazioni sono disponibili nei tuoi studi?", hint: "Scegli il formato dei dati in base alle statistiche estratte dagli studi primari.", step: "Formato di input", answers: [{ label: "Meta-analisi degli odds ratio", result: "metaOddsRatioAnalysis" }, { label: "Coefficienti di correlazione", result: "metaCorrelationAnalysis" }, { label: "Differenze tra medie da n, M e SD", result: "metaMeanDifferenceAnalysis" }, { label: "Dimensioni dell'effetto con varianze campionarie o errori standard", result: "metaEffectSizeAnalysis" }, { label: "Proporzioni da frequenza dell'evento e campione totale", result: "metaProportionAnalysis" }] },
      metaHeterogeneity: { area: "Eterogeneità", question: "Ti aspetti eterogeneità rilevante tra gli studi?", hint: "Differenze in campioni, interventi, strumenti o disegni spesso favoriscono un modello a effetti casuali.", step: "Tipo di modello", answers: [{ label: "Poca eterogeneità e studi molto simili", result: "fixedEffectMetaAnalysis" }, { label: "Eterogeneità moderata o alta prevista", next: "metaPurpose" }] },
      metaPurpose: { area: "Domanda aggiuntiva", question: "Vuoi spiegare l'eterogeneità o controllare bias?", hint: "Dopo l'effetto combinato puoi esaminare sottogruppi, moderatori continui o effetti dei piccoli studi.", step: "Analisi aggiuntiva", answers: [{ label: "No, riportare l'effetto globale combinato", result: "randomEffectsMetaAnalysis" }, { label: "Confrontare sottogruppi categoriali", result: "subgroupMetaAnalysis" }, { label: "Testare moderatori continui", result: "metaRegression" }, { label: "Controllare bias di pubblicazione o effetti dei piccoli studi", result: "publicationBiasDiagnostics" }] }
    },
    results: {
      metaOddsRatioAnalysis: { title: "Meta-analisi degli odds ratio", summary: "Sintetizza odds ratio da frequenze degli eventi e dimensioni dei gruppi.", assumptions: ["Più studi indipendenti", "Eventi e dimensione totale disponibili per ogni gruppo", "Moderator e Study Label possono essere aggiunti", "Scegli effetti fissi/casuali, moderatori e bias di pubblicazione nelle opzioni del modello"] },
      metaCorrelationAnalysis: { title: "Meta-analisi dei coefficienti di correlazione", summary: "Sintetizza coefficienti di correlazione provenienti da più studi.", assumptions: ["Correlazione e dimensione campionaria disponibili per ogni studio", "Costrutti comparabili tra studi", "Moderator e Study Label possono essere aggiunti", "Scegli effetti fissi/casuali, moderatori e bias di pubblicazione nelle opzioni del modello"] },
      metaMeanDifferenceAnalysis: { title: "Meta-analisi delle differenze tra medie", summary: "Sintetizza differenze tra gruppi da n, media e deviazione standard.", assumptions: ["n, M e SD disponibili per ogni gruppo", "Gruppi e scale di misura comparabili", "Moderator e Study Label possono essere aggiunti", "Scegli effetti fissi/casuali, moderatori e bias di pubblicazione nelle opzioni del modello"] },
      metaEffectSizeAnalysis: { title: "Meta-analisi delle dimensioni dell'effetto", summary: "Sintetizza dimensioni dell'effetto già calcolate con varianza o errore standard.", assumptions: ["Dimensione dell'effetto disponibile per ogni studio", "Varianza o errore standard disponibile", "Moderator e Study Label possono essere aggiunti", "Scegli effetti fissi/casuali, moderatori e bias di pubblicazione nelle opzioni del modello"] },
      metaProportionAnalysis: { title: "Meta-analisi delle proporzioni", summary: "Sintetizza proporzioni da frequenze degli eventi e campioni totali.", assumptions: ["Frequenza dell'evento disponibile per ogni studio", "Dimensione campionaria totale disponibile", "Moderator e Study Label possono essere aggiunti", "Scegli effetti fissi/casuali, moderatori e bias di pubblicazione nelle opzioni del modello"] },
      majorMetaAnalysis: { title: "Meta-analisi", summary: "Sintetizza più studi con l'opzione di input appropriata. Modello a effetto fisso o a effetti casuali, analisi dei moderatori e diagnostica del bias di pubblicazione vengono poi scelti nelle opzioni del modello.", assumptions: ["Più studi o dimensioni dell'effetto indipendenti", "Dati di input adatti all'opzione scelta", "Giustificare effetto fisso vs effetti casuali in base a disegno ed eterogeneità", "Riportare moderatori e bias di pubblicazione come analisi aggiuntive opzionali"] },
      fixedEffectMetaAnalysis: { title: "Meta-analisi a effetto fisso", summary: "Stima un effetto comune assumendo che tutti gli studi condividano lo stesso effetto vero.", assumptions: ["Più studi o dimensioni dell'effetto indipendenti", "Dimensione dell'effetto comune ed errore standard/varianza disponibili", "Studi sostanzialmente molto simili", "Eterogeneità bassa"] },
      randomEffectsMetaAnalysis: { title: "Meta-analisi a effetti casuali", summary: "Stima un effetto medio quando gli effetti veri possono variare tra gli studi.", assumptions: ["Più studi o dimensioni dell'effetto indipendenti", "Dimensione dell'effetto e misura di precisione disponibili", "Varianza tra studi stimata", "Eterogeneità riportata con tau2/I2"] },
      subgroupMetaAnalysis: { title: "Meta-analisi per sottogruppi", summary: "Confronta effetti combinati tra gruppi di studi definiti categorialmente.", assumptions: ["Sottogruppi giustificati in anticipo", "Studi sufficienti per sottogruppo", "Stessa metrica dell'effetto", "Confronti interpretati con cautela"] },
      metaRegression: { title: "Meta-regressione", summary: "Verifica se moderatori continui o multipli a livello di studio spiegano differenze tra studi.", assumptions: ["Studi sufficienti", "Moderatore misurato a livello di studio", "Stessa metrica dell'effetto", "Interpretazione ecologica considerata"] },
      publicationBiasDiagnostics: { title: "Diagnostica del bias di pubblicazione", summary: "Esamina asimmetria del funnel plot ed effetti dei piccoli studi come possibili indizi di bias.", assumptions: ["Studi sufficienti per diagnostica utile", "Metrica dell'effetto comparabile", "L'asimmetria può avere più cause", "La diagnostica non prova il bias"] }
    }
  }
};

Object.entries(metaLanguageAdditions).forEach(([language, addition]) => {
  const pack = languagePacks[language];
  if (!pack) return;
  Object.assign(pack.tree.goal, addition.goalUpdate);
  if (!pack.tree.goal.answers.some((answer) => answer.next === addition.goalAnswer.next)) {
    pack.tree.goal.answers.push(addition.goalAnswer);
  }
  Object.assign(pack.tree, addition.tree);
  Object.assign(pack.results, addition.results);
});

const totalDecisionSteps = 14;

const procedureCatalog = {
  pearson: {
    jamovi: "Analyses > Regression > Correlation Matrix\nMove both metric variables into Variables.\nSelect Pearson and enable a scatterplot if you want a visual check.",
    r: "cor.test(data$x, data$y, method = \"pearson\")\nplot(data$x, data$y)"
  },
  spearman: {
    jamovi: "Analyses > Regression > Correlation Matrix\nMove the variables into Variables.\nSelect Spearman for ordinal or monotonic relationships.",
    r: "cor.test(data$x, data$y, method = \"spearman\", exact = FALSE)"
  },
  kendall: {
    jamovi: "Analyses > Regression > Correlation Matrix\nMove the variables into Variables.\nSelect Kendall's tau for ordinal or monotonic relationships, especially with small samples or ties.",
    r: "cor.test(data$x, data$y, method = \"kendall\", exact = FALSE)"
  },
  chiSquareAssociation: {
    jamovi: "Analyses > Frequencies > Contingency Tables > Independent Samples\nPut one categorical variable in Rows and the other in Columns.\nEnable the chi-square test and expected counts. For post-hoc interpretation, request standardized Pearson residuals and inspect which cells contribute most to the association.",
    r: "tab <- table(data$group, data$outcome)\nchisq.test(tab)"
  },
  logLinearModel: {
    jamovi: "Analyses > Frequencies > Log-Linear Model\nAdd the nominal variables that define the multiway contingency table.\nCompare models with and without interaction terms to understand which associations are needed.",
    r: "tab <- xtabs(count ~ therapy + outcome + gender, data = data)\nfit <- MASS::loglm(~ therapy * outcome + gender, data = tab)\nsummary(fit)"
  },
  pathAnalysis: {
    jamovi: "Install and open the medmod module in jamovi.\nSpecify the predictor, mediator, and outcome variables for the hypothesised mediation model.\nRequest standardized estimates, indirect effects, confidence intervals, and model fit information.",
    r: "library(lavaan)\nmodel <- '\n  mediator ~ a * predictor\n  outcome ~ b * mediator + c_prime * predictor\n  indirect := a * b\n  total := c_prime + indirect\n'\nfit <- sem(model, data = data, se = \"bootstrap\", bootstrap = 5000)\nsummary(fit, standardized = TRUE, fit.measures = TRUE, rsquare = TRUE)"
  },
  structuralEquationModeling: {
    jamovi: "Install and open the SEMLj module in jamovi and use the interactive SEM function.\nAssign indicators to the latent variables, then place latent endogenous variables as the dependent variables and latent exogenous variables as the independent variables.\nDefine the structural paths between latent variables and inspect standardized loadings, path coefficients, indirect effects if relevant, R squared, and global fit indices.",
    r: "library(lavaan)\nmodel <- '\n  stress =~ stress1 + stress2 + stress3\n  recovery =~ sleep1 + sleep2 + sleep3\n  recovery ~ stress\n  performance ~ recovery + stress\n'\nfit <- sem(model, data = data)\nsummary(fit, standardized = TRUE, fit.measures = TRUE, rsquare = TRUE)"
  },
  confirmatoryFactorAnalysis: {
    jamovi: "Install and open the Factor module in jamovi.\nChoose Confirmatory Factor Analysis and assign each observed indicator to its hypothesised latent factor.\nInspect standardized factor loadings, residuals, modification indices when justified, and global fit indices such as CFI, TLI, RMSEA, and SRMR.",
    r: "library(lavaan)\nmodel <- '\n  stress =~ stress1 + stress2 + stress3\n  recovery =~ sleep1 + sleep2 + sleep3\n  confidence =~ conf1 + conf2 + conf3\n'\nfit <- cfa(model, data = data)\nsummary(fit, standardized = TRUE, fit.measures = TRUE)"
  },
  discriminantAnalysis: {
    jamovi: "Install and open the SnowCluster module in jamovi.\nChoose Classification > Linear Discriminant Analysis.\nSet the nominal group variable as the dependent variable and the interval-scaled variables as predictors; inspect discriminant functions and classification accuracy.",
    r: "library(MASS)\nfit <- lda(group ~ anxiety + motivation + reaction_time, data = data)\nfit\npred <- predict(fit)$class\ntable(Predicted = pred, Observed = data$group)\nmean(pred == data$group)"
  },
  oneSampleT: {
    jamovi: "Analyses > T-Tests > One Sample T-Test\nMove the metric variable into Dependent Variables.\nEnter the test value and enable descriptives/normality checks.",
    r: "t.test(data$score, mu = 0)"
  },
  oneSampleZ: {
    jamovi: "Install and open the ztesvis module in jamovi.\nChoose the one-sample z-test option and enter the summary values: sample mean, null population mean, null population standard deviation, sample size, and alpha level.\nCheck the z statistic, p-value, and confidence interval in the output.",
    r: "mu0 <- 50\nsigma <- 15\nx <- data$score\nn <- length(x)\nz <- (mean(x) - mu0) / (sigma / sqrt(n))\np <- 2 * pnorm(-abs(z))\nc(z = z, p = p)"
  },
  oneSampleWilcoxon: {
    jamovi: "Analyses > T-Tests > One Sample T-Test\nMove the variable into Dependent Variables.\nUse the non-parametric option / Wilcoxon signed-rank where available.",
    r: "wilcox.test(data$score, mu = 0)"
  },
  independentT: {
    jamovi: "Analyses > T-Tests > Independent Samples T-Test\nPut the metric outcome in Dependent Variables and the group variable in Grouping Variable.\nEnable Welch's correction if variances are unequal.",
    r: "t.test(score ~ group, data = data, var.equal = FALSE)"
  },
  mannWhitney: {
    jamovi: "Analyses > T-Tests > Independent Samples T-Test\nPut the outcome in Dependent Variables and the group variable in Grouping Variable.\nEnable Mann-Whitney U under non-parametric tests.",
    r: "wilcox.test(score ~ group, data = data)"
  },
  pairedT: {
    jamovi: "Analyses > T-Tests > Paired Samples T-Test\nAdd the two paired variables as a paired row.\nEnable descriptives and normality check for the differences.",
    r: "t.test(data$before, data$after, paired = TRUE)"
  },
  wilcoxon: {
    jamovi: "Analyses > T-Tests > Paired Samples T-Test\nAdd the two paired variables as a paired row.\nEnable Wilcoxon signed-rank under non-parametric tests.",
    r: "wilcox.test(data$before, data$after, paired = TRUE)"
  },
  anova: {
    jamovi: "Analyses > ANOVA > ANOVA\nPut the metric outcome in Dependent Variable and the factor in Fixed Factor.\nEnable assumption checks and post-hoc tests if needed.",
    r: "fit <- aov(score ~ group, data = data)\nsummary(fit)\nTukeyHSD(fit)"
  },
  ancova: {
    jamovi: "Analyses > ANOVA > ANCOVA\nPut the metric outcome in Dependent Variable and the grouping variable(s) in Fixed Factors.\nAdd variables such as baseline_score or age_years to Covariates.\nInspect the group effect after adjustment and check the homogeneity of regression slopes when theoretically relevant.",
    r: "fit <- lm(post_anxiety ~ group + baseline_anxiety, data = data)\nanova(fit)\ndrop1(fit, test = \"F\")"
  },
  manova: {
    jamovi: "Analyses > ANOVA > MANCOVA\nMove two or more metric outcomes into Dependent Variables.\nAdd the grouping factor(s) as Fixed Factors and leave Covariates empty for a MANOVA.\nInspect multivariate tests such as Pillai's trace or Wilks' lambda, then follow up with univariate ANOVAs only if justified.",
    r: "fit <- manova(cbind(stress_score, wellbeing_score, performance_score) ~ group, data = data)\nsummary(fit, test = \"Pillai\")\nsummary(fit, test = \"Wilks\")\nsummary.aov(fit)"
  },
  mancova: {
    jamovi: "Analyses > ANOVA > MANCOVA\nMove two or more metric outcomes into Dependent Variables.\nAdd the grouping factor(s) as Fixed Factors and add variables such as age_years or baseline_score to Covariates.\nInspect Pillai's trace or Wilks' lambda, then check adjusted univariate follow-ups if justified.",
    r: "fit <- manova(cbind(stress_score, wellbeing_score, performance_score) ~ group + age_years + baseline_score, data = data)\nsummary(fit, test = \"Pillai\")\nsummary(fit, test = \"Wilks\")\nsummary.aov(fit)"
  },
  repeatedAnova: {
    jamovi: "Analyses > ANOVA > Repeated Measures ANOVA\nDefine the repeated-measures factor and levels.\nAssign the repeated measurement columns and enable sphericity corrections.",
    r: "fit <- aov(score ~ condition + Error(id / condition), data = long_data)\nsummary(fit)"
  },
  twoWayAnova: {
    jamovi: "Analyses > ANOVA > ANOVA\nPut the metric outcome in Dependent Variable and the two or more grouping factors in Fixed Factors.\nInspect main effects, interaction terms, assumption checks, and post-hoc/simple-effects comparisons if needed.",
    r: "fit <- aov(score ~ factor_a * factor_b, data = data)\nsummary(fit)\n# Effect sizes: effectsize::eta_squared(fit, partial = TRUE)"
  },
  twoWayRepeatedAnova: {
    jamovi: "Analyses > ANOVA > Repeated Measures ANOVA\nDefine the two or more repeated-measures factors and their levels, then assign the repeated measurement columns to the design cells.\nInspect main effects, interaction terms, and sphericity corrections such as Greenhouse-Geisser when needed.",
    r: "fit <- aov(score ~ factor_a * factor_b + Error(id / (factor_a * factor_b)), data = long_data)\nsummary(fit)"
  },
  linearMixedModel: {
    jamovi: "Install and open the GAMLj module in jamovi.\nChoose Mixed Models > Linear Model, place the metric outcome in Dependent Variable, fixed predictors in Fixed Effects, and participant/team/class in Random Effects.\nStart with random intercepts and add random slopes only when theoretically justified and supported by the data.",
    r: "library(lme4)\nlibrary(lmerTest)\nfit <- lmer(score ~ condition + week + (1 | participant), data = data)\nsummary(fit)\nperformance::r2_nakagawa(fit)"
  },
  generalizedLinearMixedModel: {
    jamovi: "Install and open the GAMLj module in jamovi.\nChoose the generalized/logistic mixed model option, not Mixed Models > Linear Model.\nUse success as the nominal dependent variable, choose a binomial distribution with a logit link, add condition and week as fixed effects, and add participant as a random intercept.\nIf jamovi says the linear model requires continuous data, you are in the linear mixed model menu.",
    r: "library(lme4)\ndata$success <- factor(data$success, levels = c(\"no\", \"yes\"))\nfit <- glmer(success ~ condition + week + (1 | participant), data = data, family = binomial)\nsummary(fit)\nexp(fixef(fit))"
  },
  ordinalMixedModel: {
    jamovi: "jamovi has limited direct support for ordinal mixed models in the core menus.\nUse the Rj Editor module or export the data to R.\nModel the ordinal outcome with fixed predictors and random effects for participant, team, class, or another cluster.",
    r: "library(ordinal)\nfit <- clmm(rating ~ condition + week + (1 | participant), data = data)\nsummary(fit)\nexp(coef(fit))"
  },
  kruskalWallis: {
    jamovi: "Analyses > Nonparametric Tests > Kruskal-Wallis\nPut the ordinal/metric outcome in the dependent variable field and the grouping variable in the group field.\nRequest descriptives and pairwise comparisons if needed.",
    r: "kruskal.test(score ~ group, data = data)"
  },
  friedman: {
    jamovi: "Analyses > Nonparametric Tests > Friedman\nAdd the repeated or paired measurement columns for the same participants.\nRequest descriptives and pairwise comparisons if needed.",
    r: "friedman.test(as.matrix(data[, c(\"time1\", \"time2\", \"time3\")]))"
  },
  nonparametricTwoWayAnova: {
    jamovi: "jamovi core menus do not provide a full nonparametric factorial ANOVA for two or more factors with interactions.\nUse the Rj Editor module or export the data to R and fit an aligned-rank-transform model.\nReport main effects and interactions from the ART ANOVA table.",
    r: "library(ARTool)\nfit <- art(score ~ factor_a * factor_b, data = data)\nanova(fit)"
  },
  nonparametricTwoWayRepeatedAnova: {
    jamovi: "jamovi core menus do not provide a full nonparametric factorial repeated-measures ANOVA for two or more factors with interactions.\nUse the Rj Editor module or export the data to R and fit an aligned-rank-transform model with participant as the repeated unit.\nReport main effects and interactions from the ART ANOVA table.",
    r: "library(ARTool)\nfit <- art(score ~ factor_a * factor_b + Error(id), data = long_data)\nanova(fit)"
  },
  fisher: {
    jamovi: "Analyses > Frequencies > Contingency Tables > Independent Samples\nPut variables in Rows and Columns.\nEnable Fisher's exact test for a 2x2 table.",
    r: "tab <- table(data$group, data$outcome)\nfisher.test(tab)"
  },
  mcnemar: {
    jamovi: "Analyses > Frequencies > Contingency Tables > Paired Samples\nAdd the two paired dichotomous variables.\nEnable McNemar test.",
    r: "tab <- table(data$before, data$after)\nmcnemar.test(tab)"
  },
  binomialTest: {
    jamovi: "Analyses > Frequencies > One Sample Proportion Tests\nSelect the two-level categorical variable.\nEnter the expected proportion for the focal category and request exact/binomial confidence intervals.",
    r: "successes <- sum(data$response == \"yes\")\nn <- length(data$response)\nbinom.test(successes, n, p = 0.50)"
  },
  chiSquareGoodness: {
    jamovi: "Analyses > Frequencies > One Sample Proportion Tests\nSelect the categorical variable.\nEnter expected proportions or compare against equal proportions.",
    r: "observed <- c(20, 30, 50)\nexpected <- c(1/3, 1/3, 1/3)\nchisq.test(observed, p = expected)"
  },
  linearRegression: {
    jamovi: "Analyses > Regression > Linear Regression\nPut the metric target in Dependent Variable.\nAdd predictors to Covariates or Factors and inspect residual diagnostics.\nInterpret coefficients as prediction/association unless the study design supports causal inference.",
    r: "fit <- lm(race_time_min ~ training_volume_km_week + vo2max_ml_kg_min + age_years, data = data)\nsummary(fit)\nplot(fit)"
  },
  logisticRegression: {
    jamovi: "Analyses > Regression > Logistic Regression > 2 Outcomes\nPut the dichotomous target in Dependent Variable.\nAdd predictors to Covariates or Factors and inspect odds ratios.",
    r: "data$injury <- factor(data$injury, levels = c(\"no\", \"yes\"))\nfit <- glm(injury ~ training_load_au + previous_injury + recovery_score + age_years, data = data, family = binomial)\nsummary(fit)\nexp(coef(fit))"
  },
  multinomialRegression: {
    jamovi: "Analyses > Regression > Logistic Regression > N Outcomes\nPut the multicategory target in Dependent Variable.\nAdd predictors to Covariates or Factors and choose the reference level.",
    r: "library(nnet)\ndata$treatment_outcome <- relevel(factor(data$treatment_outcome), ref = \"completion\")\nfit <- multinom(treatment_outcome ~ baseline_symptom_score + motivation_score + previous_therapy + age_years, data = data)\nsummary(fit)"
  },
  majorMetaAnalysis: {
    jamovi: "Install/open the MAJOR module in jamovi and choose the input option that matches your data: Correlation Coefficients (r, N), Dichotomous Models, Mean Differences (n, M, SD), Effect Sizes and (Sampling Variances or Standard Errors), or Proportions.\nEnter the required study-level fields. For Dichotomous Models, use raw incident counts and total sample sizes for the experimental and control groups. For Proportions, use raw event frequencies and total sample sizes; values greater than 1 are expected because MAJOR computes the proportions internally. For correlations, use correlations and sample size. For Effect Sizes, use effect size plus Variance or SE. Add Study Label and optional numeric Moderator when needed.\nIn Model Options, choose the model estimator and model measures; for Proportions, choose the effect size model measures. Use the same options to select fixed or random effects, and optionally request moderator analyses and publication-bias diagnostics.",
    r: "library(metafor)\n# Generic precomputed-effect workflow\nfit <- rma(yi = effect_size, sei = standard_error, mods = ~ moderator, data = data, method = \"REML\")\nsummary(fit)\nforest(fit)\nfunnel(fit)\nregtest(fit, model = \"rma\")"
  },
  metaOddsRatioAnalysis: {
    jamovi: "Install/open MAJOR > Meta Analysis > Effect Sizes and (Sampling Variances or Standard Errors).\nUse the prepared log-odds-ratio dataset: move log_odds_ratio to Effect Sizes, variance to Variance or SE, study_label to Study Label, and optionally moderator_code to Moderator. In the option Selected (correspondent observed ES), choose Sampling Variances.\nThis avoids the current MAJOR Dichotomous Models error ('condition has length > 1'). Interpret the pooled effect on the log-odds scale, then exponentiate it to report the pooled odds ratio.",
    r: "library(metafor)\nfit <- rma(yi = log_odds_ratio, vi = variance, mods = ~ moderator_code, data = data, method = \"REML\")\nsummary(fit)\npredict(fit, transf = exp)"
  },
  metaCorrelationAnalysis: {
    jamovi: "Install/open the MAJOR module in jamovi and choose the correlation coefficients input option.\nEnter the correlations, sample size, Moderator, and Study Label.\nIn Model Options, choose the model estimator and model measures. Select fixed or random effects there, and optionally request moderator analyses and publication-bias diagnostics.",
    r: "library(metafor)\nes <- escalc(measure = \"ZCOR\", ri = correlation, ni = sample_size, data = data)\nfit <- rma(yi, vi, mods = ~ moderator, data = es, method = \"REML\")\nsummary(fit)\npredict(fit, transf = transf.ztor)"
  },
  metaMeanDifferenceAnalysis: {
    jamovi: "Install/open the MAJOR module in jamovi and choose the mean differences option based on n, M, and SD.\nEnter n, mean, and standard deviation for each group, plus Moderator and Study Label when available.\nIn Model Options, choose the model estimator and model measures. Select fixed or random effects there, and optionally request moderator analyses and publication-bias diagnostics.",
    r: "library(metafor)\nes <- escalc(measure = \"SMD\", m1i = mean_treatment, sd1i = sd_treatment, n1i = n_treatment, m2i = mean_control, sd2i = sd_control, n2i = n_control, data = data)\nfit <- rma(yi, vi, mods = ~ moderator, data = es, method = \"REML\")\nsummary(fit)"
  },
  metaEffectSizeAnalysis: {
    jamovi: "Install/open the MAJOR module in jamovi and choose the Effect sizes input option.\nEnter the effect size, Variance or SE, Moderator, and Study Label.\nIn Model Options, choose the model estimator and model measures. Select fixed or random effects there, and optionally request moderator analyses and publication-bias diagnostics.",
    r: "library(metafor)\nfit <- rma(yi = effect_size, vi = variance, mods = ~ moderator, data = data, method = \"REML\")\nsummary(fit)\n# If only SE is available, use sei = se instead of vi = variance."
  },
  metaProportionAnalysis: {
    jamovi: "Install/open MAJOR > Meta Analysis > Proportions.\nMove event_frequency to Frequencies of the Event, total_sample_size to Total Sample Sizes, and study_label to Study Label. These fields use raw counts, so event_frequency can be greater than 1. If you use a moderator, move moderator_code to Moderator and set Moderator type in Model Options.\nIn Model Options, choose the estimator and effect size model measure, such as Raw proportion or Logit transformed proportion, then select fixed/random effects, moderator analyses, and publication-bias diagnostics as needed.",
    r: "library(metafor)\nes <- escalc(measure = \"PLO\", xi = event_frequency, ni = total_sample_size, data = data)\nfit <- rma(yi, vi, mods = ~ moderator_code, data = es, method = \"REML\")\nsummary(fit)\npredict(fit, transf = transf.ilogit)"
  },
  fixedEffectMetaAnalysis: {
    jamovi: "Install/open the MAJOR module in jamovi and choose the input option that matches your data.\nFor correlation coefficients, enter the correlations, sample size, Moderator, and Study Label. For Effect sizes, enter the effect size, Variance or SE, Moderator, and Study Label. For Proportion, enter the event frequency/count, total sample size, Moderator, and Study Label.\nIn Model Options, choose the model estimator and model measures; for Proportion, choose the effect size model measures. Select a fixed-effect model and inspect the pooled effect with its 95% CI.",
    r: "library(metafor)\nfit <- rma(yi = effect_size, sei = se, data = data, method = \"FE\")\nsummary(fit)\nforest(fit)"
  },
  randomEffectsMetaAnalysis: {
    jamovi: "Install/open the MAJOR module in jamovi and choose the input option that matches your data.\nFor correlation coefficients, enter the correlations, sample size, Moderator, and Study Label. For Effect sizes, enter the effect size, Variance or SE, Moderator, and Study Label. For Proportion, enter the event frequency/count, total sample size, Moderator, and Study Label.\nIn Model Options, choose the model estimator and model measures; for Proportion, choose the effect size model measures. Select a random-effects model and report the pooled effect, 95% CI, tau2, I2, and prediction interval if available.",
    r: "library(metafor)\nfit <- rma(yi = effect_size, sei = se, data = data, method = \"REML\")\nsummary(fit)\npredict(fit)\nforest(fit)"
  },
  subgroupMetaAnalysis: {
    jamovi: "Install/open the MAJOR module in jamovi and choose the input option that matches your data before adding subgroup information.\nFor correlation coefficients, enter the correlations, sample size, Moderator, and Study Label. For Effect sizes, enter the effect size, Variance or SE, Moderator, and Study Label. For Proportion, enter the event frequency/count, total sample size, Moderator, and Study Label.\nIn Model Options, choose the model estimator and model measures; for Proportion, choose the effect size model measures. Use the Moderator as the subgroup variable and report pooled effects within each subgroup plus the between-subgroup test.",
    r: "library(metafor)\nfit <- rma(yi = effect_size, sei = se, mods = ~ moderator, data = data, method = \"REML\")\nsummary(fit)\n# For separate subgroup summaries: by(data, data$moderator, function(d) summary(rma(yi = effect_size, sei = se, data = d, method = \"REML\")))"
  },
  metaRegression: {
    jamovi: "Install/open the MAJOR module in jamovi and choose the input option that matches your data before adding moderators.\nFor correlation coefficients, enter the correlations, sample size, Moderator, and Study Label. For Effect sizes, enter the effect size, Variance or SE, Moderator, and Study Label. For Proportion, enter the event frequency/count, total sample size, Moderator, and Study Label.\nIn Model Options, choose the model estimator and model measures; for Proportion, choose the effect size model measures. Report the moderator coefficient, confidence interval, p-value, residual heterogeneity, and the number of studies used.",
    r: "library(metafor)\nfit <- rma(yi = effect_size, sei = se, mods = ~ moderator, data = data, method = \"REML\")\nsummary(fit)"
  },
  publicationBiasDiagnostics: {
    jamovi: "Install/open the MAJOR module in jamovi and first run the meta-analysis using the correct input option.\nFor correlation coefficients, enter the correlations, sample size, Moderator, and Study Label. For Effect sizes, enter the effect size, Variance or SE, Moderator, and Study Label. For Proportion, enter the event frequency/count, total sample size, Moderator, and Study Label.\nIn Model Options, choose the model estimator and model measures; for Proportion, choose the effect size model measures. Request funnel plot and small-study/publication-bias diagnostics such as Egger's test when available.",
    r: "library(metafor)\nfit <- rma(yi = effect_size, sei = se, data = data, method = \"REML\")\nfunnel(fit)\nregtest(fit, model = \"rma\")\ntrimfill(fit)"
  },
  factorAnalysis: {
    jamovi: "Analyses > Factor > Exploratory Factor Analysis\nMove the related variables into Variables.\nChoose the extraction method, rotation, number of factors, and inspect loadings and model fit.",
    r: "library(psych)\nfa.parallel(data[, items], fa = \"fa\")\nfit <- fa(data[, items], nfactors = 3, rotate = \"oblimin\")\nprint(fit$loadings, cutoff = .30)"
  },
  networkAnalysis: {
    jamovi: "Install and open the BSS module in jamovi.\nChoose the Network Analysis option and move the selected variables into the analysis field.\nInspect the network plot, edge weights, and centrality or importance indices; interpret edges as conditional associations, not causal effects.",
    r: "items <- c(\"stress\", \"sleep_quality\", \"rumination\", \"mood\", \"motivation\", \"performance\")\ncor_mat <- cor(data[, items])\nif (requireNamespace(\"qgraph\", quietly = TRUE)) {\n  qgraph::qgraph(cor_mat, layout = \"spring\", labels = items)\n} else {\n  round(cor_mat, 2)\n}"
  },
  clusterAnalysis: {
    jamovi: "Install the SnowCluster module from the jamovi library and open it from the Analyses menu. Choose Hierarchical Clustering. \nMove the variables that describe people or objects into the clustering variables field.\nStandardise variables if needed, choose the clustering method/distance option, set or compare the number of clusters, and inspect the cluster quality output.",
    r: "scaled <- scale(data[, variables])\nd <- dist(scaled, method = \"euclidean\")\nfit <- hclust(d, method = \"ward.D2\")\nplot(fit)\nclusters <- cutree(fit, k = 3)"
  },
  multidimensionalScaling: {
    jamovi: "Install the jMDS module from the jamovi library and open it from the Analyses menu.\nProvide the distance/dissimilarity matrix or select the variables used to compute distances, depending on the module option.\nChoose the number of dimensions and inspect the stress value, configuration plot, and interpretability of the dimensions.",
    r: "d <- dist(scale(data[, variables]))\nfit <- cmdscale(d, k = 2, eig = TRUE)\nplot(fit$points, xlab = \"Dimension 1\", ylab = \"Dimension 2\")\n# Non-metric MDS: MASS::isoMDS(d, k = 2)"
  },
  chiSquareVariance: {
    jamovi: "Jamovi has limited direct support for the exact chi-square test of one variance.\nUse Exploration > Descriptives to obtain n and the sample variance, then run the exact test in R.\nReport the hypothesised population variance and the chi-square statistic.",
    r: "n <- length(data$score)\ns2 <- var(data$score)\nsigma2_0 <- 100\nchi2 <- (n - 1) * s2 / sigma2_0\np <- 2 * min(pchisq(chi2, df = n - 1), 1 - pchisq(chi2, df = n - 1))\nc(chi_square = chi2, df = n - 1, p = p)"
  },
  varianceFTest: {
    jamovi: "Jamovi can show group variances in Exploration > Descriptives.\nFor the classical F-test of two variances, export the data or use an R module and run var.test().\nConsider Levene's test as a more robust alternative when normality is doubtful.",
    r: "var.test(score ~ group, data = data)\n# Robust alternative:\n# car::leveneTest(score ~ group, data = data)"
  },
  decisionTreeRegression: {
    jamovi: "Install/open the SnowCluster module and choose Decision Tree.\nMove outcome_symptom_score to Dependent and move motivation_score, baseline_distress_score, and sessions_attended to Covariates.\nIn Analysis, set Split set (e.g. 0.7), tick Overall statistics, and under Plots with train set tick Decision tree and Regression tree. Use the regression tree rules and terminal-node values to explain the predicted symptom score.",
    r: "library(rpart)\nlibrary(caret)\nset.seed(1)\nmodel_data <- subset(data, select = -client)\ntrain_id <- createDataPartition(model_data$outcome_symptom_score, p = .70, list = FALSE)\nfit <- rpart(outcome_symptom_score ~ motivation_score + baseline_distress_score + sessions_attended, data = model_data[train_id, ], method = \"anova\", control = rpart.control(cp = .01))\npred <- predict(fit, newdata = model_data[-train_id, ])\npostResample(pred, model_data$outcome_symptom_score[-train_id])\nplotcp(fit)"
  },
  randomForestRegression: {
    jamovi: "Install/open the MLwrapj module, then choose MLwrapj > Regression.\nPut the continuous outcome in Dependent Variable and add numeric predictors to Covariates.\nChoose Random Forest in the model selector, set the training/validation and tree options, then report validation RMSE/R2 and variable importance.",
    r: "library(randomForest)\nlibrary(caret)\nset.seed(1)\nmodel_data <- subset(data, select = -athlete)\ntrain_id <- createDataPartition(model_data$race_time_min, p = .70, list = FALSE)\nfit <- randomForest(race_time_min ~ ., data = model_data[train_id, ], ntree = 500, importance = TRUE)\npred <- predict(fit, newdata = model_data[-train_id, ])\npostResample(pred, model_data$race_time_min[-train_id])\nimportance(fit)"
  },
  knnRegression: {
    jamovi: "Install/open the SnowCluster module, then choose Machine Learning.\nMove wellbeing_score to Dependent and move sleep_hours, stress_score, physical_activity_min_week, and social_support_score to the predictor/covariate fields.\nSelect knn as the training model, standardise/scale predictors if the option is available, choose a training/test split or cross-validation, and report validation RMSE/MAE/R2 plus the selected k.",
    r: "library(caret)\nset.seed(1)\nmodel_data <- subset(data, select = -participant)\nctrl <- trainControl(method = \"cv\", number = 10)\nfit <- train(wellbeing_score ~ sleep_hours + stress_score + physical_activity_min_week + social_support_score, data = model_data, method = \"knn\", trControl = ctrl, preProcess = c(\"center\", \"scale\"), tuneLength = 10)\nfit"
  },
  decisionTreeClassifier: {
    jamovi: "Jamovi has limited built-in support for decision tree classification.\nUse a machine-learning module if installed, or export the data and fit the tree in R.\nValidate with a holdout set or cross-validation and inspect the confusion matrix.",
    r: "library(rpart)\nlibrary(caret)\ndata$class <- factor(data$class)\nmodel_data <- subset(data, select = -participant)\nset.seed(1)\ntrain_id <- createDataPartition(model_data$class, p = .70, list = FALSE)\nfit <- rpart(class ~ ., data = model_data[train_id, ], method = \"class\")\npred <- predict(fit, newdata = model_data[-train_id, ], type = \"class\")\nconfusionMatrix(pred, model_data$class[-train_id])"
  },
  randomForestClassifier: {
    jamovi: "Jamovi has limited built-in support for random forests in the core menus.\nUse a suitable machine-learning module if available, or export the data and fit the model in R.\nReport validation accuracy, balanced accuracy/F1 when classes are imbalanced, and variable importance.",
    r: "library(randomForest)\nlibrary(caret)\ndata$class <- factor(data$class)\nmodel_data <- subset(data, select = -athlete)\nset.seed(1)\ntrain_id <- createDataPartition(model_data$class, p = .70, list = FALSE)\nfit <- randomForest(class ~ ., data = model_data[train_id, ], ntree = 500, importance = TRUE)\npred <- predict(fit, newdata = model_data[-train_id, ])\nconfusionMatrix(pred, model_data$class[-train_id])\nimportance(fit)"
  },
  knnClassifier: {
    jamovi: "Jamovi has limited built-in support for k-nearest-neighbors classification.\nStandardise predictors, then use a machine-learning module if installed or export the data to R.\nChoose k by cross-validation and report a confusion matrix on validation data.",
    r: "library(caret)\ndata$class <- factor(data$class)\nmodel_data <- subset(data, select = -participant)\nset.seed(1)\nctrl <- trainControl(method = \"cv\", number = 10)\nfit <- train(class ~ ., data = model_data, method = \"knn\", trControl = ctrl, preProcess = c(\"center\", \"scale\"), tuneLength = 10)\nfit"
  },
  naiveBayes: {
    jamovi: "Jamovi has limited built-in support for naive Bayes in the core menus.\nUse a machine-learning module if installed, or export the data and fit the model in R.\nInspect predicted probabilities and a validation confusion matrix.",
    r: "library(e1071)\nlibrary(caret)\ndata$class <- factor(data$class)\nmodel_data <- subset(data, select = -student)\nset.seed(1)\ntrain_id <- createDataPartition(model_data$class, p = .70, list = FALSE)\nfit <- naiveBayes(class ~ ., data = model_data[train_id, ])\npred <- predict(fit, newdata = model_data[-train_id, ])\nconfusionMatrix(pred, model_data$class[-train_id])"
  },
  principalComponentAnalysis: {
    jamovi: "Analyses > Factor > Principal Component Analysis\nMove the metric variables into Variables.\nChoose the number of components, inspect loadings, scree plot, explained variance, and decide whether to save component scores.",
    r: "variables <- c(\"attention_accuracy\", \"working_memory\", \"processing_speed\", \"inhibition_score\", \"cognitive_flexibility\", \"verbal_memory\", \"spatial_reasoning\")\nvars <- data[, variables]\nfit <- prcomp(vars, center = TRUE, scale. = TRUE)\nsummary(fit)\nloadings <- fit$rotation\nscores <- fit$x"
  }
};

const procedureScreenshots = {
  oneSampleT: {
    jamovi: {
      en: "assets/jamovi/oneSampleT_ENG.png"
    }
  },
  oneSampleZ: {
    jamovi: {
      en: "assets/jamovi/oneSampleZ_ENG.png"
    }
  },
  oneSampleWilcoxon: {
    jamovi: {
      en: "assets/jamovi/oneSampleWilcoxon_ENG.png"
    }
  },
  independentT: {
    jamovi: {
      en: "assets/jamovi/independentT_ENG.png"
    }
  },
  mannWhitney: {
    jamovi: {
      en: "assets/jamovi/mannWhitney_ENG.png"
    }
  },
  pairedT: {
    jamovi: {
      en: "assets/jamovi/pairedT_ENG.png"
    }
  },
  wilcoxon: {
    jamovi: {
      en: "assets/jamovi/wilcoxon_ENG.png"
    }
  },
  anova: {
    jamovi: {
      en: "assets/jamovi/anova_ENG.png"
    }
  },
  ancova: {
    jamovi: {
      en: "assets/jamovi/ANCOVA_ENG.png"
    }
  },
  manova: {
    jamovi: {
      en: "assets/jamovi/MANOVA_ENG.png"
    }
  },
  mancova: {
    jamovi: {
      en: "assets/jamovi/MANCOVA_ENG.png"
    }
  },
  repeatedAnova: {
    jamovi: {
      en: "assets/jamovi/repeatedAnova_ENG.png"
    }
  },
  twoWayAnova: {
    jamovi: {
      en: "assets/jamovi/twoWayAnova_ENG.png"
    }
  },
  twoWayRepeatedAnova: {
    jamovi: {
      en: "assets/jamovi/twoWayRepeatedAnova_ENG.png"
    }
  },
  kruskalWallis: {
    jamovi: {
      en: "assets/jamovi/kruskalWallis_ENG.png"
    }
  },
  friedman: {
    jamovi: {
      en: "assets/jamovi/friedman_ENG.png"
    }
  },
  pearson: {
    jamovi: {
      en: "assets/jamovi/pearson_ENG.png"
    }
  },
  spearman: {
    jamovi: {
      en: "assets/jamovi/spearman_ENG.png"
    }
  },
  kendall: {
    jamovi: {
      en: "assets/jamovi/kendall_ENG.png"
    }
  },
  chiSquareAssociation: {
    jamovi: {
      en: "assets/jamovi/chiSquareAssociation_ENG.png?v=20260802-posthoc-reporting"
    }
  },
  logLinearModel: {
    jamovi: {
      en: "assets/jamovi/logLinearModel_ENG.png"
    }
  },
  pathAnalysis: {
    jamovi: {
      en: "assets/jamovi/pathAnalysis_ENG.png"
    }
  },
  fisher: {
    jamovi: {
      en: "assets/jamovi/fisher_ENG.png"
    }
  },
  mcnemar: {
    jamovi: {
      en: "assets/jamovi/mcnemar_ENG.png"
    }
  },
  binomialTest: {
    jamovi: {
      en: "assets/jamovi/binomialTest_ENG.png"
    }
  },
  chiSquareGoodness: {
    jamovi: {
      en: "assets/jamovi/chiSquareGoodness_ENG.png"
    }
  },
  linearRegression: {
    jamovi: {
      en: "assets/jamovi/linearRegression_ENG.png"
    }
  },
  logisticRegression: {
    jamovi: {
      en: "assets/jamovi/logisticRegression_ENG.png"
    }
  },
  multinomialRegression: {
    jamovi: {
      en: "assets/jamovi/multinomialRegression_ENG.png"
    }
  },
  decisionTreeRegression: {
    jamovi: {
      en: "assets/jamovi/decisionTreeRegression_ENG.png"
    }
  },
  factorAnalysis: {
    jamovi: {
      en: "assets/jamovi/factorAnalysis_ENG.png"
    }
  },
  clusterAnalysis: {
    jamovi: {
      en: "assets/jamovi/clusterAnalysis_ENG.png"
    }
  },
  multidimensionalScaling: {
    jamovi: {
      en: "assets/jamovi/multidimensionalScaling_ENG.png"
    }
  },
  confirmatoryFactorAnalysis: {
    jamovi: {
      en: "assets/jamovi/confirmatoryFactorAnalysis_ENG.png"
    }
  },
  structuralEquationModeling: {
    jamovi: {
      en: "assets/jamovi/structuralEquationModeling_ENG.png"
    }
  },
  discriminantAnalysis: {
    jamovi: {
      en: "assets/jamovi/Linear%20Discriminant%20Analysis_ENG.png"
    }
  },
  linearMixedModel: {
    jamovi: {
      en: "assets/jamovi/linearMixedModel_ENG.png"
    }
  },
  generalizedLinearMixedModel: {
    jamovi: {
      en: "assets/jamovi/generalizedMixedModel_ENG.png"
    }
  },
  metaCorrelationAnalysis: {
    jamovi: {
      en: "assets/jamovi/metaCorrelation_ENG.png"
    }
  },
  metaMeanDifferenceAnalysis: {
    jamovi: {
      en: "assets/jamovi/metaMeanDifferences_ENG.png"
    }
  },
  metaEffectSizeAnalysis: {
    jamovi: {
      en: "assets/jamovi/metaEffectSizes_ENG.png"
    }
  },
  principalComponentAnalysis: {
    jamovi: {
      en: "assets/jamovi/principalComponentAnalysis_ENG.png"
    }
  }
};

const datasetFiles = {
  ancova: "ancova.csv",
  anova: "anova.csv",
  binomialTest: "binomialTest.csv",
  chiSquareAssociation: "chiSquareAssociation.csv",
  chiSquareGoodness: "chiSquareGoodness.csv",
  chiSquareVariance: "chiSquareVariance.csv",
  clusterAnalysis: "clusterAnalysis.csv",
  decisionTreeClassifier: "decisionTreeClassifier.csv",
  decisionTreeRegression: "decisionTreeRegression.csv",
  discriminantAnalysis: "discriminantAnalysis.csv",
  factorAnalysis: "factorAnalysis.csv",
  confirmatoryFactorAnalysis: "confirmatoryFactorAnalysis.csv",
  fisher: "fisher.csv",
  friedman: "friedman.csv",
  generalizedLinearMixedModel: "generalizedMixedModel.csv",
  independentT: "independentT.csv",
  kendall: "kendall.csv",
  knnRegression: "knnRegression.csv",
  kruskalWallis: "kruskalWallis.csv",
  linearMixedModel: "linearMixedModel.csv",
  linearRegression: "linearRegression.csv",
  logLinearModel: "logLinearModel.csv",
  logisticRegression: "logisticRegression.csv",
  mancova: "mancova.csv",
  manova: "manova.csv",
  mannWhitney: "mannWhitney.csv",
  mcnemar: "mcnemar.csv",
  networkAnalysis: "networkAnalysis.csv",
  metaCorrelationAnalysis: "metaCorrelation.csv",
  metaEffectSizeAnalysis: "metaEffectSizes.csv",
  fixedEffectMetaAnalysis: "metaEffectSizes.csv",
  metaMeanDifferenceAnalysis: "metaMeanDifferences.csv",
  metaRegression: "metaEffectSizes.csv",
  metaOddsRatioAnalysis: "metaOddsRatio.csv",
  metaProportionAnalysis: "metaProportion.csv",
  publicationBiasDiagnostics: "metaEffectSizes.csv",
  randomEffectsMetaAnalysis: "metaEffectSizes.csv",
  subgroupMetaAnalysis: "metaEffectSizes.csv",
  multidimensionalScaling: "multidimensionalScaling.csv",
  multinomialRegression: "multinomialRegression.csv",
  naiveBayes: "naiveBayes.csv",
  nonparametricTwoWayAnova: "nonparametricTwoWayAnova.csv",
  nonparametricTwoWayRepeatedAnova: "nonparametricTwoWayRepeatedAnova.csv",
  oneSampleT: "oneSampleT.csv",
  oneSampleWilcoxon: "oneSampleWilcoxon.csv",
  oneSampleZ: "oneSampleZ.csv",
  ordinalMixedModel: "ordinalMixedModel.csv",
  pairedT: "pairedT.csv",
  pathAnalysis: "pathAnalysis.csv",
  pearson: "pearson.csv",
  principalComponentAnalysis: "principalComponentAnalysis.csv",
  randomForestRegression: "randomForestRegression.csv",
  randomForestClassifier: "randomForestClassifier.csv",
  repeatedAnova: "repeatedAnova.csv",
  spearman: "spearman.csv",
  structuralEquationModeling: "structuralEquationModeling.csv",
  twoWayAnova: "twoWayAnova.csv",
  twoWayRepeatedAnova: "twoWayRepeatedAnova.csv",
  varianceFTest: "varianceFTest.csv",
  knnClassifier: "knnClassifier.csv",
  wilcoxon: "wilcoxon.csv"
};

const effectSizeDefinitions = {
  pearson: { measure: "Pearson's r", rangeType: "r" },
  spearman: { measure: "Spearman's rho", rangeType: "r" },
  kendall: { measure: "Kendall's tau", rangeType: "r" },
  chiSquareAssociation: { measure: "Cramer's V", rangeType: "v" },
  logLinearModel: { measure: "Odds ratios for interaction terms", rangeType: "or" },
  oneSampleT: { measure: "Cohen's d", rangeType: "d" },
  oneSampleZ: { measure: "Cohen's d", rangeType: "d" },
  oneSampleWilcoxon: { measure: "Effect size r", rangeType: "r" },
  independentT: { measure: "Cohen's d / Hedges' g", rangeType: "d" },
  mannWhitney: { measure: "Rank-biserial correlation", rangeType: "r" },
  pairedT: { measure: "Cohen's dz", rangeType: "d" },
  wilcoxon: { measure: "Effect size r", rangeType: "r" },
  anova: { measure: "Partial eta squared", rangeType: "eta" },
  ancova: { measure: "Partial eta squared for the adjusted group effect", rangeType: "eta" },
  manova: { measure: "Pillai's trace or Wilks' lambda; partial eta squared for follow-up tests", rangeType: "eta" },
  mancova: { measure: "Pillai's trace or Wilks' lambda; partial eta squared for adjusted follow-up tests", rangeType: "eta" },
  repeatedAnova: { measure: "Partial eta squared", rangeType: "eta" },
  twoWayAnova: { measure: "Partial eta squared for each main effect and interaction", rangeType: "eta" },
  twoWayRepeatedAnova: { measure: "Partial eta squared for each main effect and interaction", rangeType: "eta" },
  linearMixedModel: { measure: "Marginal and conditional R squared", rangeType: "mixedR2" },
  generalizedLinearMixedModel: { measure: "Odds ratio or incidence-rate ratio", rangeType: "or" },
  ordinalMixedModel: { measure: "Cumulative odds ratio", rangeType: "or" },
  kruskalWallis: { measure: "Epsilon squared", rangeType: "eta" },
  friedman: { measure: "Kendall's W", rangeType: "w" },
  nonparametricTwoWayAnova: { measure: "Partial eta squared or ART effect size by term", rangeType: "eta" },
  nonparametricTwoWayRepeatedAnova: { measure: "Partial eta squared or ART effect size by term", rangeType: "eta" },
  fisher: { measure: "Odds ratio", rangeType: "or" },
  mcnemar: { measure: "Matched-pairs odds ratio", rangeType: "mcnemarOr" },
  binomialTest: { measure: "Cohen's h", rangeType: "binomialH" },
  chiSquareGoodness: { measure: "Cohen's w", rangeType: "w" },
  linearRegression: { measure: "R squared / adjusted R squared", rangeType: "r2" },
  logisticRegression: { measure: "Odds ratio", rangeType: "or" },
  multinomialRegression: { measure: "Odds ratios by outcome category", rangeType: "or" },
  majorMetaAnalysis: { measure: "Pooled effect size with 95% CI plus heterogeneity and optional moderator/bias diagnostics", rangeType: "metaEffect" },
  metaOddsRatioAnalysis: { measure: "Pooled odds ratio with 95% CI", rangeType: "or" },
  metaCorrelationAnalysis: { measure: "Pooled correlation coefficient with 95% CI", rangeType: "r" },
  metaMeanDifferenceAnalysis: { measure: "Pooled standardized or raw mean difference with 95% CI", rangeType: "cohen" },
  metaEffectSizeAnalysis: { measure: "Pooled effect size with 95% CI", rangeType: "metaEffect" },
  metaProportionAnalysis: { measure: "Pooled proportion/prevalence with 95% CI", rangeType: "metaEffect" },
  fixedEffectMetaAnalysis: { measure: "Pooled effect size with 95% CI", rangeType: "metaEffect" },
  randomEffectsMetaAnalysis: { measure: "Pooled average effect with 95% CI, tau2, and I2", rangeType: "metaEffect" },
  subgroupMetaAnalysis: { measure: "Pooled effect by subgroup and between-subgroup test", rangeType: "metaEffect" },
  metaRegression: { measure: "Meta-regression coefficient and residual heterogeneity", rangeType: "metaRegression" },
  publicationBiasDiagnostics: { measure: "Funnel plot asymmetry / Egger's test", rangeType: "publicationBias" },
  pathAnalysis: { measure: "Standardized path coefficients and indirect effect", rangeType: "beta" },
  confirmatoryFactorAnalysis: { measure: "Standardized factor loadings and model fit indices", rangeType: "loading" },
  structuralEquationModeling: { measure: "Standardized loadings, path coefficients, and R squared", rangeType: "beta" },
  discriminantAnalysis: { measure: "Canonical correlation and classification accuracy", rangeType: "canonical" },
  factorAnalysis: { measure: "Factor loadings and variance explained", rangeType: "loading" },
  networkAnalysis: { measure: "Edge weights and centrality indices", rangeType: "r" },
  clusterAnalysis: { measure: "Silhouette width", rangeType: "silhouette" },
  multidimensionalScaling: { measure: "Stress value", rangeType: "stress" },
  chiSquareVariance: { measure: "Variance ratio s2 / sigma2", rangeType: "varianceRatio" },
  varianceFTest: { measure: "Variance ratio F", rangeType: "varianceRatio" },
  decisionTreeRegression: { measure: "No classical effect size is shown in SnowCluster; report validation RMSE/MAE/R squared and the final tree rules", rangeType: "treeRegressionPerformance" },
  randomForestRegression: { measure: "Out-of-sample RMSE and R squared", rangeType: "mlRegression" },
  knnRegression: { measure: "Cross-validated RMSE and R squared", rangeType: "mlRegression" },
  decisionTreeClassifier: { measure: "Accuracy, balanced accuracy, F1, or AUC", rangeType: "mlClassification" },
  randomForestClassifier: { measure: "Accuracy, balanced accuracy, F1, or AUC", rangeType: "mlClassification" },
  knnClassifier: { measure: "Accuracy, balanced accuracy, F1, or AUC", rangeType: "mlClassification" },
  naiveBayes: { measure: "Accuracy, balanced accuracy, F1, or AUC", rangeType: "mlClassification" },
  principalComponentAnalysis: { measure: "Explained variance and component loadings", rangeType: "pca" }
};

const effectSizeLabels = {
  de: {
    heading: "Effektgröße",
    measureLabel: "Häufige Effektgröße",
    rangeLabel: "Übliche Einordnung",
    noteLabel: "Hinweis",
    small: "klein",
    medium: "mittel",
    large: "groß",
    note: "Diese Schwellen sind verbreitete Faustregeln. Interpretation hängt immer von Fachgebiet, Messinstrument, Stichprobe und Studiendesign ab.",
    ranges: {
      d: "|d|: 0.20 klein, 0.50 mittel, 0.80 groß",
      r: "|r|: .10 klein, .30 mittel, .50 groß",
      v: "V: .10 klein, .30 mittel, .50 groß; bei größeren Tabellen nur als grobe Orientierung",
      eta: "eta2: .01 klein, .06 mittel, .14 groß",
      h: "h: 0.20 klein, 0.50 mittel, 0.80 groß",
      binomialH: "Cohen's h wird in jamovi nicht automatisch ausgegeben. Berechnen Sie h = 2 * arcsin(sqrt(p1)) - 2 * arcsin(sqrt(p2)), wobei p1 der beobachtete Anteil und p2 der erwartete Anteil ist. |h|: 0.20 klein, 0.50 mittel, 0.80 groß.",
      w: "w/W: .10 klein, .30 mittel, .50 groß",
      r2: "R2: .02 klein, .13 mittel, .26 groß",
      mixedR2: "Marginales R2 = erklärte Varianz durch feste Effekte; konditionales R2 = feste plus zufällige Effekte. Differenz fachlich interpretieren.",
      beta: "|standardisierte beta|: .10 klein, .30 mittel, .50 groß; indirekte Effekte zusätzlich mit Konfidenzintervall interpretieren",
      canonical: "Kanonische Korrelation: .10 klein, .30 mittel, .50 groß; Klassifikationsgenauigkeit immer gegen Zufall/Basisrate bewerten",
      or: "OR: 1.5 klein, 2.0 mittel, 3.0 groß; Werte unter 1 können zur Interpretation invertiert werden",
      mcnemarOr: "jamovi gibt diesen Odds Ratio nicht aus. Berechnen Sie ihn manuell als b/c oder c/b, wobei b und c die diskordanten Häufigkeiten in der 2x2-Tabelle sind. OR: 1.5 klein, 2.0 mittel, 3.0 groß; Werte unter 1 können zur Interpretation invertiert werden.",
      loading: "Ladungen: .30 bedeutsam, .50 stark, .70 sehr stark; erklärte Varianz ist kontextabhängig",
      silhouette: "Silhouette: < .25 schwach, .26-.50 brauchbar, .51-.70 gut, > .70 stark",
      stress: "Stress: < .05 exzellent, < .10 gut, < .20 akzeptabel; kleinere Werte sind besser",
      varianceRatio: "Verhältnis nahe 1 = geringe Abweichung; 1.5 klein, 2.0 mittel, 3.0 groß als grobe Orientierung",
      metaEffect: "Interpretation hängt von der Effektmetrik ab (z. B. g, r, OR/RR, Prävalenz). Immer 95%-KI, Gewichtung und Heterogenität (I2/tau2) berichten.",
      metaRegression: "Moderator-Koeffizienten beschreiben Studienebenen-Zusammenhänge. Nur bei ausreichender Studienzahl interpretieren und Restheterogenität berichten.",
      publicationBias: "Funnel-Plot-Asymmetrie oder Egger-Test weisen nur auf mögliche Small-Study-Effekte hin; sie beweisen keinen Publikationsbias."
    }
  },
  en: {
    heading: "Effect size",
    measureLabel: "Common effect size",
    rangeLabel: "Common interpretation range",
    noteLabel: "Note",
    small: "small",
    medium: "medium",
    large: "large",
    note: "These thresholds are common rules of thumb. Interpretation always depends on the field, measurement instrument, sample, and study design.",
    ranges: {
      d: "|d|: 0.20 small, 0.50 medium, 0.80 large",
      r: "|r|: .10 small, .30 medium, .50 large",
      v: "V: .10 small, .30 medium, .50 large; only a rough guide for larger tables",
      eta: "eta2: .01 small, .06 medium, .14 large",
      h: "h: 0.20 small, 0.50 medium, 0.80 large",
      binomialH: "Cohen's h is not provided by jamovi. Calculate it manually as h = 2 * arcsin(sqrt(p1)) - 2 * arcsin(sqrt(p2)), where p1 is the observed proportion and p2 is the expected proportion. |h|: 0.20 small, 0.50 medium, 0.80 large.",
      w: "w/W: .10 small, .30 medium, .50 large",
      r2: "R2: .02 small, .13 medium, .26 large",
      mixedR2: "Marginal R2 = variance explained by fixed effects; conditional R2 = fixed plus random effects. Interpret their difference substantively.",
      beta: "|standardized beta|: .10 small, .30 medium, .50 large; interpret indirect effects with confidence intervals",
      canonical: "Canonical correlation: .10 small, .30 medium, .50 large; always compare classification accuracy with chance/baseline accuracy",
      or: "OR: 1.5 small, 2.0 medium, 3.0 large; values below 1 can be inverted for interpretation",
      mcnemarOr: "jamovi does not provide this odds ratio. Calculate it manually as b/c or c/b, where b and c are the discordant frequencies in the 2x2 table. OR: 1.5 small, 2.0 medium, 3.0 large; values below 1 can be inverted for interpretation.",
      loading: "Loadings: .30 meaningful, .50 strong, .70 very strong; variance explained is context-dependent",
      silhouette: "Silhouette: < .25 weak, .26-.50 fair, .51-.70 good, > .70 strong",
      stress: "Stress: < .05 excellent, < .10 good, < .20 acceptable; lower values are better",
      varianceRatio: "Ratio near 1 = little deviation; 1.5 small, 2.0 medium, 3.0 large as a rough guide",
      metaEffect: "Interpretation depends on the effect metric (e.g. g, r, OR/RR, prevalence). Always report the 95% CI, weighting, and heterogeneity (I2/tau2).",
      metaRegression: "Moderator coefficients describe study-level associations. Interpret only with enough studies and report residual heterogeneity.",
      publicationBias: "Funnel-plot asymmetry or Egger's test only suggests possible small-study effects; it does not prove publication bias."
    }
  },
  fr: {
    heading: "Taille d'effet",
    measureLabel: "Taille d'effet fréquente",
    rangeLabel: "Repères d'interprétation courants",
    noteLabel: "Remarque",
    note: "Ces seuils sont des règles pratiques courantes. L'interprétation dépend toujours du domaine, de l'instrument, de l'échantillon et du plan d'étude.",
    ranges: {
      d: "|d| : 0.20 faible, 0.50 moyen, 0.80 fort",
      r: "|r| : .10 faible, .30 moyen, .50 fort",
      v: "V : .10 faible, .30 moyen, .50 fort ; seulement un repère approximatif pour les grands tableaux",
      eta: "eta2 : .01 faible, .06 moyen, .14 fort",
      h: "h : 0.20 faible, 0.50 moyen, 0.80 fort",
      binomialH: "Le h de Cohen n'est pas fourni par jamovi. Calculez-le manuellement avec h = 2 * arcsin(sqrt(p1)) - 2 * arcsin(sqrt(p2)), où p1 est la proportion observée et p2 la proportion attendue. |h| : 0.20 faible, 0.50 moyen, 0.80 fort.",
      w: "w/W : .10 faible, .30 moyen, .50 fort",
      r2: "R2 : .02 faible, .13 moyen, .26 fort",
      mixedR2: "R2 marginal = variance expliquée par les effets fixes ; R2 conditionnel = effets fixes plus aléatoires. Interpréter leur différence substantiellement.",
      beta: "|beta standardisé| : .10 faible, .30 moyen, .50 fort ; interpréter les effets indirects avec des intervalles de confiance",
      canonical: "Corrélation canonique : .10 faible, .30 moyen, .50 fort ; toujours comparer l'exactitude de classification au hasard/taux de base",
      or: "OR : 1.5 faible, 2.0 moyen, 3.0 fort ; les valeurs < 1 peuvent être inversées pour l'interprétation",
      mcnemarOr: "jamovi ne fournit pas cet odds ratio. Calculez-le manuellement comme b/c ou c/b, où b et c sont les fréquences discordantes dans le tableau 2x2. OR : 1.5 faible, 2.0 moyen, 3.0 fort ; les valeurs < 1 peuvent être inversées pour l'interprétation.",
      loading: "Charges : .30 significatif, .50 fort, .70 très fort ; la variance expliquée dépend du contexte",
      silhouette: "Silhouette : < .25 faible, .26-.50 acceptable, .51-.70 bonne, > .70 forte",
      stress: "Stress : < .05 excellent, < .10 bon, < .20 acceptable ; les valeurs plus faibles sont meilleures",
      varianceRatio: "Rapport proche de 1 = faible écart ; 1.5 faible, 2.0 moyen, 3.0 fort comme repère approximatif",
      metaEffect: "L'interprétation dépend de la métrique d'effet (p. ex. g, r, OR/RR, prévalence). Rapportez toujours l'IC à 95 %, la pondération et l'hétérogénéité (I2/tau2).",
      metaRegression: "Les coefficients de modérateur décrivent des associations au niveau des études. Interprétez seulement avec assez d'études et rapportez l'hétérogénéité résiduelle.",
      publicationBias: "L'asymétrie du funnel plot ou le test d'Egger suggèrent seulement de possibles effets de petites études ; ils ne prouvent pas un biais de publication."
    }
  },
  es: {
    heading: "Tamaño del efecto",
    measureLabel: "Tamaño del efecto habitual",
    rangeLabel: "Rango de interpretación habitual",
    noteLabel: "Nota",
    note: "Estos umbrales son reglas prácticas frecuentes. La interpretación depende siempre del área, el instrumento, la muestra y el diseño del estudio.",
    ranges: {
      d: "|d|: 0.20 pequeño, 0.50 medio, 0.80 grande",
      r: "|r|: .10 pequeño, .30 medio, .50 grande",
      v: "V: .10 pequeño, .30 medio, .50 grande; solo como guía aproximada en tablas grandes",
      eta: "eta2: .01 pequeño, .06 medio, .14 grande",
      h: "h: 0.20 pequeño, 0.50 medio, 0.80 grande",
      binomialH: "jamovi no proporciona la h de Cohen. Calcúlela manualmente como h = 2 * arcsin(sqrt(p1)) - 2 * arcsin(sqrt(p2)), donde p1 es la proporción observada y p2 la proporción esperada. |h|: 0.20 pequeño, 0.50 medio, 0.80 grande.",
      w: "w/W: .10 pequeño, .30 medio, .50 grande",
      r2: "R2: .02 pequeño, .13 medio, .26 grande",
      mixedR2: "R2 marginal = varianza explicada por efectos fijos; R2 condicional = efectos fijos más aleatorios. Interprete su diferencia sustantivamente.",
      beta: "|beta estandarizado|: .10 pequeño, .30 medio, .50 grande; interprete los efectos indirectos con intervalos de confianza",
      canonical: "Correlación canónica: .10 pequeña, .30 media, .50 grande; compare siempre la exactitud de clasificación con el azar/tasa base",
      or: "OR: 1.5 pequeño, 2.0 medio, 3.0 grande; los valores < 1 pueden invertirse para interpretarlos",
      mcnemarOr: "jamovi no proporciona este odds ratio. Calcúlelo manualmente como b/c o c/b, donde b y c son las frecuencias discordantes en la tabla 2x2. OR: 1.5 pequeño, 2.0 medio, 3.0 grande; los valores < 1 pueden invertirse para interpretarlos.",
      loading: "Cargas: .30 significativa, .50 fuerte, .70 muy fuerte; la varianza explicada depende del contexto",
      silhouette: "Silueta: < .25 débil, .26-.50 aceptable, .51-.70 buena, > .70 fuerte",
      stress: "Estrés: < .05 excelente, < .10 bueno, < .20 aceptable; valores menores son mejores",
      varianceRatio: "Razón cercana a 1 = poca desviación; 1.5 pequeño, 2.0 medio, 3.0 grande como guía aproximada",
      metaEffect: "La interpretación depende de la métrica del efecto (p. ej. g, r, OR/RR, prevalencia). Informe siempre IC del 95 %, ponderación y heterogeneidad (I2/tau2).",
      metaRegression: "Los coeficientes de moderador describen asociaciones a nivel de estudio. Interprete solo con suficientes estudios y reporte heterogeneidad residual.",
      publicationBias: "La asimetría del funnel plot o la prueba de Egger solo sugieren posibles efectos de estudios pequeños; no prueban sesgo de publicación."
    }
  },
  it: {
    heading: "Dimensione dell'effetto",
    measureLabel: "Dimensione dell'effetto comune",
    rangeLabel: "Intervallo interpretativo comune",
    noteLabel: "Nota",
    note: "Queste soglie sono regole pratiche comuni. L'interpretazione dipende sempre dal settore, dallo strumento, dal campione e dal disegno dello studio.",
    ranges: {
      d: "|d|: 0.20 piccolo, 0.50 medio, 0.80 grande",
      r: "|r|: .10 piccolo, .30 medio, .50 grande",
      v: "V: .10 piccolo, .30 medio, .50 grande; solo come guida approssimativa per tabelle grandi",
      eta: "eta2: .01 piccolo, .06 medio, .14 grande",
      h: "h: 0.20 piccolo, 0.50 medio, 0.80 grande",
      binomialH: "jamovi non fornisce h di Cohen. Calcolalo manualmente come h = 2 * arcsin(sqrt(p1)) - 2 * arcsin(sqrt(p2)), dove p1 è la proporzione osservata e p2 la proporzione attesa. |h|: 0.20 piccolo, 0.50 medio, 0.80 grande.",
      w: "w/W: .10 piccolo, .30 medio, .50 grande",
      r2: "R2: .02 piccolo, .13 medio, .26 grande",
      mixedR2: "R2 marginale = varianza spiegata dagli effetti fissi; R2 condizionale = effetti fissi più casuali. Interpreta la differenza in modo sostanziale.",
      beta: "|beta standardizzato|: .10 piccolo, .30 medio, .50 grande; interpreta gli effetti indiretti con intervalli di confidenza",
      canonical: "Correlazione canonica: .10 piccola, .30 media, .50 grande; confronta sempre l'accuratezza di classificazione con il caso/tasso base",
      or: "OR: 1.5 piccolo, 2.0 medio, 3.0 grande; i valori < 1 possono essere invertiti per l'interpretazione",
      mcnemarOr: "jamovi non fornisce questo odds ratio. Calcolalo manualmente come b/c o c/b, dove b e c sono le frequenze discordanti nella tabella 2x2. OR: 1.5 piccolo, 2.0 medio, 3.0 grande; i valori < 1 possono essere invertiti per l'interpretazione.",
      loading: "Carichi: .30 significativo, .50 forte, .70 molto forte; la varianza spiegata dipende dal contesto",
      silhouette: "Silhouette: < .25 debole, .26-.50 discreta, .51-.70 buona, > .70 forte",
      stress: "Stress: < .05 eccellente, < .10 buono, < .20 accettabile; valori più bassi sono migliori",
      varianceRatio: "Rapporto vicino a 1 = poca deviazione; 1.5 piccolo, 2.0 medio, 3.0 grande come guida approssimativa",
      metaEffect: "L'interpretazione dipende dalla metrica dell'effetto (es. g, r, OR/RR, prevalenza). Riporta sempre IC 95%, ponderazione ed eterogeneità (I2/tau2).",
      metaRegression: "I coefficienti dei moderatori descrivono associazioni a livello di studio. Interpretali solo con abbastanza studi e riporta eterogeneità residua.",
      publicationBias: "Asimmetria del funnel plot o test di Egger suggeriscono solo possibili effetti dei piccoli studi; non provano bias di pubblicazione."
    }
  }
};

const mlEffectSizeRanges = {
  de: {
    mlRegression: "RMSE/MAE: niedriger ist besser; R2 nahe 1 zeigt bessere Vorhersage. Immer mit Testdaten, Kreuzvalidierung oder Baseline vergleichen.",
    treeRegressionPerformance: "SnowCluster berichtet für den Entscheidungsbaum keine klassische Effektgröße. Interpretieren Sie Vorhersagegüte (z. B. RMSE/MAE/R2, falls angezeigt oder berechnet), Split set/Validierung und die inhaltlichen Entscheidungsregeln.",
    mlClassification: "Accuracy nur bei balancierten Klassen interpretieren. Bei unbalancierten Klassen balanced accuracy, F1, Sensitivität/Spezifität oder AUC berichten.",
    pca: "Kumulierte erklärte Varianz und Ladungen gemeinsam interpretieren; häufig werden Komponenten mit Eigenwert > 1, Scree-Plot und inhaltlicher Interpretierbarkeit geprüft."
  },
  en: {
    mlRegression: "RMSE/MAE: lower is better; R2 closer to 1 indicates better prediction. Always compare with test data, cross-validation, or a baseline model.",
    treeRegressionPerformance: "SnowCluster does not report a classical effect size for this decision tree. Interpret predictive performance (e.g. RMSE/MAE/R2 if shown or computed), the split set/validation strategy, and the substantive decision rules.",
    mlClassification: "Interpret accuracy only when classes are balanced. For imbalanced classes report balanced accuracy, F1, sensitivity/specificity, or AUC.",
    pca: "Interpret cumulative explained variance together with loadings; common guides include eigenvalues > 1, the scree plot, and substantive interpretability."
  },
  fr: {
    mlRegression: "RMSE/MAE : plus faible est meilleur ; R2 proche de 1 indique une meilleure prédiction. Toujours comparer avec des données test, une validation croisée ou un modèle de base.",
    treeRegressionPerformance: "SnowCluster ne rapporte pas de taille d'effet classique pour cet arbre de décision. Interprétez la performance prédictive (p. ex. RMSE/MAE/R2 si affichés ou calculés), la stratégie split set/validation et les règles de décision substantives.",
    mlClassification: "Interprétez l'exactitude seulement si les classes sont équilibrées. Si les classes sont déséquilibrées, rapportez exactitude équilibrée, F1, sensibilité/spécificité ou AUC.",
    pca: "Interprétez la variance expliquée cumulée avec les charges ; repères fréquents : valeurs propres > 1, scree plot et interprétabilité substantielle."
  },
  es: {
    mlRegression: "RMSE/MAE: menor es mejor; R2 cercano a 1 indica mejor predicción. Compare siempre con datos de prueba, validación cruzada o un modelo base.",
    treeRegressionPerformance: "SnowCluster no informa un tamaño del efecto clásico para este árbol de decisión. Interprete el rendimiento predictivo (p. ej. RMSE/MAE/R2 si se muestran o calculan), la estrategia split set/validación y las reglas de decisión sustantivas.",
    mlClassification: "Interprete la exactitud solo con clases balanceadas. Con clases desbalanceadas reporte exactitud balanceada, F1, sensibilidad/especificidad o AUC.",
    pca: "Interprete la varianza explicada acumulada junto con las cargas; guías habituales son autovalores > 1, scree plot e interpretabilidad sustantiva."
  },
  it: {
    mlRegression: "RMSE/MAE: più basso è meglio; R2 vicino a 1 indica migliore predizione. Confronta sempre con dati test, validazione incrociata o un modello baseline.",
    treeRegressionPerformance: "SnowCluster non riporta una dimensione dell'effetto classica per questo albero decisionale. Interpreta la performance predittiva (ad es. RMSE/MAE/R2 se mostrati o calcolati), la strategia split set/validazione e le regole decisionali sostanziali.",
    mlClassification: "Interpreta l'accuratezza solo con classi bilanciate. Con classi sbilanciate riporta balanced accuracy, F1, sensibilità/specificità o AUC.",
    pca: "Interpreta la varianza spiegata cumulata insieme ai carichi; guide comuni sono autovalori > 1, scree plot e interpretabilità sostanziale."
  }
};

Object.entries(mlEffectSizeRanges).forEach(([language, ranges]) => {
  if (effectSizeLabels[language]) Object.assign(effectSizeLabels[language].ranges, ranges);
});

const clusterAlgorithmGuides = {
  de: {
    heading: "Häufige Clustering-Algorithmen",
    familyLabel: "Methodenfamilie",
    family: "Clusteranalyse ist die übergeordnete Methodenfamilie. Sie beschreibt das Ziel, ähnliche Personen oder Objekte anhand mehrerer Merkmale zu gruppieren.",
    algorithms: [
      { name: "k-means-Clustering", text: "Sinnvoll, wenn die Anzahl der Cluster vorab festgelegt wird und eher kompakte Cluster um Zentren erwartet werden." },
      { name: "Hierarchisches Clustering", text: "Sinnvoll, wenn eine Baumstruktur oder ein Dendrogramm der Ähnlichkeiten interpretiert werden soll." },
      { name: "DBSCAN", text: "Sinnvoll, wenn Cluster unregelmäßige Formen haben können und Ausreißer oder Rauschen wichtig sind." },
      { name: "Gaussian-Mixture-Modelle", text: "Sinnvoll, wenn Cluster probabilistisch als überlappende Verteilungen modelliert werden sollen." }
    ],
    noteLabel: "Berichten",
    note: "Immer Skalierung/Standardisierung, Distanzmaß, Algorithmus, Anzahl der Cluster, Clustergrößen und inhaltliche Interpretation angeben."
  },
  en: {
    heading: "Common clustering algorithms",
    familyLabel: "Method family",
    family: "Cluster analysis is the broader methodological family. It describes the goal of grouping similar people or objects based on several features.",
    algorithms: [
      { name: "k-means clustering", text: "Useful when the number of clusters is set in advance and compact clusters around centroids are plausible." },
      { name: "Hierarchical clustering", text: "Useful when you want to inspect a tree structure or dendrogram of similarities." },
      { name: "DBSCAN", text: "Useful when clusters may have irregular shapes and outliers or noise are substantively important." },
      { name: "Gaussian mixture models", text: "Useful when clusters should be modelled probabilistically as possibly overlapping distributions." }
    ],
    noteLabel: "Report",
    note: "Always report scaling/standardisation, distance measure, algorithm, number of clusters, cluster sizes, and substantive interpretation."
  },
  fr: {
    heading: "Algorithmes de clustering courants",
    familyLabel: "Famille de méthodes",
    family: "L'analyse de clusters est la famille méthodologique générale. Elle décrit l'objectif de regrouper des personnes ou objets similaires à partir de plusieurs caractéristiques.",
    algorithms: [
      { name: "Clustering k-means", text: "Utile lorsque le nombre de clusters est fixé à l'avance et que des clusters compacts autour de centres sont plausibles." },
      { name: "Clustering hiérarchique", text: "Utile lorsque l'on souhaite examiner une structure arborescente ou un dendrogramme des similarités." },
      { name: "DBSCAN", text: "Utile lorsque les clusters peuvent avoir des formes irrégulières et que les valeurs aberrantes ou le bruit sont importants." },
      { name: "Modèles de mélanges gaussiens", text: "Utile lorsque les clusters doivent être modélisés de manière probabiliste comme des distributions éventuellement superposées." }
    ],
    noteLabel: "Rapporter",
    note: "Toujours rapporter la mise à l'échelle/standardisation, la mesure de distance, l'algorithme, le nombre de clusters, les tailles des clusters et l'interprétation substantielle."
  },
  es: {
    heading: "Algoritmos habituales de clusterización",
    familyLabel: "Familia de métodos",
    family: "El análisis de conglomerados es la familia metodológica general. Describe el objetivo de agrupar personas u objetos similares a partir de varias características.",
    algorithms: [
      { name: "k-medias", text: "Útil cuando el número de conglomerados se fija de antemano y son plausibles conglomerados compactos alrededor de centroides." },
      { name: "Clusterización jerárquica", text: "Útil cuando se desea inspeccionar una estructura en árbol o un dendrograma de similitudes." },
      { name: "DBSCAN", text: "Útil cuando los conglomerados pueden tener formas irregulares y los valores atípicos o el ruido son importantes." },
      { name: "Modelos de mezcla gaussiana", text: "Útil cuando los conglomerados deben modelarse probabilísticamente como distribuciones posiblemente solapadas." }
    ],
    noteLabel: "Informar",
    note: "Informe siempre la escalización/estandarización, la medida de distancia, el algoritmo, el número de conglomerados, los tamaños de los conglomerados y la interpretación sustantiva."
  },
  it: {
    heading: "Algoritmi di clustering comuni",
    familyLabel: "Famiglia di metodi",
    family: "L'analisi dei cluster è la famiglia metodologica più ampia. Descrive l'obiettivo di raggruppare persone o oggetti simili in base a più caratteristiche.",
    algorithms: [
      { name: "Clustering k-means", text: "Utile quando il numero di cluster è definito in anticipo e sono plausibili cluster compatti attorno ai centroidi." },
      { name: "Clustering gerarchico", text: "Utile quando si vuole esaminare una struttura ad albero o un dendrogramma delle somiglianze." },
      { name: "DBSCAN", text: "Utile quando i cluster possono avere forme irregolari e outlier o rumore sono importanti." },
      { name: "Modelli a mistura gaussiana", text: "Utile quando i cluster devono essere modellati probabilisticamente come distribuzioni eventualmente sovrapposte." }
    ],
    noteLabel: "Riportare",
    note: "Riportare sempre scaling/standardizzazione, misura di distanza, algoritmo, numero di cluster, dimensioni dei cluster e interpretazione sostanziale."
  }
};

const state = {
  currentNode: "goal",
  history: [],
  language: "en",
  procedureTool: "jamovi"
};

const assumptionDialogCopy = {
  de: {
    kicker: "Voraussetzung",
    detailsAction: "Details",
    howToCheck: "Prüfung",
    whatToReport: "Berichten",
    close: "Details schließen"
  },
  en: {
    kicker: "Assumption",
    detailsAction: "Details",
    howToCheck: "How to check",
    whatToReport: "What to report",
    close: "Close assumption details"
  },
  fr: {
    kicker: "Condition",
    detailsAction: "Détails",
    howToCheck: "Comment vérifier",
    whatToReport: "À rapporter",
    close: "Fermer les détails"
  },
  es: {
    kicker: "Supuesto",
    detailsAction: "Detalles",
    howToCheck: "Cómo comprobarlo",
    whatToReport: "Qué reportar",
    close: "Cerrar detalles"
  },
  it: {
    kicker: "Assunzione",
    detailsAction: "Dettagli",
    howToCheck: "Come verificarla",
    whatToReport: "Cosa riportare",
    close: "Chiudi dettagli"
  }
};

const elements = {
  questionPanel: document.querySelector("#questionPanel"),
  resultPanel: document.querySelector("#resultPanel"),
  methodPreview: document.querySelector("#methodPreview"),
  questionText: document.querySelector("#questionText"),
  questionHint: document.querySelector("#questionHint"),
  questionArea: document.querySelector("#questionArea"),
  answers: document.querySelector("#answers"),
  historyList: document.querySelector("#historyList"),
  emptyHistory: document.querySelector("#emptyHistory"),
  pathProgressLabel: document.querySelector("#pathProgressLabel"),
  pathProgressPercent: document.querySelector("#pathProgressPercent"),
  pathProgressFill: document.querySelector("#pathProgressFill"),
  stepLabel: document.querySelector("#stepLabel"),
  modeLabel: document.querySelector("#modeLabel"),
  progressFill: document.querySelector("#progressFill"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  assumptionsList: document.querySelector("#assumptionsList"),
  scenarioSection: document.querySelector("#scenarioSection"),
  scenarioList: document.querySelector("#scenarioList"),
  clusterGuideSection: null,
  clusterGuideHeading: null,
  clusterGuideList: null,
  effectSizeSection: null,
  effectSizeHeading: null,
  effectSizeList: null,
  datasetSection: null,
  datasetHeading: null,
  datasetText: null,
  datasetLink: null,
  apaSection: document.querySelector("#apaSection"),
  apaHeading: document.querySelector("#apaHeading"),
  apaReportList: document.querySelector("#apaReportList"),
  procedureSelect: document.querySelector("#procedureSelect"),
  procedureOutput: document.querySelector("#procedureOutput"),
  jamoviScreenshot: document.querySelector("#jamoviScreenshot"),
  jamoviScreenshotImage: document.querySelector("#jamoviScreenshotImage"),
  jamoviScreenshotCaption: document.querySelector("#jamoviScreenshotCaption"),
  backButton: document.querySelector("#backButton"),
  resetButton: document.querySelector("#resetButton"),
  copyButton: document.querySelector("#copyButton"),
  exploreButton: document.querySelector("#exploreButton"),
  searchButton: document.querySelector("#searchButton"),
  searchDialog: document.querySelector("#searchDialog"),
  closeSearchButton: document.querySelector("#closeSearchButton"),
  searchInput: document.querySelector("#searchInput"),
  searchResults: document.querySelector("#searchResults"),
  searchEmpty: document.querySelector("#searchEmpty"),
  helpButton: document.querySelector("#helpButton"),
  helpDialog: document.querySelector("#helpDialog"),
  closeHelpButton: document.querySelector("#closeHelpButton"),
  assumptionDialog: document.querySelector("#assumptionDialog"),
  closeAssumptionButton: document.querySelector("#closeAssumptionButton"),
  assumptionDialogKicker: document.querySelector("#assumptionDialogKicker"),
  assumptionDialogTitle: document.querySelector("#assumptionDialogTitle"),
  assumptionDialogSummary: document.querySelector("#assumptionDialogSummary"),
  assumptionCheckSection: document.querySelector("#assumptionCheckSection"),
  assumptionCheckHeading: document.querySelector("#assumptionCheckHeading"),
  assumptionCheckText: document.querySelector("#assumptionCheckText"),
  assumptionReportSection: document.querySelector("#assumptionReportSection"),
  assumptionReportHeading: document.querySelector("#assumptionReportHeading"),
  assumptionReportText: document.querySelector("#assumptionReportText"),
  languageSelect: document.querySelector("#languageSelect"),
  toast: document.querySelector("#toast"),
  matrixCells: [...document.querySelectorAll(".matrix-cell")],
  labPathSteps: [...document.querySelectorAll(".lab-path-step")],
  translatedText: [...document.querySelectorAll("[data-i18n]")]
};

function getPack() {
  return languagePacks[state.language] || languagePacks.de;
}

function getAssumptionDialogCopy() {
  return assumptionDialogCopy[state.language] || assumptionDialogCopy.en;
}

function applyStaticText() {
  const pack = getPack();
  const assumptionCopy = getAssumptionDialogCopy();
  document.documentElement.lang = pack.lang;
  document.title = pack.ui.appTitle;
  elements.translatedText.forEach((element) => {
    const key = element.dataset.i18n;
    if (pack.ui[key]) element.textContent = pack.ui[key];
  });
  elements.searchButton.setAttribute("aria-label", pack.ui.searchTitle);
  elements.searchButton.title = pack.ui.searchTitle;
  elements.closeSearchButton.setAttribute("aria-label", pack.ui.closeSearch);
  elements.closeSearchButton.title = pack.ui.closeSearch;
  elements.searchInput.placeholder = pack.ui.searchPlaceholder;
  elements.helpButton.setAttribute("aria-label", pack.ui.helpTitle);
  elements.helpButton.title = pack.ui.helpTitle;
  elements.closeHelpButton.setAttribute("aria-label", pack.ui.closeHelp);
  elements.closeHelpButton.title = pack.ui.closeHelp;
  elements.closeAssumptionButton.setAttribute("aria-label", assumptionCopy.close);
  elements.closeAssumptionButton.title = assumptionCopy.close;
  elements.assumptionDialogKicker.textContent = assumptionCopy.kicker;
  elements.assumptionCheckHeading.textContent = assumptionCopy.howToCheck;
  elements.assumptionReportHeading.textContent = assumptionCopy.whatToReport;
  elements.languageSelect.value = state.language;
  if (elements.searchDialog.open) renderSearchResults();
}

function render() {
  const pack = getPack();
  const currentTree = pack.tree;
  const node = currentTree[state.currentNode];
  if (!node) {
    renderResult(state.currentNode);
    return;
  }

  applyStaticText();
  elements.resultPanel.hidden = true;
  elements.methodPreview.hidden = false;
  elements.questionPanel.hidden = false;
  elements.questionArea.textContent = node.area;
  elements.questionText.textContent = node.question;
  elements.questionHint.textContent = node.hint;
  elements.stepLabel.textContent = `${pack.ui.questionStep} ${state.history.length + 1}`;
  elements.modeLabel.textContent = node.step;
  updateProgressDisplay(pack, false);

  elements.answers.replaceChildren(
    ...node.answers.map((answer, answerIndex) => {
      const button = document.createElement("button");
      const targetAction = answer.result ? pack.ui.resultBranchAction : pack.ui.nextQuestionAction;
      button.className = `answer-button ${answer.result ? "branch-result" : "branch-question"}`;
      button.type = "button";
      const copy = document.createElement("span");
      const label = document.createElement("span");
      const action = document.createElement("span");
      const actionText = document.createElement("span");
      const arrow = document.createElement("span");
      copy.className = "branch-copy";
      label.className = "branch-label";
      action.className = "branch-action";
      actionText.className = "branch-action-text";
      arrow.className = "branch-arrow";
      label.textContent = answer.label;
      actionText.textContent = targetAction;
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "›";
      copy.append(label);
      action.append(actionText, arrow);
      button.append(copy, action);
      button.setAttribute("aria-label", `${answer.label}. ${targetAction}`);
      button.addEventListener("click", () => chooseAnswer(answer, answerIndex));
      return button;
    })
  );
  elements.answers.style.setProperty("--branch-count", node.answers.length);

  renderHistory();
  setActiveMatrix(getStageForNode(state.currentNode));
  elements.backButton.disabled = state.history.length === 0;
}

function chooseAnswer(answer, answerIndex) {
  state.history.push({
    nodeId: state.currentNode,
    answerIndex
  });

  state.currentNode = answer.result || answer.next;
  render();
}

function updateProgressDisplay(pack, isResult) {
  const step = isResult ? totalDecisionSteps : Math.min(state.history.length + 1, totalDecisionSteps);
  const percent = isResult ? 100 : Math.min(Math.round((step / totalDecisionSteps) * 100), 92);
  elements.stepLabel.textContent = isResult ? pack.ui.resultStep : `${pack.ui.questionStep} ${state.history.length + 1}`;
  elements.progressFill.style.width = `${percent}%`;
  elements.pathProgressLabel.textContent = isResult
    ? pack.ui.resultStep
    : `${pack.ui.questionStep} ${step} ${pack.ui.pathProgressOf} ${totalDecisionSteps}`;
  elements.pathProgressPercent.textContent = `${percent}%`;
  elements.pathProgressFill.style.width = `${percent}%`;
}

function renderResult(resultId) {
  const pack = getPack();
  const result = pack.results[resultId];
  if (!result) return;

  applyStaticText();
  elements.questionPanel.hidden = true;
  elements.methodPreview.hidden = true;
  elements.resultPanel.hidden = false;
  elements.resultTitle.textContent = result.title;
  elements.resultSummary.textContent = result.summary;
  elements.procedureSelect.value = state.procedureTool;
  renderProcedure(resultId);
  renderScenarios(resultId, pack);
  renderDatasetDownload(resultId, pack);
  renderEffectSize(resultId, pack);
  renderClusterGuide(resultId, pack);
  renderApaReport(resultId, pack);
  renderAssumptions(resultId, result);
  elements.stepLabel.textContent = pack.ui.resultStep;
  elements.modeLabel.textContent = pack.ui.resultMode;
  updateProgressDisplay(pack, true);
  elements.backButton.disabled = false;
  renderHistory();
  setActiveMatrix("result");
}

function renderAssumptions(resultId, result) {
  const copy = getAssumptionDialogCopy();
  const reviewedDetails = getAssumptionDetails(resultId, "en");
  const assumptionItems = state.language === "en" && reviewedDetails.length
    ? reviewedDetails.map((detail) => ({ assumption: detail.label, detail }))
    : result.assumptions.map((assumption, assumptionIndex) => ({
        assumption,
        detail: getAssumptionDetail(resultId, assumptionIndex)
      }));

  elements.assumptionsList.replaceChildren(
    ...assumptionItems.map(({ assumption, detail }) => {
      const li = document.createElement("li");

      if (!detail) {
        li.textContent = assumption;
        return li;
      }

      const button = document.createElement("button");
      const label = document.createElement("span");
      const action = document.createElement("span");
      button.className = "assumption-detail-button";
      button.type = "button";
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-label", `${assumption}. ${copy.detailsAction}`);
      label.textContent = assumption;
      action.className = "assumption-detail-action";
      action.textContent = copy.detailsAction;
      button.append(label, action);
      button.addEventListener("click", () => openAssumptionDialog(assumption, detail));
      li.append(button);
      return li;
    })
  );
}

function normalizeAssumptionText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getAssumptionDetails(resultId, language = state.language) {
  const packs = window.assumptionDetails || {};
  return packs[language]?.[resultId] || packs.en?.[resultId] || packs[resultId] || [];
}

function getAssumptionDetail(resultId, assumptionIndex) {
  const englishDetails = getAssumptionDetails(resultId, "en");
  const englishAssumption = languagePacks.en?.results?.[resultId]?.assumptions?.[assumptionIndex];
  if (!englishAssumption) return null;
  const normalizedAssumption = normalizeAssumptionText(englishAssumption);
  const englishDetail = englishDetails.find((detail) => normalizeAssumptionText(detail.label) === normalizedAssumption);
  if (!englishDetail) return null;

  const localizedDetails = getAssumptionDetails(resultId, state.language);
  return localizedDetails.find((detail) => detail.id === englishDetail.id) || englishDetail;
}

function openAssumptionDialog(displayAssumption, detail) {
  const copy = getAssumptionDialogCopy();
  elements.assumptionDialogKicker.textContent = `${copy.kicker} · ${elements.resultTitle.textContent}`;
  elements.assumptionDialogTitle.textContent = displayAssumption;
  elements.assumptionDialogSummary.textContent = detail.detail;
  elements.assumptionCheckSection.hidden = !detail.howToCheck;
  elements.assumptionCheckText.textContent = detail.howToCheck || "";
  elements.assumptionReportSection.hidden = !detail.whatToReport;
  elements.assumptionReportText.textContent = detail.whatToReport || "";

  if (typeof elements.assumptionDialog.showModal === "function") {
    elements.assumptionDialog.showModal();
  } else {
    elements.assumptionDialog.setAttribute("open", "");
  }
}

function closeAssumptionDialog() {
  if (elements.assumptionDialog.open) elements.assumptionDialog.close();
}

function renderScenarios(resultId, pack) {
  const scenarios = getResultScenarios(resultId, pack.lang);
  elements.scenarioSection.hidden = !scenarios;
  elements.scenarioList.replaceChildren();
  if (!scenarios) return;

  elements.scenarioList.replaceChildren(
    createScenarioItem(pack.ui.psychologyScenarioLabel, scenarios.psychology),
    createScenarioItem(pack.ui.sportScenarioLabel, scenarios.sport)
  );
}

function createScenarioItem(label, text) {
  const item = document.createElement("article");
  const title = document.createElement("h3");
  const copy = document.createElement("p");
  item.className = "scenario-item";
  title.textContent = label;
  copy.textContent = text;
  item.append(title, copy);
  return item;
}

function getResultScenarios(resultId, language) {
  const packs = window.resultScenarioPacks || {};
  return packs[language]?.[resultId] || packs.en?.[resultId] || null;
}

function ensureDatasetElements() {
  if (elements.datasetSection) return;
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const text = document.createElement("p");
  const link = document.createElement("a");
  section.className = "dataset-section";
  section.id = "datasetSection";
  heading.id = "datasetHeading";
  text.id = "datasetText";
  link.id = "datasetLink";
  link.className = "dataset-download-link";
  link.download = "";
  section.append(heading, text, link);
  elements.scenarioSection.before(section);
  elements.datasetSection = section;
  elements.datasetHeading = heading;
  elements.datasetText = text;
  elements.datasetLink = link;
}

function renderDatasetDownload(resultId, pack) {
  ensureDatasetElements();
  const filename = datasetFiles[resultId];
  elements.datasetSection.hidden = !filename;
  if (!filename) return;

  const href = `data/examples/${encodeURIComponent(filename)}`;
  elements.datasetHeading.textContent = pack.ui.datasetHeading;
  elements.datasetText.textContent = pack.ui.datasetText;
  elements.datasetLink.href = href;
  elements.datasetLink.download = filename;
  elements.datasetLink.textContent = pack.ui.downloadDataset;
  elements.datasetLink.setAttribute("aria-label", `${pack.ui.downloadDataset}: ${filename}`);
}

function ensureEffectSizeElements() {
  if (elements.effectSizeSection) return;
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const list = document.createElement("div");
  section.className = "effect-size-section apa-section";
  section.id = "effectSizeSection";
  heading.id = "effectSizeHeading";
  list.className = "apa-list";
  list.id = "effectSizeList";
  section.append(heading, list);
  elements.apaSection.before(section);
  elements.effectSizeSection = section;
  elements.effectSizeHeading = heading;
  elements.effectSizeList = list;
}

function renderEffectSize(resultId, pack) {
  ensureEffectSizeElements();
  const definition = effectSizeDefinitions[resultId];
  const labels = effectSizeLabels[pack.lang] || effectSizeLabels.en;
  elements.effectSizeSection.hidden = !definition;
  elements.effectSizeList.replaceChildren();
  if (!definition) return;

  elements.effectSizeHeading.textContent = labels.heading;
  elements.effectSizeList.replaceChildren(
    createApaReportItem(labels.measureLabel, definition.measure),
    createApaReportItem(labels.rangeLabel, labels.ranges[definition.rangeType] || ""),
    createApaReportItem(labels.noteLabel, labels.note)
  );
}

function ensureClusterGuideElements() {
  if (elements.clusterGuideSection) return;
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const list = document.createElement("div");
  section.className = "cluster-guide-section apa-section";
  section.id = "clusterGuideSection";
  heading.id = "clusterGuideHeading";
  list.className = "apa-list";
  list.id = "clusterGuideList";
  section.append(heading, list);
  elements.apaSection.before(section);
  elements.clusterGuideSection = section;
  elements.clusterGuideHeading = heading;
  elements.clusterGuideList = list;
}

function renderClusterGuide(resultId, pack) {
  ensureClusterGuideElements();
  const guide = resultId === "clusterAnalysis" ? (clusterAlgorithmGuides[pack.lang] || clusterAlgorithmGuides.en) : null;
  elements.clusterGuideSection.hidden = !guide;
  elements.clusterGuideList.replaceChildren();
  if (!guide) return;

  elements.clusterGuideHeading.textContent = guide.heading;
  elements.clusterGuideList.replaceChildren(
    createApaReportItem(guide.familyLabel, guide.family),
    ...guide.algorithms.map((algorithm) => createApaReportItem(algorithm.name, algorithm.text)),
    createApaReportItem(guide.noteLabel, guide.note)
  );
}

function renderApaReport(resultId, pack) {
  const reportPack = getApaReportPack(pack.lang);
  const report = reportPack?.tests?.[resultId];
  elements.apaSection.hidden = !report;
  elements.apaReportList.replaceChildren();
  if (!report) return;

  elements.apaHeading.textContent = reportPack.heading;
  elements.apaReportList.replaceChildren(
    createApaReportItem(reportPack.templateLabel, report.template, true),
    createApaReportItem(reportPack.valuesLabel, report.metrics.join(", ")),
    createApaReportItem(reportPack.noteLabel, reportPack.note)
  );
}

function createApaReportItem(label, text, isTemplate = false) {
  const item = document.createElement("article");
  const title = document.createElement("h3");
  const copy = isTemplate ? document.createElement("code") : document.createElement("p");
  item.className = "apa-item";
  title.textContent = label;
  copy.textContent = text;
  item.append(title, copy);
  return item;
}

function getApaReportPack(language) {
  const packs = window.apaReportingPacks || {};
  return packs[language] || packs.en || null;
}

function renderProcedure(resultId) {
  const pack = getPack();
  const procedure = getProcedureText(resultId, pack.lang, state.procedureTool);
  const screenshot = getProcedureScreenshot(resultId, pack.lang);
  elements.procedureOutput.textContent = procedure;
  elements.jamoviScreenshot.hidden = !screenshot;
  if (!screenshot) {
    elements.jamoviScreenshotImage.removeAttribute("src");
    return;
  }
  elements.jamoviScreenshotImage.src = screenshot;
  elements.jamoviScreenshotImage.alt = pack.ui.jamoviScreenshotAlt;
  elements.jamoviScreenshotCaption.textContent = pack.ui.jamoviScreenshotCaption;
}

function getProcedureText(resultId, language, tool) {
  const localized = window.localizedProcedurePacks?.[language]?.[resultId]?.[tool];
  return localized || procedureCatalog[resultId]?.[tool] || "";
}

function getProcedureScreenshot(resultId, language) {
  const screenshot = procedureScreenshots[resultId]?.[state.procedureTool];
  if (!screenshot) return "";
  if (typeof screenshot === "string") return screenshot;
  return screenshot[language] || screenshot.en || screenshot.default || "";
}

function renderHistory() {
  const pack = getPack();
  elements.emptyHistory.hidden = state.history.length > 0;
  elements.historyList.replaceChildren(
    ...state.history.map((entry) => {
      const historicalNode = pack.tree[entry.nodeId];
      const historicalAnswer = historicalNode?.answers[entry.answerIndex];
      const item = document.createElement("li");
      const question = document.createElement("div");
      const answer = document.createElement("div");
      question.className = "history-question";
      answer.className = "history-answer";
      question.textContent = historicalNode?.question || "";
      answer.textContent = historicalAnswer?.label || "";
      item.append(question, answer);
      return item;
    })
  );
}

function goBack() {
  const previous = state.history.pop();
  if (!previous) return;
  state.currentNode = previous.nodeId;
  render();
}

function resetTree() {
  state.currentNode = "goal";
  state.history = [];
  render();
}

function normalizeSearchText(value) {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getSearchMatches(query) {
  const pack = getPack();
  const normalizedQuery = normalizeSearchText(query.trim());
  const items = Object.entries(pack.results)
    .filter(([id]) => findPathToResult(id))
    .map(([id, result]) => {
      const searchText = normalizeSearchText([
        id,
        result.title,
        result.summary,
        ...(result.assumptions || [])
      ].join(" "));
      const title = normalizeSearchText(result.title);
      let score = 0;
      if (!normalizedQuery) score = 1;
      else if (title.startsWith(normalizedQuery)) score = 5;
      else if (title.includes(normalizedQuery)) score = 4;
      else if (searchText.includes(normalizedQuery)) score = 2;
      return { id, result, score };
    });

  return items
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.result.title.localeCompare(b.result.title))
    .slice(0, 8);
}

function renderSearchResults() {
  const pack = getPack();
  const matches = getSearchMatches(elements.searchInput.value);
  elements.searchResults.replaceChildren(
    ...matches.map(({ id, result }) => {
      const button = document.createElement("button");
      const title = document.createElement("strong");
      const summary = document.createElement("span");
      button.className = "search-result-button";
      button.type = "button";
      button.setAttribute("role", "option");
      button.setAttribute("aria-label", result.title);
      title.textContent = result.title;
      summary.textContent = result.summary;
      button.append(title, summary);
      button.addEventListener("click", () => selectSearchResult(id));
      return button;
    })
  );
  elements.searchEmpty.hidden = matches.length > 0;
  elements.searchResults.hidden = matches.length === 0;
  if (!matches.length) elements.searchEmpty.textContent = pack.ui.searchEmpty;
}

function findPathToResult(resultId) {
  const treeData = getPack().tree;
  const visited = new Set();

  function walk(nodeId, path) {
    if (visited.has(nodeId)) return null;
    const node = treeData[nodeId];
    if (!node?.answers) return null;

    visited.add(nodeId);
    for (let answerIndex = 0; answerIndex < node.answers.length; answerIndex += 1) {
      const answer = node.answers[answerIndex];
      const nextPath = [...path, { nodeId, answerIndex }];
      if (answer.result === resultId) return nextPath;
      if (answer.next) {
        const resultPath = walk(answer.next, nextPath);
        if (resultPath) return resultPath;
      }
    }

    return null;
  }

  return walk("goal", []);
}

function openSearch() {
  applyStaticText();
  renderSearchResults();
  elements.searchDialog.showModal();
  window.setTimeout(() => {
    elements.searchInput.focus();
    elements.searchInput.select();
  }, 0);
}

function selectSearchResult(resultId) {
  state.currentNode = resultId;
  state.history = findPathToResult(resultId) || [];
  elements.searchDialog.close();
  render();
}

function handleSearchKeydown(event) {
  if (event.key !== "Enter") return;
  const firstResult = elements.searchResults.querySelector(".search-result-button");
  if (!firstResult) return;
  event.preventDefault();
  firstResult.click();
}

function getStageForNode(nodeId) {
  const scaleNodes = ["associationScale", "comparisonOutcome", "predictionOutcome", "metricDependentVariables"];
  const groupNodes = ["metricGroups", "ordinalGroups", "categoricalDesign", "varianceComparison", "causalModelVariables", "latentModelType", "mixedModelOutcome", "singleMetricCovariates", "multivariateCovariates", "oneSampleKnownVariance", "oneSampleNormal", "twoIndependentNormal", "twoPairedNormal", "manyGroupsDesign", "anovaAssumptions", "repeatedAssumptions", "twoWayAnovaAssumptions", "twoWayRepeatedAssumptions", "normalAssociation", "rankCorrelationChoice"];
  if (nodeId === "goal" || nodeId === "researchGoal" || nodeId === "discoveryStructure") return "goal";
  if (scaleNodes.includes(nodeId)) return "scale";
  if (groupNodes.includes(nodeId)) return "groups";
  return "result";
}

function setActiveMatrix(active) {
  const pack = getPack();
  const stageOrder = ["goal", "scale", "groups", "result"];
  const activeIndex = stageOrder.indexOf(active);
  elements.matrixCells.forEach((cell) => {
    cell.classList.toggle("active", cell.dataset.jump === active);
  });
  elements.labPathSteps.forEach((step) => {
    const stepIndex = stageOrder.indexOf(step.dataset.stage);
    const status = step.querySelector("small");
    step.classList.toggle("active", step.dataset.stage === active);
    step.classList.toggle("complete", stepIndex > -1 && stepIndex < activeIndex);
    if (!status) return;
    if (step.dataset.stage === active) status.textContent = pack.ui.stageCurrent;
    else if (stepIndex > -1 && stepIndex < activeIndex) status.textContent = pack.ui.stageDone;
    else status.textContent = pack.ui.stageOpen;
  });
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    elements.toast.classList.remove("visible");
  }, 1800);
}

async function copyResult() {
  const pack = getPack();
  const isResult = elements.questionPanel.hidden;
  if (!isResult) {
    showToast(pack.ui.noResult);
    return;
  }

  const path = state.history
    .map((entry) => {
      const node = pack.tree[entry.nodeId];
      const answer = node?.answers[entry.answerIndex];
      return `${node?.question || ""} ${answer?.label || ""}`;
    })
    .join("\n");
  const toolName = state.procedureTool === "r" ? "R" : "Jamovi";
  const apaText = elements.apaSection.hidden
    ? ""
    : `\n\n${elements.apaHeading.textContent}:\n${[...elements.apaReportList.querySelectorAll(".apa-item")]
        .map((item) => `${item.querySelector("h3")?.textContent || ""}: ${item.querySelector("p, code")?.textContent || ""}`)
        .join("\n")}`;
  const effectSizeText = !elements.effectSizeSection || elements.effectSizeSection.hidden
    ? ""
    : `\n\n${elements.effectSizeHeading.textContent}:\n${[...elements.effectSizeList.querySelectorAll(".apa-item")]
        .map((item) => `${item.querySelector("h3")?.textContent || ""}: ${item.querySelector("p, code")?.textContent || ""}`)
        .join("\n")}`;
  const text = `${elements.resultTitle.textContent}\n${elements.resultSummary.textContent}\n\n${pack.ui.pathLabelInCopy}:\n${path}\n\n${pack.ui.procedureLabelInCopy} (${toolName}):\n${elements.procedureOutput.textContent}${effectSizeText}${apaText}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast(pack.ui.copied);
  } catch {
    showToast(pack.ui.copyBlocked);
  }
}

function showAlternatives() {
  resetTree();
  showToast(getPack().ui.chooseAnotherPath);
}

function changeLanguage(event) {
  state.language = event.target.value;
  render();
}

function changeProcedureTool(event) {
  state.procedureTool = event.target.value;
  if (elements.resultPanel.hidden) return;
  renderProcedure(state.currentNode);
}

elements.backButton.addEventListener("click", goBack);
elements.resetButton.addEventListener("click", resetTree);
elements.copyButton.addEventListener("click", copyResult);
elements.exploreButton.addEventListener("click", showAlternatives);
elements.searchButton.addEventListener("click", openSearch);
elements.closeSearchButton.addEventListener("click", () => elements.searchDialog.close());
elements.searchInput.addEventListener("input", renderSearchResults);
elements.searchInput.addEventListener("keydown", handleSearchKeydown);
elements.helpButton.addEventListener("click", () => elements.helpDialog.showModal());
elements.closeHelpButton.addEventListener("click", () => elements.helpDialog.close());
elements.closeAssumptionButton.addEventListener("click", closeAssumptionDialog);
elements.assumptionDialog.addEventListener("click", (event) => {
  const dialogBox = elements.assumptionDialog.getBoundingClientRect();
  const clickedBackdrop =
    event.clientX < dialogBox.left ||
    event.clientX > dialogBox.right ||
    event.clientY < dialogBox.top ||
    event.clientY > dialogBox.bottom;
  if (clickedBackdrop) closeAssumptionDialog();
});
elements.languageSelect.addEventListener("change", changeLanguage);
elements.procedureSelect.addEventListener("change", changeProcedureTool);
elements.matrixCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.dataset.jump === "goal") resetTree();
    if (cell.dataset.jump !== "goal") showToast(getPack().ui.sectionLocked);
  });
});

render();

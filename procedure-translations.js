window.localizedProcedurePacks = {
  de: {
    pearson: {
      jamovi: "Analysen > Regression > Korrelationsmatrix\nVerschieben Sie beide metrischen Variablen in Variablen.\nWählen Sie Pearson und aktivieren Sie ein Streudiagramm, wenn Sie eine visuelle Prüfung möchten."
    },
    spearman: {
      jamovi: "Analysen > Regression > Korrelationsmatrix\nVerschieben Sie die Variablen in Variablen.\nWählen Sie Spearman für ordinale oder monotone Zusammenhänge."
    },
    kendall: {
      jamovi: "Analysen > Regression > Korrelationsmatrix\nVerschieben Sie die Variablen in Variablen.\nWählen Sie Kendall's Tau für ordinale oder monotone Zusammenhänge, besonders bei kleinen Stichproben oder vielen Bindungen."
    },
    chiSquareAssociation: {
      jamovi: "Analysen > Häufigkeiten > Kontingenztabellen > Unabhängige Stichproben\nLegen Sie eine kategoriale Variable in Zeilen und die andere in Spalten.\nAktivieren Sie den Chi-Quadrat-Test und erwartete Häufigkeiten. Fordern Sie für die Post-hoc-Interpretation standardisierte Pearson-Residuen an und prüfen Sie, welche Zellen am stärksten zum Zusammenhang beitragen."
    },
    logLinearModel: {
      jamovi: "Analysen > Häufigkeiten > Log-lineares Modell\nFügen Sie die nominalen Variablen hinzu, die die mehrwegige Kontingenztabelle definieren.\nVergleichen Sie Modelle mit und ohne Interaktionsterme, um zu prüfen, welche Zusammenhänge benötigt werden."
    },
    pathAnalysis: {
      jamovi: "Installieren und öffnen Sie das medmod-Modul in jamovi.\nLegen Sie Prädiktor, Mediator und Zielvariable für das angenommene Mediationsmodell fest.\nFordern Sie standardisierte Schätzungen, indirekte Effekte, Konfidenzintervalle und Modellinformationen an."
    },
    structuralEquationModeling: {
      jamovi: "Installieren und öffnen Sie das SEMLj-Modul in jamovi und nutzen Sie die interaktive SEM-Funktion.\nOrdnen Sie die Indikatoren den latenten Variablen zu. Latente endogene Variablen werden als abhängige Variablen und latente exogene Variablen als unabhängige Variablen verwendet.\nDefinieren Sie die Strukturpfade zwischen den latenten Variablen und prüfen Sie standardisierte Ladungen, Pfadkoeffizienten, gegebenenfalls indirekte Effekte, R-Quadrat und globale Fit-Indizes."
    },
    confirmatoryFactorAnalysis: {
      jamovi: "Installieren und öffnen Sie das Factor-Modul in jamovi.\nWählen Sie Confirmatory Factor Analysis und ordnen Sie jeden beobachteten Indikator dem angenommenen latenten Faktor zu.\nPrüfen Sie standardisierte Faktorladungen, Residuen, theoretisch begründete Modifikationsindizes und Fit-Indizes wie CFI, TLI, RMSEA und SRMR."
    },
    discriminantAnalysis: {
      jamovi: "Installieren und öffnen Sie das SnowCluster-Modul in jamovi.\nWählen Sie Classification > Linear Discriminant Analysis.\nLegen Sie die nominale Gruppenvariable als abhängige Variable und die intervallskalierten Variablen als Prädiktoren fest; prüfen Sie Diskriminanzfunktionen und Klassifikationsgenauigkeit."
    },
    oneSampleT: {
      jamovi: "Analysen > T-Tests > Einstichproben-t-Test\nVerschieben Sie die metrische Variable in Abhängige Variablen.\nGeben Sie den Testwert ein und aktivieren Sie Deskriptivstatistiken sowie Normalitätsprüfungen."
    },
    oneSampleZ: {
      jamovi: "Installieren und öffnen Sie das ztesvis-Modul in jamovi.\nWählen Sie die Option für den Einstichproben-z-Test und geben Sie die zusammengefassten Werte ein: Stichprobenmittelwert, Nullhypothesen-Populationsmittelwert, Nullhypothesen-Populationsstandardabweichung, Stichprobengröße und Alpha-Niveau.\nPrüfen Sie z-Wert, p-Wert und Konfidenzintervall im Output."
    },
    oneSampleWilcoxon: {
      jamovi: "Analysen > T-Tests > Einstichproben-t-Test\nVerschieben Sie die Variable in Abhängige Variablen.\nNutzen Sie, sofern verfügbar, die nichtparametrische Option bzw. den Wilcoxon-Vorzeichen-Rang-Test."
    },
    independentT: {
      jamovi: "Analysen > T-Tests > t-Test für unabhängige Stichproben\nLegen Sie die metrische Zielvariable in Abhängige Variablen und die Gruppenvariable in Gruppierungsvariable.\nAktivieren Sie die Welch-Korrektur, wenn die Varianzen ungleich sind."
    },
    mannWhitney: {
      jamovi: "Analysen > T-Tests > t-Test für unabhängige Stichproben\nLegen Sie die Zielvariable in Abhängige Variablen und die Gruppenvariable in Gruppierungsvariable.\nAktivieren Sie Mann-Whitney U unter den nichtparametrischen Tests."
    },
    pairedT: {
      jamovi: "Analysen > T-Tests > t-Test für abhängige Stichproben\nFügen Sie die zwei verbundenen Variablen als gepaarte Zeile hinzu.\nAktivieren Sie Deskriptivstatistiken und die Normalitätsprüfung der Differenzen."
    },
    wilcoxon: {
      jamovi: "Analysen > T-Tests > t-Test für abhängige Stichproben\nFügen Sie die zwei verbundenen Variablen als gepaarte Zeile hinzu.\nAktivieren Sie den Wilcoxon-Vorzeichen-Rang-Test unter den nichtparametrischen Tests."
    },
    anova: {
      jamovi: "Analysen > ANOVA > ANOVA\nLegen Sie die metrische Zielvariable in Abhängige Variable und den Faktor in Fester Faktor.\nAktivieren Sie Annahmenprüfungen und bei Bedarf Post-hoc-Tests."
    },
    ancova: {
      jamovi: "Analysen > ANOVA > ANCOVA\nLegen Sie die metrische Zielvariable in Abhängige Variable und die Gruppenvariable(n) in Feste Faktoren.\nFügen Sie Variablen wie Ausgangswert oder Alter als Kovariaten hinzu.\nPrüfen Sie den adjustierten Gruppeneffekt und bei Bedarf die Homogenität der Regressionssteigungen."
    },
    manova: {
      jamovi: "Analysen > ANOVA > MANCOVA\nLegen Sie zwei oder mehr metrische Zielvariablen in Abhängige Variablen.\nFügen Sie die Gruppenvariable(n) als Feste Faktoren hinzu und lassen Sie Kovariaten leer.\nPrüfen Sie multivariate Tests wie Pillai's trace oder Wilks' Lambda und berichten Sie univariate Follow-ups nur bei fachlicher Begründung."
    },
    mancova: {
      jamovi: "Analysen > ANOVA > MANCOVA\nLegen Sie zwei oder mehr metrische Zielvariablen in Abhängige Variablen.\nFügen Sie die Gruppenvariable(n) als Feste Faktoren hinzu und Variablen wie Alter oder Ausgangswert als Kovariaten.\nPrüfen Sie Pillai's trace oder Wilks' Lambda und bei Bedarf adjustierte univariate Follow-ups."
    },
    repeatedAnova: {
      jamovi: "Analysen > ANOVA > ANOVA mit Messwiederholung\nDefinieren Sie den Messwiederholungsfaktor und seine Stufen.\nOrdnen Sie die Messwiederholungsspalten zu und aktivieren Sie Sphärizitätskorrekturen."
    },
    twoWayAnova: {
      jamovi: "Analysen > ANOVA > ANOVA\nLegen Sie die metrische Zielvariable in Abhängige Variable und die zwei oder mehr Gruppenfaktoren in Feste Faktoren.\nPrüfen Sie Haupteffekte, Interaktionen, Annahmenprüfungen und bei Bedarf Post-hoc- oder Simple-Effects-Vergleiche."
    },
    twoWayRepeatedAnova: {
      jamovi: "Analysen > ANOVA > ANOVA mit Messwiederholung\nDefinieren Sie die zwei oder mehr Messwiederholungsfaktoren und ihre Stufen und ordnen Sie die Messspalten den Zellen des Designs zu.\nPrüfen Sie Haupteffekte, Interaktionen und Sphärizitätskorrekturen wie Greenhouse-Geisser."
    },
    linearMixedModel: {
      jamovi: "Installieren und öffnen Sie das GAMLj-Modul in jamovi.\nWählen Sie Mixed Models > Linear Model, legen Sie die metrische Zielvariable als abhängige Variable fest und fügen Sie feste Prädiktoren sowie Person, Team oder Klasse als zufällige Effekte hinzu.\nBeginnen Sie mit zufälligen Interzepten und ergänzen Sie zufällige Steigungen nur bei theoretischer Begründung."
    },
    generalizedLinearMixedModel: {
      jamovi: "Installieren und öffnen Sie das GAMLj-Modul in jamovi.\nWählen Sie die generalisierte/logistische Mixed-Model-Option, nicht Mixed Models > Linear Model.\nNutzen Sie success als nominale abhängige Variable, wählen Sie eine Binomialverteilung mit Logit-Link, fügen Sie condition und week als feste Effekte hinzu und participant als zufälligen Interzept.\nWenn jamovi meldet, dass ein lineares Modell kontinuierliche Daten verlangt, befinden Sie sich im Menü für lineare Mixed Models."
    },
    ordinalMixedModel: {
      jamovi: "Jamovi bietet nur begrenzte direkte Unterstützung für ordinale Mixed Models in den Kernmenüs.\nNutzen Sie das Rj-Editor-Modul oder exportieren Sie die Daten nach R.\nModellieren Sie die ordinale Zielvariable mit festen Prädiktoren und zufälligen Effekten für Person, Team, Klasse oder einen anderen Cluster."
    },
    kruskalWallis: {
      jamovi: "Analysen > Nichtparametrische Tests > Kruskal-Wallis\nLegen Sie die ordinale oder metrische Zielvariable in das Feld für die abhängige Variable und die Gruppenvariable in das Gruppenfeld.\nFordern Sie bei Bedarf Deskriptivstatistiken und paarweise Vergleiche an."
    },
    friedman: {
      jamovi: "Analysen > Nichtparametrische Tests > Friedman\nFügen Sie die wiederholten oder verbundenen Messspalten derselben Personen hinzu.\nFordern Sie bei Bedarf Deskriptivstatistiken und paarweise Vergleiche an."
    },
    nonparametricTwoWayAnova: {
      jamovi: "Die jamovi-Kernmenüs bieten keine vollständige nichtparametrische faktorielle ANOVA für zwei oder mehr Faktoren mit Interaktionen.\nNutzen Sie das Rj-Editor-Modul oder exportieren Sie die Daten nach R und passen Sie ein Aligned-Rank-Transform-Modell an.\nBerichten Sie Haupteffekte und Interaktionen aus der ART-ANOVA-Tabelle."
    },
    nonparametricTwoWayRepeatedAnova: {
      jamovi: "Die jamovi-Kernmenüs bieten keine vollständige nichtparametrische faktorielle ANOVA mit Messwiederholung für zwei oder mehr Faktoren mit Interaktionen.\nNutzen Sie das Rj-Editor-Modul oder exportieren Sie die Daten nach R und passen Sie ein Aligned-Rank-Transform-Modell mit Person als Wiederholungseinheit an.\nBerichten Sie Haupteffekte und Interaktionen aus der ART-ANOVA-Tabelle."
    },
    fisher: {
      jamovi: "Analysen > Häufigkeiten > Kontingenztabellen > Unabhängige Stichproben\nLegen Sie die Variablen in Zeilen und Spalten.\nAktivieren Sie den exakten Fisher-Test für eine 2x2-Tabelle."
    },
    mcnemar: {
      jamovi: "Analysen > Häufigkeiten > Kontingenztabellen > Verbundene Stichproben\nFügen Sie die zwei verbundenen dichotomen Variablen hinzu.\nAktivieren Sie den McNemar-Test."
    },
    binomialTest: {
      jamovi: "Analysen > Häufigkeiten > Einstichproben-Anteiltests\nWählen Sie die zweistufige kategoriale Variable aus.\nGeben Sie den erwarteten Anteil für die Zielkategorie ein und fordern Sie exakte/binomiale Konfidenzintervalle an."
    },
    chiSquareGoodness: {
      jamovi: "Analysen > Häufigkeiten > Einstichproben-Anteiltests\nWählen Sie die kategoriale Variable aus.\nGeben Sie erwartete Anteile ein oder vergleichen Sie gegen gleiche Anteile."
    },
    linearRegression: {
      jamovi: "Analysen > Regression > Lineare Regression\nLegen Sie die metrische Zielvariable in Abhängige Variable.\nFügen Sie Prädiktoren zu Kovariaten oder Faktoren hinzu und prüfen Sie die Residualdiagnostik.\nInterpretieren Sie Koeffizienten als Vorhersage/Zusammenhang, sofern das Studiendesign keine kausale Inferenz erlaubt."
    },
    logisticRegression: {
      jamovi: "Analysen > Regression > Logistische Regression > 2 Ausprägungen\nLegen Sie die dichotome Zielvariable in Abhängige Variable.\nFügen Sie Prädiktoren zu Kovariaten oder Faktoren hinzu und prüfen Sie die Odds Ratios."
    },
    multinomialRegression: {
      jamovi: "Analysen > Regression > Logistische Regression > N Ausprägungen\nLegen Sie die mehrkategoriale Zielvariable in Abhängige Variable.\nFügen Sie Prädiktoren zu Kovariaten oder Faktoren hinzu und wählen Sie die Referenzkategorie."
    },
    majorMetaAnalysis: {
      jamovi: "Installieren/öffnen Sie das Modul MAJOR in jamovi und wählen Sie die passende Eingabeoption: Correlation Coefficients (r, N), Mean Differences (n, M, SD), Effect Sizes and (Sampling Variances or Standard Errors) oder Proportions.\nFür Odds Ratios nutzen Sie wegen eines Fehlers in Dichotomous Models die Option Effect Sizes and (Sampling Variances or Standard Errors): log_odds_ratio in Effect Sizes, variance in Variance or SE, und Sampling Variances auswählen. Für Proportions geben Sie rohe Ereignishäufigkeiten und Gesamtstichprobengrößen an; Werte größer als 1 sind korrekt, weil MAJOR die Anteile intern berechnet. Für Korrelationskoeffizienten geben Sie Korrelationen und Stichprobengröße an. Ergänzen Sie Study Label und optional einen numerischen Moderator.\nWählen Sie in Model Options den model estimator und die model measures; für Proportions wählen Sie die effect size model measures. Dort wählen Sie auch Fixed oder Random Effects und optional Moderatoranalysen sowie Publikationsbias-Diagnostik."
    },
    fixedEffectMetaAnalysis: {
      jamovi: "Installieren/öffnen Sie das Modul MAJOR in jamovi und wählen Sie die passende Eingabeoption.\nFür Korrelationskoeffizienten geben Sie Korrelationen, Stichprobengröße, Moderator und Study Label an. Für Effect sizes geben Sie Effektgröße, Variance oder SE, Moderator und Study Label an. Für Proportion geben Sie Ereignishäufigkeit, Gesamtstichprobengröße, Moderator und Study Label an.\nWählen Sie in Model Options den model estimator und die model measures; für Proportion wählen Sie die effect size model measures. Wählen Sie ein Fixed-Effect-Modell und prüfen Sie den gepoolten Effekt mit 95%-KI."
    },
    randomEffectsMetaAnalysis: {
      jamovi: "Installieren/öffnen Sie das Modul MAJOR in jamovi und wählen Sie die passende Eingabeoption.\nFür Korrelationskoeffizienten geben Sie Korrelationen, Stichprobengröße, Moderator und Study Label an. Für Effect sizes geben Sie Effektgröße, Variance oder SE, Moderator und Study Label an. Für Proportion geben Sie Ereignishäufigkeit, Gesamtstichprobengröße, Moderator und Study Label an.\nWählen Sie in Model Options den model estimator und die model measures; für Proportion wählen Sie die effect size model measures. Wählen Sie ein Random-Effects-Modell und berichten Sie gepoolten Effekt, 95%-KI, tau2, I2 und falls verfügbar das Prädiktionsintervall."
    },
    subgroupMetaAnalysis: {
      jamovi: "Installieren/öffnen Sie das Modul MAJOR in jamovi und wählen Sie zuerst die passende Eingabeoption.\nFür Korrelationskoeffizienten geben Sie Korrelationen, Stichprobengröße, Moderator und Study Label an. Für Effect sizes geben Sie Effektgröße, Variance oder SE, Moderator und Study Label an. Für Proportion geben Sie Ereignishäufigkeit, Gesamtstichprobengröße, Moderator und Study Label an.\nWählen Sie in Model Options den model estimator und die model measures; für Proportion wählen Sie die effect size model measures. Nutzen Sie den Moderator als Subgruppenvariable und berichten Sie Subgruppeneffekte sowie den Test zwischen Subgruppen."
    },
    metaRegression: {
      jamovi: "Installieren/öffnen Sie das Modul MAJOR in jamovi und wählen Sie zuerst die passende Eingabeoption.\nFür Korrelationskoeffizienten geben Sie Korrelationen, Stichprobengröße, Moderator und Study Label an. Für Effect sizes geben Sie Effektgröße, Variance oder SE, Moderator und Study Label an. Für Proportion geben Sie Ereignishäufigkeit, Gesamtstichprobengröße, Moderator und Study Label an.\nWählen Sie in Model Options den model estimator und die model measures; für Proportion wählen Sie die effect size model measures. Berichten Sie Moderator-Koeffizient, Konfidenzintervall, p-Wert, Restheterogenität und die Zahl der eingeschlossenen Studien."
    },
    publicationBiasDiagnostics: {
      jamovi: "Installieren/öffnen Sie das Modul MAJOR in jamovi und führen Sie zuerst die Meta-Analyse mit der passenden Eingabeoption durch.\nFür Korrelationskoeffizienten geben Sie Korrelationen, Stichprobengröße, Moderator und Study Label an. Für Effect sizes geben Sie Effektgröße, Variance oder SE, Moderator und Study Label an. Für Proportion geben Sie Ereignishäufigkeit, Gesamtstichprobengröße, Moderator und Study Label an.\nWählen Sie in Model Options den model estimator und die model measures; für Proportion wählen Sie die effect size model measures. Fordern Sie Funnel Plot und Diagnostik für Small-Study-/Publikationsbias an, zum Beispiel Egger-Test, wenn verfügbar."
    },
    factorAnalysis: {
      jamovi: "Analysen > Faktoren > Explorative Faktorenanalyse\nVerschieben Sie die zusammengehörigen Variablen in Variablen.\nWählen Sie Extraktionsmethode, Rotation und Faktorenzahl und prüfen Sie Ladungen sowie Modellpassung."
    },
    networkAnalysis: {
      jamovi: "Installieren und öffnen Sie das BSS-Modul in jamovi.\nWählen Sie die Option Network Analysis und verschieben Sie die ausgewählten Variablen in das Analysefeld.\nPrüfen Sie Netzwerkplot, Kantengewichte und Zentralitäts- oder Wichtigkeitsindizes; interpretieren Sie Kanten als bedingte Zusammenhänge, nicht als kausale Effekte."
    },
    clusterAnalysis: {
      jamovi: "Installieren Sie das SnowCluster-Modul aus der jamovi-Bibliothek und öffnen Sie es über das Analysen-Menü.\nVerschieben Sie die Variablen, die Personen oder Objekte beschreiben, in das Feld für Clustering-Variablen.\nStandardisieren Sie die Variablen bei Bedarf, wählen Sie Clustering-Methode/Distanzoption, legen Sie die Clusterzahl fest oder vergleichen Sie Lösungen und prüfen Sie die Clusterqualität."
    },
    multidimensionalScaling: {
      jamovi: "Installieren Sie das jMDS-Modul aus der jamovi-Bibliothek und öffnen Sie es über das Analysen-Menü.\nGeben Sie die Distanz-/Unähnlichkeitsmatrix an oder wählen Sie die Variablen zur Berechnung der Distanzen, je nach Moduloption.\nWählen Sie die Anzahl der Dimensionen und prüfen Sie Stresswert, Konfigurationsplot und Interpretierbarkeit der Dimensionen."
    },
    chiSquareVariance: {
      jamovi: "Jamovi bietet nur begrenzte direkte Unterstützung für den exakten Chi-Quadrat-Test einer Varianz.\nNutzen Sie Exploration > Deskriptivstatistiken, um n und die Stichprobenvarianz zu erhalten, und führen Sie den exakten Test in R aus.\nBerichten Sie die angenommene Populationsvarianz und die Chi-Quadrat-Statistik."
    },
    varianceFTest: {
      jamovi: "Jamovi kann Gruppenvarianzen unter Exploration > Deskriptivstatistiken anzeigen.\nFür den klassischen F-Test zweier Varianzen exportieren Sie die Daten oder nutzen Sie ein R-Modul und führen var.test() aus.\nPrüfen Sie Levene als robustere Alternative, wenn Normalität fraglich ist."
    }
  },
  fr: {
    pearson: {
      jamovi: "Analyses > Régression > Matrice de corrélation\nPlacez les deux variables métriques dans Variables.\nSélectionnez Pearson et activez un nuage de points si vous voulez une vérification visuelle."
    },
    spearman: {
      jamovi: "Analyses > Régression > Matrice de corrélation\nPlacez les variables dans Variables.\nSélectionnez Spearman pour des variables ordinales ou des relations monotones."
    },
    kendall: {
      jamovi: "Analyses > Régression > Matrice de corrélation\nPlacez les variables dans Variables.\nSélectionnez le tau de Kendall pour des variables ordinales ou des relations monotones, surtout avec de petits échantillons ou de nombreux ex aequo."
    },
    chiSquareAssociation: {
      jamovi: "Analyses > Fréquences > Tableaux de contingence > Échantillons indépendants\nPlacez une variable catégorielle dans Lignes et l'autre dans Colonnes.\nActivez le test du khi carré et les effectifs attendus. Pour l'interprétation post-hoc, demandez les résidus de Pearson standardisés et examinez quelles cellules contribuent le plus à l'association."
    },
    logLinearModel: {
      jamovi: "Analyses > Fréquences > Modèle log-linéaire\nAjoutez les variables nominales qui définissent le tableau de contingence à plusieurs entrées.\nComparez les modèles avec et sans termes d'interaction pour identifier les associations nécessaires."
    },
    pathAnalysis: {
      jamovi: "Installez et ouvrez le module medmod dans jamovi.\nIndiquez la variable prédictrice, le médiateur et la variable résultat pour le modèle de médiation hypothétique.\nDemandez les estimations standardisées, les effets indirects, les intervalles de confiance et les informations du modèle."
    },
    structuralEquationModeling: {
      jamovi: "Installez et ouvrez le module SEMLj dans jamovi et utilisez la fonction SEM interactive.\nAssociez les indicateurs aux variables latentes. Les variables latentes endogènes sont les variables dépendantes, et les variables latentes exogènes sont les variables indépendantes.\nDéfinissez les chemins structurels entre variables latentes, puis examinez les charges standardisées, les coefficients de chemin, les effets indirects si nécessaire, le R carré et les indices d'ajustement globaux."
    },
    confirmatoryFactorAnalysis: {
      jamovi: "Installez et ouvrez le module Factor dans jamovi.\nChoisissez Confirmatory Factor Analysis et associez chaque indicateur observé au facteur latent hypothétique.\nExaminez les charges factorielles standardisées, les résidus, les indices de modification justifiés théoriquement et les indices d'ajustement comme CFI, TLI, RMSEA et SRMR."
    },
    discriminantAnalysis: {
      jamovi: "Installez et ouvrez le module SnowCluster dans jamovi.\nChoisissez Classification > Linear Discriminant Analysis.\nDéfinissez la variable de groupe nominale comme variable dépendante et les variables à échelle d'intervalle comme prédicteurs ; examinez les fonctions discriminantes et l'exactitude de classification."
    },
    oneSampleT: {
      jamovi: "Analyses > Tests t > Test t à un échantillon\nPlacez la variable métrique dans Variables dépendantes.\nSaisissez la valeur de test et activez les descriptifs ainsi que les contrôles de normalité."
    },
    oneSampleZ: {
      jamovi: "Installez et ouvrez le module ztesvis dans jamovi.\nChoisissez l'option de test z à un échantillon et saisissez les valeurs résumées : moyenne de l'échantillon, moyenne de population sous l'hypothèse nulle, écart-type de population sous l'hypothèse nulle, taille de l'échantillon et niveau alpha.\nVérifiez la statistique z, la valeur p et l'intervalle de confiance dans la sortie."
    },
    oneSampleWilcoxon: {
      jamovi: "Analyses > Tests t > Test t à un échantillon\nPlacez la variable dans Variables dépendantes.\nUtilisez l'option non paramétrique ou le test des rangs signés de Wilcoxon lorsque disponible."
    },
    independentT: {
      jamovi: "Analyses > Tests t > Test t pour échantillons indépendants\nPlacez la variable cible métrique dans Variables dépendantes et la variable de groupe dans Variable de groupement.\nActivez la correction de Welch si les variances sont inégales."
    },
    mannWhitney: {
      jamovi: "Analyses > Tests t > Test t pour échantillons indépendants\nPlacez la variable cible dans Variables dépendantes et la variable de groupe dans Variable de groupement.\nActivez Mann-Whitney U dans les tests non paramétriques."
    },
    pairedT: {
      jamovi: "Analyses > Tests t > Test t pour échantillons appariés\nAjoutez les deux variables appariées sur une même ligne appariée.\nActivez les descriptifs et le contrôle de normalité des différences."
    },
    wilcoxon: {
      jamovi: "Analyses > Tests t > Test t pour échantillons appariés\nAjoutez les deux variables appariées sur une même ligne appariée.\nActivez le test des rangs signés de Wilcoxon dans les tests non paramétriques."
    },
    anova: {
      jamovi: "Analyses > ANOVA > ANOVA\nPlacez la variable cible métrique dans Variable dépendante et le facteur dans Facteur fixe.\nActivez les vérifications des conditions et les tests post-hoc si nécessaire."
    },
    ancova: {
      jamovi: "Analyses > ANOVA > ANCOVA\nPlacez la variable cible métrique dans Variable dépendante et les variables de groupe dans Facteurs fixes.\nAjoutez les variables comme le score initial ou l'âge dans Covariables.\nExaminez l'effet de groupe ajusté et, si nécessaire, l'homogénéité des pentes de régression."
    },
    manova: {
      jamovi: "Analyses > ANOVA > MANCOVA\nPlacez deux variables cibles métriques ou plus dans Variables dépendantes.\nAjoutez les variables de groupe comme Facteurs fixes et laissez Covariables vide.\nExaminez les tests multivariés comme la trace de Pillai ou le lambda de Wilks et rapportez les suivis univariés seulement s'ils sont justifiés."
    },
    mancova: {
      jamovi: "Analyses > ANOVA > MANCOVA\nPlacez deux variables cibles métriques ou plus dans Variables dépendantes.\nAjoutez les variables de groupe comme Facteurs fixes et les variables comme l'âge ou le score initial dans Covariables.\nExaminez la trace de Pillai ou le lambda de Wilks et, si nécessaire, les suivis univariés ajustés."
    },
    repeatedAnova: {
      jamovi: "Analyses > ANOVA > ANOVA à mesures répétées\nDéfinissez le facteur à mesures répétées et ses niveaux.\nAssignez les colonnes de mesures répétées et activez les corrections de sphéricité."
    },
    twoWayAnova: {
      jamovi: "Analyses > ANOVA > ANOVA\nPlacez la variable cible métrique dans Variable dépendante et les deux facteurs de groupe ou plus dans Facteurs fixes.\nExaminez les effets principaux, les interactions, les vérifications des conditions et, si nécessaire, les comparaisons post-hoc ou d'effets simples."
    },
    twoWayRepeatedAnova: {
      jamovi: "Analyses > ANOVA > ANOVA à mesures répétées\nDéfinissez les deux facteurs à mesures répétées ou plus et leurs niveaux, puis assignez les colonnes de mesure aux cellules du plan.\nExaminez les effets principaux, les interactions et les corrections de sphéricité comme Greenhouse-Geisser."
    },
    linearMixedModel: {
      jamovi: "Installez et ouvrez le module GAMLj dans jamovi.\nChoisissez Mixed Models > Linear Model, placez la variable cible métrique comme variable dépendante et ajoutez les prédicteurs fixes ainsi que personne, équipe ou classe comme effets aléatoires.\nCommencez par des intercepts aléatoires et ajoutez des pentes aléatoires seulement si elles sont justifiées théoriquement."
    },
    generalizedLinearMixedModel: {
      jamovi: "Installez et ouvrez le module GAMLj dans jamovi.\nChoisissez l'option de modèle mixte généralisé/logistique, pas Mixed Models > Linear Model.\nUtilisez success comme variable dépendante nominale, choisissez une distribution binomiale avec lien logit, ajoutez condition et week comme effets fixes et participant comme intercept aléatoire.\nSi jamovi indique que le modèle linéaire exige des données continues, vous êtes dans le menu du modèle mixte linéaire."
    },
    ordinalMixedModel: {
      jamovi: "jamovi offre une prise en charge directe limitée des modèles mixtes ordinaux dans les menus de base.\nUtilisez le module Rj Editor ou exportez les données vers R.\nModélisez la variable ordinale avec des prédicteurs fixes et des effets aléatoires pour personne, équipe, classe ou autre cluster."
    },
    kruskalWallis: {
      jamovi: "Analyses > Tests non paramétriques > Kruskal-Wallis\nPlacez la variable cible ordinale ou métrique dans le champ de variable dépendante et la variable de groupe dans le champ de groupe.\nDemandez les descriptifs et les comparaisons par paires si nécessaire."
    },
    friedman: {
      jamovi: "Analyses > Tests non paramétriques > Friedman\nAjoutez les colonnes de mesures répétées ou appariées pour les mêmes participants.\nDemandez les descriptifs et les comparaisons par paires si nécessaire."
    },
    nonparametricTwoWayAnova: {
      jamovi: "Les menus de base de jamovi ne fournissent pas d'ANOVA factorielle non paramétrique complète pour deux facteurs ou plus avec interactions.\nUtilisez le module Rj Editor ou exportez les données vers R et ajustez un modèle par transformation de rangs alignés.\nRapportez les effets principaux et les interactions à partir du tableau d'ANOVA ART."
    },
    nonparametricTwoWayRepeatedAnova: {
      jamovi: "Les menus de base de jamovi ne fournissent pas d'ANOVA factorielle non paramétrique complète avec mesures répétées pour deux facteurs ou plus avec interactions.\nUtilisez le module Rj Editor ou exportez les données vers R et ajustez un modèle par transformation de rangs alignés avec le participant comme unité répétée.\nRapportez les effets principaux et les interactions à partir du tableau d'ANOVA ART."
    },
    fisher: {
      jamovi: "Analyses > Fréquences > Tableaux de contingence > Échantillons indépendants\nPlacez les variables dans Lignes et Colonnes.\nActivez le test exact de Fisher pour un tableau 2x2."
    },
    mcnemar: {
      jamovi: "Analyses > Fréquences > Tableaux de contingence > Échantillons appariés\nAjoutez les deux variables dichotomiques appariées.\nActivez le test de McNemar."
    },
    binomialTest: {
      jamovi: "Analyses > Fréquences > Tests de proportion à un échantillon\nSélectionnez la variable catégorielle à deux modalités.\nSaisissez la proportion attendue pour la catégorie cible et demandez les intervalles de confiance exacts/binomiaux."
    },
    chiSquareGoodness: {
      jamovi: "Analyses > Fréquences > Tests de proportion à un échantillon\nSélectionnez la variable catégorielle.\nSaisissez les proportions attendues ou comparez à des proportions égales."
    },
    linearRegression: {
      jamovi: "Analyses > Régression > Régression linéaire\nPlacez la variable cible métrique dans Variable dépendante.\nAjoutez les prédicteurs dans Covariables ou Facteurs et examinez le diagnostic des résidus.\nInterprétez les coefficients comme prédiction/association sauf si le plan d'étude permet une inférence causale."
    },
    logisticRegression: {
      jamovi: "Analyses > Régression > Régression logistique > 2 modalités\nPlacez la variable cible dichotomique dans Variable dépendante.\nAjoutez les prédicteurs dans Covariables ou Facteurs et examinez les odds ratios."
    },
    multinomialRegression: {
      jamovi: "Analyses > Régression > Régression logistique > N modalités\nPlacez la variable cible multicatégorielle dans Variable dépendante.\nAjoutez les prédicteurs dans Covariables ou Facteurs et choisissez la catégorie de référence."
    },
    majorMetaAnalysis: {
      jamovi: "Installez/ouvrez le module MAJOR dans jamovi et choisissez l'option d'entrée adaptée : Correlation Coefficients (r, N), Mean Differences (n, M, SD), Effect Sizes and (Sampling Variances or Standard Errors) ou Proportions.\nPour les odds ratios, utilisez Effect Sizes and (Sampling Variances or Standard Errors) à cause d'une erreur dans Dichotomous Models : placez log_odds_ratio dans Effect Sizes, variance dans Variance or SE, puis choisissez Sampling Variances. Pour Proportions, indiquez les fréquences brutes d'événements et les tailles totales d'échantillon ; des valeurs supérieures à 1 sont correctes, car MAJOR calcule les proportions en interne. Pour les corrélations, indiquez les corrélations et la taille d'échantillon. Ajoutez Study Label et, si nécessaire, un Moderator numérique.\nDans Model Options, choisissez le model estimator et les model measures ; pour Proportions, choisissez les effect size model measures. Ces options permettent aussi de choisir effet fixe ou effets aléatoires, ainsi que les modérateurs et le biais de publication."
    },
    fixedEffectMetaAnalysis: {
      jamovi: "Installez/ouvrez le module MAJOR dans jamovi et choisissez l'option d'entrée adaptée.\nPour les coefficients de corrélation, indiquez les corrélations, la taille d'échantillon, le Moderator et le Study Label. Pour Effect sizes, indiquez la taille d'effet, Variance ou SE, le Moderator et le Study Label. Pour Proportion, indiquez la fréquence de l'événement, la taille totale d'échantillon, le Moderator et le Study Label.\nDans Model Options, choisissez le model estimator et les model measures ; pour Proportion, choisissez les effect size model measures. Choisissez un modèle à effet fixe et examinez l'effet combiné avec son IC à 95 %."
    },
    randomEffectsMetaAnalysis: {
      jamovi: "Installez/ouvrez le module MAJOR dans jamovi et choisissez l'option d'entrée adaptée.\nPour les coefficients de corrélation, indiquez les corrélations, la taille d'échantillon, le Moderator et le Study Label. Pour Effect sizes, indiquez la taille d'effet, Variance ou SE, le Moderator et le Study Label. Pour Proportion, indiquez la fréquence de l'événement, la taille totale d'échantillon, le Moderator et le Study Label.\nDans Model Options, choisissez le model estimator et les model measures ; pour Proportion, choisissez les effect size model measures. Choisissez un modèle à effets aléatoires et rapportez l'effet combiné, l'IC à 95 %, tau2, I2 et l'intervalle de prédiction si disponible."
    },
    subgroupMetaAnalysis: {
      jamovi: "Installez/ouvrez le module MAJOR dans jamovi et choisissez d'abord l'option d'entrée adaptée.\nPour les coefficients de corrélation, indiquez les corrélations, la taille d'échantillon, le Moderator et le Study Label. Pour Effect sizes, indiquez la taille d'effet, Variance ou SE, le Moderator et le Study Label. Pour Proportion, indiquez la fréquence de l'événement, la taille totale d'échantillon, le Moderator et le Study Label.\nDans Model Options, choisissez le model estimator et les model measures ; pour Proportion, choisissez les effect size model measures. Utilisez le Moderator comme variable de sous-groupe et rapportez les effets par sous-groupe et le test entre sous-groupes."
    },
    metaRegression: {
      jamovi: "Installez/ouvrez le module MAJOR dans jamovi et choisissez d'abord l'option d'entrée adaptée.\nPour les coefficients de corrélation, indiquez les corrélations, la taille d'échantillon, le Moderator et le Study Label. Pour Effect sizes, indiquez la taille d'effet, Variance ou SE, le Moderator et le Study Label. Pour Proportion, indiquez la fréquence de l'événement, la taille totale d'échantillon, le Moderator et le Study Label.\nDans Model Options, choisissez le model estimator et les model measures ; pour Proportion, choisissez les effect size model measures. Rapportez le coefficient du modérateur, l'intervalle de confiance, la valeur p, l'hétérogénéité résiduelle et le nombre d'études utilisées."
    },
    publicationBiasDiagnostics: {
      jamovi: "Installez/ouvrez le module MAJOR dans jamovi et lancez d'abord la méta-analyse avec l'option d'entrée adaptée.\nPour les coefficients de corrélation, indiquez les corrélations, la taille d'échantillon, le Moderator et le Study Label. Pour Effect sizes, indiquez la taille d'effet, Variance ou SE, le Moderator et le Study Label. Pour Proportion, indiquez la fréquence de l'événement, la taille totale d'échantillon, le Moderator et le Study Label.\nDans Model Options, choisissez le model estimator et les model measures ; pour Proportion, choisissez les effect size model measures. Demandez le funnel plot et les diagnostics de petits effets d'étude/biais de publication, par exemple le test d'Egger lorsqu'il est disponible."
    },
    factorAnalysis: {
      jamovi: "Analyses > Facteurs > Analyse factorielle exploratoire\nPlacez les variables liées dans Variables.\nChoisissez la méthode d'extraction, la rotation et le nombre de facteurs, puis examinez les charges et l'ajustement du modèle."
    },
    networkAnalysis: {
      jamovi: "Installez et ouvrez le module BSS dans jamovi.\nChoisissez l'option Network Analysis et placez les variables sélectionnées dans le champ d'analyse.\nExaminez le graphique du réseau, les poids des arêtes et les indices de centralité ou d'importance ; interprétez les arêtes comme des associations conditionnelles, pas comme des effets causaux."
    },
    clusterAnalysis: {
      jamovi: "Installez le module SnowCluster depuis la bibliothèque jamovi et ouvrez-le dans le menu Analyses.\nPlacez les variables décrivant les personnes ou objets dans le champ des variables de clustering.\nStandardisez les variables si nécessaire, choisissez la méthode de clustering/l'option de distance, fixez ou comparez le nombre de clusters et examinez la qualité de la solution."
    },
    multidimensionalScaling: {
      jamovi: "Installez le module jMDS depuis la bibliothèque jamovi et ouvrez-le dans le menu Analyses.\nIndiquez la matrice de distances/dissimilarités ou sélectionnez les variables utilisées pour calculer les distances, selon l'option du module.\nChoisissez le nombre de dimensions et examinez la valeur de stress, le graphique de configuration et l'interprétabilité des dimensions."
    },
    chiSquareVariance: {
      jamovi: "Jamovi offre une prise en charge directe limitée du test exact du khi carré pour une variance.\nUtilisez Exploration > Descriptifs pour obtenir n et la variance d'échantillon, puis exécutez le test exact dans R.\nRapportez la variance de population hypothétique et la statistique du khi carré."
    },
    varianceFTest: {
      jamovi: "Jamovi peut afficher les variances par groupe dans Exploration > Descriptifs.\nPour le test F classique de deux variances, exportez les données ou utilisez un module R et exécutez var.test().\nEnvisagez le test de Levene comme alternative plus robuste si la normalité est douteuse."
    }
  },
  es: {
    pearson: {
      jamovi: "Análisis > Regresión > Matriz de correlaciones\nMueva ambas variables métricas a Variables.\nSeleccione Pearson y active un diagrama de dispersión si desea una comprobación visual."
    },
    spearman: {
      jamovi: "Análisis > Regresión > Matriz de correlaciones\nMueva las variables a Variables.\nSeleccione Spearman para variables ordinales o relaciones monótonas."
    },
    kendall: {
      jamovi: "Análisis > Regresión > Matriz de correlaciones\nMueva las variables a Variables.\nSeleccione tau de Kendall para variables ordinales o relaciones monótonas, especialmente con muestras pequeñas o muchos empates."
    },
    chiSquareAssociation: {
      jamovi: "Análisis > Frecuencias > Tablas de contingencia > Muestras independientes\nColoque una variable categórica en Filas y la otra en Columnas.\nActive la prueba chi-cuadrado y las frecuencias esperadas. Para la interpretación post hoc, solicite los residuos de Pearson estandarizados y examine qué celdas contribuyen más a la asociación."
    },
    logLinearModel: {
      jamovi: "Análisis > Frecuencias > Modelo log-lineal\nAñada las variables nominales que definen la tabla de contingencia multidimensional.\nCompare modelos con y sin términos de interacción para identificar qué asociaciones son necesarias."
    },
    pathAnalysis: {
      jamovi: "Instale y abra el módulo medmod en jamovi.\nEspecifique la variable predictora, la mediadora y la variable resultado para el modelo de mediación hipotetizado.\nSolicite estimaciones estandarizadas, efectos indirectos, intervalos de confianza e información del modelo."
    },
    structuralEquationModeling: {
      jamovi: "Instale y abra el módulo SEMLj en jamovi y use la función SEM interactiva.\nAsigne los indicadores a las variables latentes. Las variables latentes endógenas son las variables dependientes, y las variables latentes exógenas son las variables independientes.\nDefina las rutas estructurales entre variables latentes y revise cargas estandarizadas, coeficientes de ruta, efectos indirectos si corresponde, R cuadrado e índices globales de ajuste."
    },
    confirmatoryFactorAnalysis: {
      jamovi: "Instale y abra el módulo Factor en jamovi.\nElija Confirmatory Factor Analysis y asigne cada indicador observado a su factor latente hipotetizado.\nRevise cargas factoriales estandarizadas, residuos, índices de modificación justificados teóricamente e índices de ajuste como CFI, TLI, RMSEA y SRMR."
    },
    discriminantAnalysis: {
      jamovi: "Instale y abra el módulo SnowCluster en jamovi.\nElija Classification > Linear Discriminant Analysis.\nDefina la variable nominal de grupo como variable dependiente y las variables de escala de intervalo como predictores; revise funciones discriminantes y exactitud de clasificación."
    },
    oneSampleT: {
      jamovi: "Análisis > Pruebas t > Prueba t para una muestra\nMueva la variable métrica a Variables dependientes.\nIntroduzca el valor de prueba y active descriptivos y comprobaciones de normalidad."
    },
    oneSampleZ: {
      jamovi: "Instale y abra el módulo ztesvis en jamovi.\nElija la opción de prueba z para una muestra e introduzca los valores resumidos: media muestral, media poblacional bajo la hipótesis nula, desviación estándar poblacional bajo la hipótesis nula, tamaño muestral y nivel alfa.\nRevise el estadístico z, el valor p y el intervalo de confianza en la salida."
    },
    oneSampleWilcoxon: {
      jamovi: "Análisis > Pruebas t > Prueba t para una muestra\nMueva la variable a Variables dependientes.\nUse la opción no paramétrica o Wilcoxon de rangos con signo cuando esté disponible."
    },
    independentT: {
      jamovi: "Análisis > Pruebas t > Prueba t para muestras independientes\nColoque la variable objetivo métrica en Variables dependientes y la variable de grupo en Variable de agrupación.\nActive la corrección de Welch si las varianzas son desiguales."
    },
    mannWhitney: {
      jamovi: "Análisis > Pruebas t > Prueba t para muestras independientes\nColoque la variable objetivo en Variables dependientes y la variable de grupo en Variable de agrupación.\nActive Mann-Whitney U en las pruebas no paramétricas."
    },
    pairedT: {
      jamovi: "Análisis > Pruebas t > Prueba t para muestras relacionadas\nAñada las dos variables relacionadas como una fila emparejada.\nActive descriptivos y la comprobación de normalidad de las diferencias."
    },
    wilcoxon: {
      jamovi: "Análisis > Pruebas t > Prueba t para muestras relacionadas\nAñada las dos variables relacionadas como una fila emparejada.\nActive Wilcoxon de rangos con signo en las pruebas no paramétricas."
    },
    anova: {
      jamovi: "Análisis > ANOVA > ANOVA\nColoque la variable objetivo métrica en Variable dependiente y el factor en Factor fijo.\nActive las comprobaciones de supuestos y pruebas post-hoc si es necesario."
    },
    ancova: {
      jamovi: "Análisis > ANOVA > ANCOVA\nColoque la variable objetivo métrica en Variable dependiente y las variables de grupo en Factores fijos.\nAñada variables como puntuación inicial o edad en Covariables.\nRevise el efecto de grupo ajustado y, si es necesario, la homogeneidad de las pendientes de regresión."
    },
    manova: {
      jamovi: "Análisis > ANOVA > MANCOVA\nColoque dos o más variables objetivo métricas en Variables dependientes.\nAñada las variables de grupo como Factores fijos y deje Covariables vacío.\nRevise pruebas multivariadas como la traza de Pillai o lambda de Wilks y reporte seguimientos univariados solo si están justificados."
    },
    mancova: {
      jamovi: "Análisis > ANOVA > MANCOVA\nColoque dos o más variables objetivo métricas en Variables dependientes.\nAñada las variables de grupo como Factores fijos y variables como edad o puntuación inicial en Covariables.\nRevise la traza de Pillai o lambda de Wilks y, si es necesario, seguimientos univariados ajustados."
    },
    repeatedAnova: {
      jamovi: "Análisis > ANOVA > ANOVA de medidas repetidas\nDefina el factor de medidas repetidas y sus niveles.\nAsigne las columnas de medición repetida y active correcciones de esfericidad."
    },
    twoWayAnova: {
      jamovi: "Análisis > ANOVA > ANOVA\nColoque la variable objetivo métrica en Variable dependiente y los dos o más factores de grupo en Factores fijos.\nRevise efectos principales, interacciones, comprobaciones de supuestos y, si es necesario, comparaciones post-hoc o de efectos simples."
    },
    twoWayRepeatedAnova: {
      jamovi: "Análisis > ANOVA > ANOVA de medidas repetidas\nDefina los dos o más factores de medidas repetidas y sus niveles, y asigne las columnas de medición a las celdas del diseño.\nRevise efectos principales, interacciones y correcciones de esfericidad como Greenhouse-Geisser."
    },
    linearMixedModel: {
      jamovi: "Instale y abra el módulo GAMLj en jamovi.\nElija Mixed Models > Linear Model, coloque la variable objetivo métrica como variable dependiente y añada predictores fijos y persona, equipo o clase como efectos aleatorios.\nEmpiece con interceptos aleatorios y añada pendientes aleatorias solo si están justificadas teóricamente."
    },
    generalizedLinearMixedModel: {
      jamovi: "Instale y abra el módulo GAMLj en jamovi.\nElija la opción de modelo mixto generalizado/logístico, no Mixed Models > Linear Model.\nUse success como variable dependiente nominal, seleccione distribución binomial con enlace logit, añada condition y week como efectos fijos y participant como intercepto aleatorio.\nSi jamovi dice que el modelo lineal requiere datos continuos, está en el menú de modelo mixto lineal."
    },
    ordinalMixedModel: {
      jamovi: "jamovi tiene soporte directo limitado para modelos mixtos ordinales en los menús principales.\nUse el módulo Rj Editor o exporte los datos a R.\nModele la variable ordinal con predictores fijos y efectos aleatorios para persona, equipo, clase u otro cluster."
    },
    kruskalWallis: {
      jamovi: "Análisis > Pruebas no paramétricas > Kruskal-Wallis\nColoque la variable objetivo ordinal o métrica en el campo de variable dependiente y la variable de grupo en el campo de grupo.\nSolicite descriptivos y comparaciones por pares si es necesario."
    },
    friedman: {
      jamovi: "Análisis > Pruebas no paramétricas > Friedman\nAñada las columnas de mediciones repetidas o relacionadas de los mismos participantes.\nSolicite descriptivos y comparaciones por pares si es necesario."
    },
    nonparametricTwoWayAnova: {
      jamovi: "Los menús principales de jamovi no ofrecen una ANOVA factorial no paramétrica completa para dos o más factores con interacciones.\nUse el módulo Rj Editor o exporte los datos a R y ajuste un modelo de transformación de rangos alineados.\nReporte efectos principales e interacciones desde la tabla ANOVA ART."
    },
    nonparametricTwoWayRepeatedAnova: {
      jamovi: "Los menús principales de jamovi no ofrecen una ANOVA factorial no paramétrica completa con medidas repetidas para dos o más factores con interacciones.\nUse el módulo Rj Editor o exporte los datos a R y ajuste un modelo de transformación de rangos alineados con participante como unidad repetida.\nReporte efectos principales e interacciones desde la tabla ANOVA ART."
    },
    fisher: {
      jamovi: "Análisis > Frecuencias > Tablas de contingencia > Muestras independientes\nColoque las variables en Filas y Columnas.\nActive la prueba exacta de Fisher para una tabla 2x2."
    },
    mcnemar: {
      jamovi: "Análisis > Frecuencias > Tablas de contingencia > Muestras relacionadas\nAñada las dos variables dicotómicas relacionadas.\nActive la prueba de McNemar."
    },
    binomialTest: {
      jamovi: "Análisis > Frecuencias > Pruebas de proporción para una muestra\nSeleccione la variable categórica de dos niveles.\nIntroduzca la proporción esperada para la categoría focal y solicite intervalos de confianza exactos/binomiales."
    },
    chiSquareGoodness: {
      jamovi: "Análisis > Frecuencias > Pruebas de proporción para una muestra\nSeleccione la variable categórica.\nIntroduzca proporciones esperadas o compare con proporciones iguales."
    },
    linearRegression: {
      jamovi: "Análisis > Regresión > Regresión lineal\nColoque la variable objetivo métrica en Variable dependiente.\nAñada predictores a Covariables o Factores e inspeccione los diagnósticos de residuos.\nInterprete los coeficientes como predicción/asociación salvo que el diseño del estudio permita inferencia causal."
    },
    logisticRegression: {
      jamovi: "Análisis > Regresión > Regresión logística > 2 resultados\nColoque la variable objetivo dicotómica en Variable dependiente.\nAñada predictores a Covariables o Factores e inspeccione los odds ratios."
    },
    multinomialRegression: {
      jamovi: "Análisis > Regresión > Regresión logística > N resultados\nColoque la variable objetivo multicategórica en Variable dependiente.\nAñada predictores a Covariables o Factores y elija la categoría de referencia."
    },
    majorMetaAnalysis: {
      jamovi: "Instale/abra el módulo MAJOR en jamovi y elija la opción de entrada adecuada: Correlation Coefficients (r, N), Mean Differences (n, M, SD), Effect Sizes and (Sampling Variances or Standard Errors) o Proportions.\nPara odds ratios, use Effect Sizes and (Sampling Variances or Standard Errors) por un error en Dichotomous Models: coloque log_odds_ratio en Effect Sizes, variance en Variance or SE y seleccione Sampling Variances. Para Proportions, indique frecuencias brutas de eventos y tamaños muestrales totales; los valores mayores que 1 son correctos porque MAJOR calcula las proporciones internamente. Para correlaciones, indique correlaciones y tamaño muestral. Añada Study Label y, si procede, un Moderator numérico.\nEn Model Options, elija el model estimator y las model measures; para Proportions, elija las effect size model measures. Allí también se elige efecto fijo o efectos aleatorios, y opcionalmente moderadores y sesgo de publicación."
    },
    fixedEffectMetaAnalysis: {
      jamovi: "Instale/abra el módulo MAJOR en jamovi y elija la opción de entrada adecuada.\nPara coeficientes de correlación, indique las correlaciones, tamaño muestral, Moderator y Study Label. Para Effect sizes, indique el tamaño del efecto, Variance o SE, Moderator y Study Label. Para Proportion, indique la frecuencia del evento, tamaño muestral total, Moderator y Study Label.\nEn Model Options, elija el model estimator y las model measures; para Proportion, elija las effect size model measures. Seleccione un modelo de efecto fijo y revise el efecto combinado con IC del 95 %."
    },
    randomEffectsMetaAnalysis: {
      jamovi: "Instale/abra el módulo MAJOR en jamovi y elija la opción de entrada adecuada.\nPara coeficientes de correlación, indique las correlaciones, tamaño muestral, Moderator y Study Label. Para Effect sizes, indique el tamaño del efecto, Variance o SE, Moderator y Study Label. Para Proportion, indique la frecuencia del evento, tamaño muestral total, Moderator y Study Label.\nEn Model Options, elija el model estimator y las model measures; para Proportion, elija las effect size model measures. Seleccione un modelo de efectos aleatorios e informe el efecto combinado, IC del 95 %, tau2, I2 e intervalo de predicción si está disponible."
    },
    subgroupMetaAnalysis: {
      jamovi: "Instale/abra el módulo MAJOR en jamovi y elija primero la opción de entrada adecuada.\nPara coeficientes de correlación, indique las correlaciones, tamaño muestral, Moderator y Study Label. Para Effect sizes, indique el tamaño del efecto, Variance o SE, Moderator y Study Label. Para Proportion, indique la frecuencia del evento, tamaño muestral total, Moderator y Study Label.\nEn Model Options, elija el model estimator y las model measures; para Proportion, elija las effect size model measures. Use Moderator como variable de subgrupo e informe los efectos por subgrupo y la prueba entre subgrupos."
    },
    metaRegression: {
      jamovi: "Instale/abra el módulo MAJOR en jamovi y elija primero la opción de entrada adecuada.\nPara coeficientes de correlación, indique las correlaciones, tamaño muestral, Moderator y Study Label. Para Effect sizes, indique el tamaño del efecto, Variance o SE, Moderator y Study Label. Para Proportion, indique la frecuencia del evento, tamaño muestral total, Moderator y Study Label.\nEn Model Options, elija el model estimator y las model measures; para Proportion, elija las effect size model measures. Informe el coeficiente del moderador, intervalo de confianza, valor p, heterogeneidad residual y número de estudios utilizados."
    },
    publicationBiasDiagnostics: {
      jamovi: "Instale/abra el módulo MAJOR en jamovi y ejecute primero el meta-análisis con la opción de entrada adecuada.\nPara coeficientes de correlación, indique las correlaciones, tamaño muestral, Moderator y Study Label. Para Effect sizes, indique el tamaño del efecto, Variance o SE, Moderator y Study Label. Para Proportion, indique la frecuencia del evento, tamaño muestral total, Moderator y Study Label.\nEn Model Options, elija el model estimator y las model measures; para Proportion, elija las effect size model measures. Solicite el funnel plot y diagnósticos de efectos de estudios pequeños/sesgo de publicación, como la prueba de Egger cuando esté disponible."
    },
    factorAnalysis: {
      jamovi: "Análisis > Factores > Análisis factorial exploratorio\nMueva las variables relacionadas a Variables.\nElija el método de extracción, la rotación y el número de factores, e inspeccione cargas y ajuste del modelo."
    },
    networkAnalysis: {
      jamovi: "Instale y abra el módulo BSS en jamovi.\nElija la opción Network Analysis y mueva las variables seleccionadas al campo de análisis.\nRevise el gráfico de red, los pesos de las aristas y los índices de centralidad o importancia; interprete las aristas como asociaciones condicionales, no como efectos causales."
    },
    clusterAnalysis: {
      jamovi: "Instale el módulo SnowCluster desde la biblioteca de jamovi y ábralo desde el menú Análisis. \nMueva las variables que describen personas u objetos al campo de variables de clustering.\nEstandarice las variables si es necesario, elija el método de clustering/opción de distancia, fije o compare el número de conglomerados y revise la calidad de la solución."
    },
    multidimensionalScaling: {
      jamovi: "Instale el módulo jMDS desde la biblioteca de jamovi y ábralo desde el menú Análisis.\nProporcione la matriz de distancias/disimilitudes o seleccione las variables usadas para calcular las distancias, según la opción del módulo.\nElija el número de dimensiones y revise el valor de estrés, el gráfico de configuración y la interpretabilidad de las dimensiones."
    },
    chiSquareVariance: {
      jamovi: "Jamovi tiene soporte directo limitado para la prueba chi-cuadrado exacta de una varianza.\nUse Exploración > Descriptivos para obtener n y la varianza muestral, y después ejecute la prueba exacta en R.\nReporte la varianza poblacional hipotética y el estadístico chi-cuadrado."
    },
    varianceFTest: {
      jamovi: "Jamovi puede mostrar varianzas por grupo en Exploración > Descriptivos.\nPara la prueba F clásica de dos varianzas, exporte los datos o use un módulo de R y ejecute var.test().\nConsidere la prueba de Levene como alternativa más robusta cuando la normalidad sea dudosa."
    }
  }
};

const mlProcedureGuides = {
  de: {
    decisionTreeRegression: "Installieren/öffnen Sie das Modul SnowCluster und wählen Sie Decision Tree.\nVerschieben Sie outcome_symptom_score nach Dependent und motivation_score, baseline_distress_score sowie sessions_attended nach Covariates.\nSetzen Sie in Analysis den Split set (z. B. 0.7), aktivieren Sie Overall statistics und unter Plots with train set die Optionen Decision tree und Regression tree. Nutzen Sie die Regeln und Endknotenwerte des Regressionsbaums zur Erklärung des vorhergesagten Symptom-Scores.",
    randomForestRegression: "Installieren/öffnen Sie das Modul MLwrapj und wählen Sie MLwrapj > Regression.\nVerschieben Sie die metrische Zielvariable in Dependent Variable und die numerischen Prädiktoren in Covariates.\nWählen Sie Random Forest im Modellauswahlfeld, legen Sie Training/Validierung und Baumoptionen fest und berichten Sie Validierungs-RMSE/R2 sowie variable importance.",
    knnRegression: "Installieren/öffnen Sie das Modul SnowCluster und wählen Sie Machine Learning.\nVerschieben Sie wellbeing_score nach Dependent und sleep_hours, stress_score, physical_activity_min_week sowie social_support_score in die Prädiktor-/Covariate-Felder.\nWählen Sie knn als Training model, standardisieren/skalieren Sie die Prädiktoren, falls verfügbar, nutzen Sie Train/Test-Split oder Kreuzvalidierung und berichten Sie Validierungs-RMSE/MAE/R2 sowie den gewählten k-Wert.",
    decisionTreeClassifier: "Jamovi bietet in den Kernmenüs nur begrenzte Unterstützung für Entscheidungsbaum-Klassifikation.\nNutzen Sie ein Machine-Learning-Modul, falls installiert, oder exportieren Sie die Daten nach R.\nValidieren Sie mit Train/Test-Split oder Kreuzvalidierung und prüfen Sie die Konfusionsmatrix.",
    randomForestClassifier: "Jamovi bietet in den Kernmenüs nur begrenzte Unterstützung für Random-Forest-Klassifikation.\nNutzen Sie ein geeignetes Machine-Learning-Modul oder R.\nBerichten Sie Validierungsgenauigkeit, bei unbalancierten Klassen balanced accuracy/F1 und variable importance.",
    knnClassifier: "Jamovi bietet nur begrenzte direkte Unterstützung für k-Nearest-Neighbors-Klassifikation.\nStandardisieren Sie die Prädiktoren und nutzen Sie ein Machine-Learning-Modul oder R.\nWählen Sie k per Kreuzvalidierung und berichten Sie eine Konfusionsmatrix.",
    naiveBayes: "Jamovi bietet in den Kernmenüs nur begrenzte Unterstützung für Naive Bayes.\nNutzen Sie ein Machine-Learning-Modul, falls installiert, oder exportieren Sie die Daten nach R.\nPrüfen Sie vorhergesagte Wahrscheinlichkeiten und die Konfusionsmatrix auf Validierungsdaten.",
    principalComponentAnalysis: "Analysen > Faktoren > Hauptkomponentenanalyse\nVerschieben Sie die metrischen Variablen in Variablen.\nWählen Sie die Anzahl der Komponenten und prüfen Sie Ladungen, Scree-Plot, erklärte Varianz und gegebenenfalls Komponentenscores."
  },
  fr: {
    decisionTreeRegression: "Installez/ouvrez le module SnowCluster, puis choisissez Decision Tree.\nPlacez outcome_symptom_score dans Dependent et motivation_score, baseline_distress_score ainsi que sessions_attended dans Covariates.\nDans Analysis, définissez Split set (p. ex. 0.7), cochez Overall statistics et, sous Plots with train set, cochez Decision tree et Regression tree. Utilisez les règles et les valeurs des nœuds terminaux de l'arbre de régression pour expliquer le score de symptômes prédit.",
    randomForestRegression: "Installez/ouvrez le module MLwrapj, puis choisissez MLwrapj > Regression.\nPlacez la variable cible continue dans Dependent Variable et les prédicteurs numériques dans Covariates.\nChoisissez Random Forest dans le sélecteur de modèle, définissez l'entraînement/validation et les options des arbres, puis rapportez RMSE/R2 de validation et l'importance des variables.",
    knnRegression: "Installez/ouvrez le module SnowCluster, puis choisissez Machine Learning.\nPlacez wellbeing_score dans Dependent et sleep_hours, stress_score, physical_activity_min_week ainsi que social_support_score dans les champs prédicteurs/covariates.\nChoisissez knn comme training model, standardisez/mettez à l'échelle les prédicteurs si l'option est disponible, utilisez un découpage entraînement/test ou une validation croisée et rapportez RMSE/MAE/R2 de validation ainsi que la valeur k choisie.",
    decisionTreeClassifier: "Jamovi offre un support intégré limité pour la classification par arbre de décision.\nUtilisez un module d'apprentissage automatique si disponible, ou exportez les données vers R.\nValidez avec un découpage entraînement/test ou une validation croisée et inspectez la matrice de confusion.",
    randomForestClassifier: "Jamovi offre un support intégré limité pour la classification par forêt aléatoire.\nUtilisez un module adapté ou R.\nRapportez l'exactitude de validation, l'exactitude équilibrée/F1 si les classes sont déséquilibrées, et l'importance des variables.",
    knnClassifier: "Jamovi offre un support direct limité pour la classification k plus proches voisins.\nStandardisez les prédicteurs et utilisez un module d'apprentissage automatique ou R.\nChoisissez k par validation croisée et rapportez une matrice de confusion.",
    naiveBayes: "Jamovi offre un support intégré limité pour naïf bayésien.\nUtilisez un module d'apprentissage automatique si disponible, ou exportez les données vers R.\nInspectez les probabilités prédites et la matrice de confusion sur données de validation.",
    principalComponentAnalysis: "Analyses > Facteurs > Analyse en composantes principales\nDéplacez les variables métriques dans Variables.\nChoisissez le nombre de composantes et inspectez les charges, le scree plot, la variance expliquée et les scores de composantes si nécessaire."
  },
  es: {
    decisionTreeRegression: "Instale/abra el módulo SnowCluster y seleccione Decision Tree.\nMueva outcome_symptom_score a Dependent y motivation_score, baseline_distress_score y sessions_attended a Covariates.\nEn Analysis, configure Split set (p. ej. 0.7), marque Overall statistics y, en Plots with train set, marque Decision tree y Regression tree. Use las reglas y los valores de los nodos terminales del árbol de regresión para explicar la puntuación de síntomas predicha.",
    randomForestRegression: "Instale/abra el módulo MLwrapj y seleccione MLwrapj > Regression.\nColoque la variable dependiente continua en Dependent Variable y los predictores numéricos en Covariates.\nElija Random Forest en el selector de modelo, configure entrenamiento/validación y las opciones de árboles, y reporte RMSE/R2 de validación e importancia de variables.",
    knnRegression: "Instale/abra el módulo SnowCluster y seleccione Machine Learning.\nMueva wellbeing_score a Dependent y sleep_hours, stress_score, physical_activity_min_week y social_support_score a los campos de predictores/covariates.\nSeleccione knn como training model, estandarice/escale los predictores si la opción está disponible, use división entrenamiento/prueba o validación cruzada y reporte RMSE/MAE/R2 de validación junto con el valor k elegido.",
    decisionTreeClassifier: "Jamovi ofrece soporte integrado limitado para clasificación con árbol de decisión.\nUse un módulo de machine learning si está instalado, o exporte los datos a R.\nValide con división entrenamiento/prueba o validación cruzada y revise la matriz de confusión.",
    randomForestClassifier: "Jamovi ofrece soporte integrado limitado para clasificación con bosque aleatorio.\nUse un módulo adecuado o R.\nReporte exactitud de validación, exactitud balanceada/F1 si las clases están desbalanceadas, e importancia de variables.",
    knnClassifier: "Jamovi ofrece soporte directo limitado para clasificación k vecinos más cercanos.\nEstandarice los predictores y use un módulo de machine learning o R.\nElija k mediante validación cruzada y reporte una matriz de confusión.",
    naiveBayes: "Jamovi ofrece soporte integrado limitado para naive Bayes.\nUse un módulo de machine learning si está instalado, o exporte los datos a R.\nRevise probabilidades predichas y matriz de confusión en datos de validación.",
    principalComponentAnalysis: "Análisis > Factores > Análisis de componentes principales\nMueva las variables métricas a Variables.\nElija el número de componentes y revise cargas, scree plot, varianza explicada y puntuaciones de componentes si procede."
  },
  it: {
    decisionTreeRegression: "Installa/apri il modulo SnowCluster e scegli Decision Tree.\nSposta outcome_symptom_score in Dependent e motivation_score, baseline_distress_score e sessions_attended in Covariates.\nIn Analysis, imposta Split set (ad es. 0.7), seleziona Overall statistics e, sotto Plots with train set, seleziona Decision tree e Regression tree. Usa le regole e i valori dei nodi terminali dell'albero di regressione per spiegare il punteggio sintomatologico predetto.",
    randomForestRegression: "Installa/apri il modulo MLwrapj e scegli MLwrapj > Regression.\nInserisci la variabile esito continua in Dependent Variable e i predittori numerici in Covariates.\nScegli Random Forest nel selettore del modello, imposta training/validazione e le opzioni degli alberi, poi riporta RMSE/R2 di validazione e importanza delle variabili.",
    knnRegression: "Installa/apri il modulo SnowCluster e scegli Machine Learning.\nSposta wellbeing_score in Dependent e sleep_hours, stress_score, physical_activity_min_week e social_support_score nei campi predittori/covariates.\nSeleziona knn come training model, standardizza/scala i predittori se l'opzione è disponibile, usa split training/test o validazione incrociata e riporta RMSE/MAE/R2 di validazione più il valore k scelto.",
    decisionTreeClassifier: "Jamovi offre supporto integrato limitato per la classificazione con albero decisionale.\nUsa un modulo di machine learning se installato, oppure esporta i dati in R.\nValida con split training/test o validazione incrociata e controlla la matrice di confusione.",
    randomForestClassifier: "Jamovi offre supporto integrato limitato per la classificazione random forest.\nUsa un modulo adatto o R.\nRiporta accuratezza di validazione, balanced accuracy/F1 se le classi sono sbilanciate, e importanza delle variabili.",
    knnClassifier: "Jamovi offre supporto diretto limitato per la classificazione k-nearest neighbors.\nStandardizza i predittori e usa un modulo di machine learning o R.\nScegli k con validazione incrociata e riporta una matrice di confusione.",
    naiveBayes: "Jamovi offre supporto integrato limitato per naive Bayes.\nUsa un modulo di machine learning se installato, oppure esporta i dati in R.\nControlla probabilità predette e matrice di confusione su dati di validazione.",
    principalComponentAnalysis: "Analisi > Fattori > Analisi delle componenti principali\nSposta le variabili metriche in Variabili.\nScegli il numero di componenti e controlla carichi, scree plot, varianza spiegata ed eventualmente punteggi delle componenti."
  }
};

Object.entries(mlProcedureGuides).forEach(([language, entries]) => {
  if (!window.localizedProcedurePacks[language]) window.localizedProcedurePacks[language] = {};
  Object.entries(entries).forEach(([resultId, jamovi]) => {
    window.localizedProcedurePacks[language][resultId] = { jamovi };
  });
});

window.localizedProcedurePacks.it = {
  pearson: {
    jamovi: "Analisi > Regressione > Matrice di correlazione\nSposta entrambe le variabili metriche in Variabili.\nSeleziona Pearson e attiva un diagramma di dispersione se vuoi un controllo visivo."
  },
  spearman: {
    jamovi: "Analisi > Regressione > Matrice di correlazione\nSposta le variabili in Variabili.\nSeleziona Spearman per variabili ordinali o relazioni monotone."
  },
  kendall: {
    jamovi: "Analisi > Regressione > Matrice di correlazione\nSposta le variabili in Variabili.\nSeleziona il tau di Kendall per variabili ordinali o relazioni monotone, specialmente con campioni piccoli o molti pareggi."
  },
  chiSquareAssociation: {
    jamovi: "Analisi > Frequenze > Tabelle di contingenza > Campioni indipendenti\nInserisci una variabile categoriale in Righe e l'altra in Colonne.\nAttiva il test chi-quadrato e le frequenze attese. Per l'interpretazione post hoc, richiedi i residui di Pearson standardizzati ed esamina quali celle contribuiscono maggiormente all'associazione."
  },
  logLinearModel: {
    jamovi: "Analisi > Frequenze > Modello log-lineare\nAggiungi le variabili nominali che definiscono la tabella di contingenza multidimensionale.\nConfronta modelli con e senza termini di interazione per identificare quali associazioni sono necessarie."
  },
  pathAnalysis: {
    jamovi: "Installa e apri il modulo medmod in jamovi.\nSpecifica la variabile predittore, il mediatore e la variabile esito per il modello di mediazione ipotizzato.\nRichiedi stime standardizzate, effetti indiretti, intervalli di confidenza e informazioni sul modello."
  },
  structuralEquationModeling: {
    jamovi: "Installa e apri il modulo SEMLj in jamovi e usa la funzione SEM interattiva.\nAssegna gli indicatori alle variabili latenti. Le variabili latenti endogene sono le variabili dipendenti, mentre le variabili latenti esogene sono le variabili indipendenti.\nDefinisci i percorsi strutturali tra variabili latenti e controlla carichi standardizzati, coefficienti di percorso, eventuali effetti indiretti, R quadrato e indici globali di adattamento."
  },
  confirmatoryFactorAnalysis: {
    jamovi: "Installa e apri il modulo Factor in jamovi.\nScegli Confirmatory Factor Analysis e assegna ogni indicatore osservato al fattore latente ipotizzato.\nControlla carichi fattoriali standardizzati, residui, indici di modifica giustificati teoricamente e indici di adattamento come CFI, TLI, RMSEA e SRMR."
  },
  discriminantAnalysis: {
    jamovi: "Installa e apri il modulo SnowCluster in jamovi.\nScegli Classification > Linear Discriminant Analysis.\nImposta la variabile nominale di gruppo come variabile dipendente e le variabili a scala di intervallo come predittori; controlla funzioni discriminanti e accuratezza di classificazione."
  },
  oneSampleT: {
    jamovi: "Analisi > Test t > Test t a un campione\nSposta la variabile metrica in Variabili dipendenti.\nInserisci il valore di test e attiva descrittive e controlli di normalità."
  },
  oneSampleZ: {
    jamovi: "Installa e apri il modulo ztesvis in jamovi.\nScegli l'opzione per il test z a un campione e inserisci i valori riassuntivi: media campionaria, media della popolazione sotto l'ipotesi nulla, deviazione standard della popolazione sotto l'ipotesi nulla, dimensione del campione e livello alfa.\nControlla statistica z, valore p e intervallo di confidenza nell'output."
  },
  oneSampleWilcoxon: {
    jamovi: "Analisi > Test t > Test t a un campione\nSposta la variabile in Variabili dipendenti.\nUsa l'opzione non parametrica o il test di Wilcoxon per ranghi con segno quando disponibile."
  },
  independentT: {
    jamovi: "Analisi > Test t > Test t per campioni indipendenti\nInserisci l'esito metrico in Variabili dipendenti e la variabile di gruppo in Variabile di raggruppamento.\nAttiva la correzione di Welch se le varianze sono disuguali."
  },
  mannWhitney: {
    jamovi: "Analisi > Test t > Test t per campioni indipendenti\nInserisci l'esito in Variabili dipendenti e la variabile di gruppo in Variabile di raggruppamento.\nAttiva Mann-Whitney U nei test non parametrici."
  },
  pairedT: {
    jamovi: "Analisi > Test t > Test t per campioni appaiati\nAggiungi le due variabili appaiate nella stessa riga appaiata.\nAttiva descrittive e controllo di normalità delle differenze."
  },
  wilcoxon: {
    jamovi: "Analisi > Test t > Test t per campioni appaiati\nAggiungi le due variabili appaiate nella stessa riga appaiata.\nAttiva il test di Wilcoxon per ranghi con segno nei test non parametrici."
  },
  anova: {
    jamovi: "Analisi > ANOVA > ANOVA\nInserisci l'esito metrico in Variabile dipendente e il fattore in Fattore fisso.\nAttiva i controlli delle assunzioni e i test post-hoc se necessari."
  },
  ancova: {
    jamovi: "Analisi > ANOVA > ANCOVA\nInserisci l'esito metrico in Variabile dipendente e le variabili di gruppo in Fattori fissi.\nAggiungi variabili come punteggio iniziale o età in Covariate.\nControlla l'effetto di gruppo aggiustato e, se necessario, l'omogeneità delle pendenze di regressione."
  },
  manova: {
    jamovi: "Analisi > ANOVA > MANCOVA\nInserisci due o più esiti metrici in Variabili dipendenti.\nAggiungi le variabili di gruppo come Fattori fissi e lascia vuote le Covariate.\nControlla test multivariati come traccia di Pillai o lambda di Wilks e riporta follow-up univariati solo se giustificati."
  },
  mancova: {
    jamovi: "Analisi > ANOVA > MANCOVA\nInserisci due o più esiti metrici in Variabili dipendenti.\nAggiungi le variabili di gruppo come Fattori fissi e variabili come età o punteggio iniziale in Covariate.\nControlla traccia di Pillai o lambda di Wilks e, se necessario, follow-up univariati aggiustati."
  },
  repeatedAnova: {
    jamovi: "Analisi > ANOVA > ANOVA a misure ripetute\nDefinisci il fattore a misure ripetute e i suoi livelli.\nAssegna le colonne delle misure ripetute e attiva le correzioni di sfericità."
  },
  twoWayAnova: {
    jamovi: "Analisi > ANOVA > ANOVA\nInserisci l'esito metrico in Variabile dipendente e i due o più fattori di gruppo in Fattori fissi.\nControlla effetti principali, interazioni, controlli delle assunzioni e, se necessario, confronti post-hoc o simple effects."
  },
  twoWayRepeatedAnova: {
    jamovi: "Analisi > ANOVA > ANOVA a misure ripetute\nDefinisci i due o più fattori a misure ripetute e i loro livelli, poi assegna le colonne di misura alle celle del disegno.\nControlla effetti principali, interazioni e correzioni di sfericità come Greenhouse-Geisser."
  },
  linearMixedModel: {
    jamovi: "Installa e apri il modulo GAMLj in jamovi.\nScegli Mixed Models > Linear Model, inserisci l'esito metrico come variabile dipendente e aggiungi predittori fissi e persona, squadra o classe come effetti casuali.\nInizia con intercette casuali e aggiungi pendenze casuali solo se giustificate teoricamente."
  },
  generalizedLinearMixedModel: {
    jamovi: "Installa e apri il modulo GAMLj in jamovi.\nScegli l'opzione di modello misto generalizzato/logistico, non Mixed Models > Linear Model.\nUsa success come variabile dipendente nominale, scegli una distribuzione binomiale con link logit, aggiungi condition e week come effetti fissi e participant come intercetta casuale.\nSe jamovi dice che il modello lineare richiede dati continui, sei nel menu del modello misto lineare."
  },
  ordinalMixedModel: {
    jamovi: "jamovi offre un supporto diretto limitato per modelli misti ordinali nei menu principali.\nUsa il modulo Rj Editor o esporta i dati in R.\nModella l'esito ordinale con predittori fissi ed effetti casuali per persona, squadra, classe o altro cluster."
  },
  kruskalWallis: {
    jamovi: "Analisi > Test non parametrici > Kruskal-Wallis\nInserisci l'esito ordinale o metrico nel campo della variabile dipendente e la variabile di gruppo nel campo gruppo.\nRichiedi descrittive e confronti a coppie se necessario."
  },
  friedman: {
    jamovi: "Analisi > Test non parametrici > Friedman\nAggiungi le colonne delle misure ripetute o appaiate degli stessi partecipanti.\nRichiedi descrittive e confronti a coppie se necessario."
  },
  nonparametricTwoWayAnova: {
    jamovi: "I menu principali di jamovi non forniscono un'ANOVA fattoriale non parametrica completa per due o più fattori con interazioni.\nUsa il modulo Rj Editor o esporta i dati in R e adatta un modello con trasformazione dei ranghi allineati.\nRiporta effetti principali e interazioni dalla tabella ANOVA ART."
  },
  nonparametricTwoWayRepeatedAnova: {
    jamovi: "I menu principali di jamovi non forniscono un'ANOVA fattoriale non parametrica completa con misure ripetute per due o più fattori con interazioni.\nUsa il modulo Rj Editor o esporta i dati in R e adatta un modello con trasformazione dei ranghi allineati con partecipante come unità ripetuta.\nRiporta effetti principali e interazioni dalla tabella ANOVA ART."
  },
  fisher: {
    jamovi: "Analisi > Frequenze > Tabelle di contingenza > Campioni indipendenti\nInserisci le variabili in Righe e Colonne.\nAttiva il test esatto di Fisher per una tabella 2x2."
  },
  mcnemar: {
    jamovi: "Analisi > Frequenze > Tabelle di contingenza > Campioni appaiati\nAggiungi le due variabili dicotomiche appaiate.\nAttiva il test di McNemar."
  },
  binomialTest: {
    jamovi: "Analisi > Frequenze > Test di proporzione a un campione\nSeleziona la variabile categoriale a due livelli.\nInserisci la proporzione attesa per la categoria focale e richiedi intervalli di confidenza esatti/binomiali."
  },
  chiSquareGoodness: {
    jamovi: "Analisi > Frequenze > Test di proporzione a un campione\nSeleziona la variabile categoriale.\nInserisci le proporzioni attese o confronta con proporzioni uguali."
  },
  linearRegression: {
    jamovi: "Analisi > Regressione > Regressione lineare\nInserisci l'esito metrico in Variabile dipendente.\nAggiungi i predittori in Covariate o Fattori e controlla la diagnostica dei residui.\nInterpreta i coefficienti come predizione/associazione salvo che il disegno dello studio supporti inferenza causale."
  },
  logisticRegression: {
    jamovi: "Analisi > Regressione > Regressione logistica > 2 esiti\nInserisci l'esito dicotomico in Variabile dipendente.\nAggiungi i predittori in Covariate o Fattori e controlla gli odds ratio."
  },
  multinomialRegression: {
    jamovi: "Analisi > Regressione > Regressione logistica > N esiti\nInserisci l'esito multicategoriale in Variabile dipendente.\nAggiungi i predittori in Covariate o Fattori e scegli la categoria di riferimento."
  },
  majorMetaAnalysis: {
    jamovi: "Installa/apri il modulo MAJOR in jamovi e scegli l'opzione di input adatta: Correlation Coefficients (r, N), Mean Differences (n, M, SD), Effect Sizes and (Sampling Variances or Standard Errors) oppure Proportions.\nPer gli odds ratio, usa Effect Sizes and (Sampling Variances or Standard Errors) a causa di un errore in Dichotomous Models: inserisci log_odds_ratio in Effect Sizes, variance in Variance or SE e seleziona Sampling Variances. Per Proportions, indica frequenze grezze degli eventi e dimensioni campionarie totali; valori maggiori di 1 sono corretti perché MAJOR calcola le proporzioni internamente. Per le correlazioni, indica correlazioni e dimensione campionaria. Aggiungi Study Label e, se necessario, un Moderator numerico.\nIn Model Options, scegli model estimator e model measures; per Proportions, scegli effect size model measures. Nelle stesse opzioni scegli effetto fisso o effetti casuali e, se necessario, moderatori e bias di pubblicazione."
  },
  fixedEffectMetaAnalysis: {
    jamovi: "Installa/apri il modulo MAJOR in jamovi e scegli l'opzione di input adatta.\nPer coefficienti di correlazione, indica correlazioni, dimensione campionaria, Moderator e Study Label. Per Effect sizes, indica dimensione dell'effetto, Variance o SE, Moderator e Study Label. Per Proportion, indica frequenza dell'evento, dimensione campionaria totale, Moderator e Study Label.\nIn Model Options, scegli model estimator e model measures; per Proportion, scegli effect size model measures. Seleziona un modello a effetto fisso e controlla l'effetto combinato con IC 95%."
  },
  randomEffectsMetaAnalysis: {
    jamovi: "Installa/apri il modulo MAJOR in jamovi e scegli l'opzione di input adatta.\nPer coefficienti di correlazione, indica correlazioni, dimensione campionaria, Moderator e Study Label. Per Effect sizes, indica dimensione dell'effetto, Variance o SE, Moderator e Study Label. Per Proportion, indica frequenza dell'evento, dimensione campionaria totale, Moderator e Study Label.\nIn Model Options, scegli model estimator e model measures; per Proportion, scegli effect size model measures. Seleziona un modello a effetti casuali e riporta effetto combinato, IC 95%, tau2, I2 e intervallo di predizione se disponibile."
  },
  subgroupMetaAnalysis: {
    jamovi: "Installa/apri il modulo MAJOR in jamovi e scegli prima l'opzione di input adatta.\nPer coefficienti di correlazione, indica correlazioni, dimensione campionaria, Moderator e Study Label. Per Effect sizes, indica dimensione dell'effetto, Variance o SE, Moderator e Study Label. Per Proportion, indica frequenza dell'evento, dimensione campionaria totale, Moderator e Study Label.\nIn Model Options, scegli model estimator e model measures; per Proportion, scegli effect size model measures. Usa Moderator come variabile di sottogruppo e riporta effetti per sottogruppo e test tra sottogruppi."
  },
  metaRegression: {
    jamovi: "Installa/apri il modulo MAJOR in jamovi e scegli prima l'opzione di input adatta.\nPer coefficienti di correlazione, indica correlazioni, dimensione campionaria, Moderator e Study Label. Per Effect sizes, indica dimensione dell'effetto, Variance o SE, Moderator e Study Label. Per Proportion, indica frequenza dell'evento, dimensione campionaria totale, Moderator e Study Label.\nIn Model Options, scegli model estimator e model measures; per Proportion, scegli effect size model measures. Riporta coefficiente del moderatore, intervallo di confidenza, valore p, eterogeneità residua e numero di studi usati."
  },
  publicationBiasDiagnostics: {
    jamovi: "Installa/apri il modulo MAJOR in jamovi ed esegui prima la meta-analisi con l'opzione di input adatta.\nPer coefficienti di correlazione, indica correlazioni, dimensione campionaria, Moderator e Study Label. Per Effect sizes, indica dimensione dell'effetto, Variance o SE, Moderator e Study Label. Per Proportion, indica frequenza dell'evento, dimensione campionaria totale, Moderator e Study Label.\nIn Model Options, scegli model estimator e model measures; per Proportion, scegli effect size model measures. Richiedi funnel plot e diagnostica per small-study effect/bias di pubblicazione, per esempio il test di Egger quando disponibile."
  },
  factorAnalysis: {
    jamovi: "Analisi > Fattori > Analisi fattoriale esplorativa\nSposta le variabili correlate in Variabili.\nScegli metodo di estrazione, rotazione e numero di fattori, poi controlla carichi e adattamento del modello."
  },
  networkAnalysis: {
    jamovi: "Installa e apri il modulo BSS in jamovi.\nScegli l'opzione Network Analysis e sposta le variabili selezionate nel campo di analisi.\nControlla il grafico di rete, i pesi degli archi e gli indici di centralità o importanza; interpreta gli archi come associazioni condizionali, non come effetti causali."
  },
  clusterAnalysis: {
    jamovi: "Installa il modulo SnowCluster dalla libreria jamovi e aprilo dal menu Analisi.\nSposta le variabili che descrivono persone o oggetti nel campo delle variabili di clustering.\nStandardizza le variabili se necessario, scegli il metodo di clustering/opzione di distanza, imposta o confronta il numero di cluster e controlla la qualità della soluzione."
  },
  multidimensionalScaling: {
    jamovi: "Installa il modulo jMDS dalla libreria jamovi e aprilo dal menu Analisi.\nFornisci la matrice di distanze/dissimilarità oppure seleziona le variabili usate per calcolare le distanze, in base all'opzione del modulo.\nScegli il numero di dimensioni e controlla valore di stress, grafico di configurazione e interpretabilità delle dimensioni."
  },
  chiSquareVariance: {
    jamovi: "Jamovi offre un supporto diretto limitato per il test chi-quadrato esatto di una varianza.\nUsa Esplorazione > Descrittive per ottenere n e la varianza campionaria, poi esegui il test esatto in R.\nRiporta la varianza di popolazione ipotizzata e la statistica chi-quadrato."
  },
  varianceFTest: {
    jamovi: "Jamovi può mostrare le varianze per gruppo in Esplorazione > Descrittive.\nPer il classico test F di due varianze, esporta i dati o usa un modulo R ed esegui var.test().\nConsidera il test di Levene come alternativa più robusta quando la normalità è dubbia."
  }
};

const metaProcedureAliases = [
  "metaOddsRatioAnalysis",
  "metaCorrelationAnalysis",
  "metaMeanDifferenceAnalysis",
  "metaEffectSizeAnalysis",
  "metaProportionAnalysis"
];

Object.values(window.localizedProcedurePacks).forEach((pack) => {
  if (!pack?.majorMetaAnalysis) return;
  metaProcedureAliases.forEach((resultId) => {
    pack[resultId] = pack.majorMetaAnalysis;
  });
});

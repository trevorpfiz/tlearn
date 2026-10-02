# Computational biology learning patterns

Read when an objective involves biological measurements, computational methods, figures, or code. These are tlearn authoring patterns informed by [BioSkills Guide](https://pmc.ncbi.nlm.nih.gov/articles/PMC8693931/) and the [ISCB competency framework v3](https://pmc.ncbi.nlm.nih.gov/articles/PMC11646570/); they are not validated lesson sequences. Source the actual biological and methodological claims from the topic's materials.

## Choose the performance

“Understand this method” is too vague to select tasks. Bound the outcome: interpret one kind of result, explain a mechanism, choose a method under stated conditions, trace an algorithm, or implement and check a simplified version. A narrow tool can teach one of these well without teaching the whole discipline.

Use an early, simplified whole example to show the destination, then teach its necessary components. Return to fresh whole tasks that combine those components. Three useful patterns:

| Outcome | Component practice | Fresh whole task |
| --- | --- | --- |
| Interpret a quantitative comparison | Identify the observation and denominator; compute a ratio; explain direction and scale. | Compare two small datasets, justify the interpretation, and state a conclusion the data do not support. |
| Explain or choose a model | Identify variables; predict a change under an assumption; contrast a relevant alternative. | Examine a new case, choose or critique a model, and explain the assumption that matters. |
| Understand or implement a method | Trace a small input; complete a step; check dimensions, units, and an edge case. | Execute or implement a simplified method on a new input, verify it, and interpret the output biologically. |

Reading code, running supplied code, and independently writing it are different outcomes. If the goal is implementation, include an actual construction task; a code-output quiz alone is insufficient. Use a companion notebook or script only when substantial computation is required.

## Preserve scientific meaning

For a dataset, identify what a row and column represent, what was measured, units, collection conditions, and relevant missingness or uncertainty. Include only limitations that affect the objective. Explain how a table, plot, equation, and computational operation relate where that relationship matters.

Choose a short reasoning prompt alongside computation: “What does the denominator represent?”, “Which assumption could change this interpretation?”, or “What further evidence would distinguish these explanations?” Supply a rubric accepting scientifically defensible alternatives. Avoid an automatic pass based on mentioning a keyword.

Label synthetic data prominently. Explain simplifications before asking for conclusions: omitted noise, an idealized mechanism, a reduced dataset, or a simplified algorithm can change what follows from the result. A mathematical toy is not evidence about a real population or experiment.

## A checked toy pattern

Consider invented observations of two categories, blue and other:

| Dataset | Blue | Other | Total | Blue share |
| --- | ---: | ---: | ---: | ---: |
| A | 30 | 70 | 100 | 0.30 |
| B | 40 | 160 | 200 | 0.20 |

These are synthetic category counts, not gene-expression measurements. They isolate the choice of denominator without implying that a simple fraction is adequate for any particular biological analysis.

1. **Model:** compute A's share as `30 / 100 = 0.30` and explain what the denominator counts.
2. **Complete:** supply B's total and ask for its share: `40 / 200 = 0.20`.
3. **Integrate:** ask which dataset has more blue observations and which has a larger blue share. B has more blue observations; A has the larger share.
4. **Interpret:** ask whether this establishes why the categories differ. A defensible response says it describes these counts but supplies no experimental design or causal evidence explaining the difference.
5. **Check independence:** use new synthetic counts, remove the worked arithmetic, and ask for both a comparison and a justified conclusion. Keep optional hints separate.

For a real biological objective, research the measurement and valid comparison first. Replace the toy with a small sourced or explicitly synthetic instance of that measurement, teach the required assumptions, and adjust the key. Do not transfer the toy procedure to biological data just because the tables look similar.

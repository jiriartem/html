**Bresenham sin PI**

Desde que tenemos **Pi** fácilmente accesible en librerías, calculadoras... hemos olvidado los orígenes de cómo se calcula **Pi**.

 Lo que en un principio es una ventaja, tenerlo ya calculado siempre... puede ser como esos *'falsos amigos'* que nos encontramos al hablar otro idioma.
 
 ¿Por qué?
 
  - Por una parte podríamos estar haciendo algo poco eficiente... usando un número muy complejo en lugar de una aproximación más eficiente a nuestro problema...
    
  - Por otra parte podríamos caer en errores al contar con cálculos hechos con diferentes *'versiones'* de **Pi**... en estos casos quizás algo no nos de el resultado que esperamos y lo desechamos por error, por no entrar en la letra pequeña de cómo se calcula **Pi**.
  
  - Pi, o llamémosle la función para obtener Pi... es base de muchas otras cosas, pasando por senos, cosenos... hasta su uso extensivo en diversas fórmulas. Si estamos usando conceptos derivados de Pi sin tener en cuenta el grado de precisión y en un momento dado los datos que tenemos tienen un Pi más preciso que lo previamente calculado... creeremos estar caminando hacia una mayor precisión pero en realidad estaremos cayendo en incongruencias.
  
   En muchos casos puede ser irrelevante pero en algunas circunstancias no tener eso en cuenta... puede ser crítico para el avance de tu investigación.

  

Ejemplo de refactorización del algoritmo de **Bresenham** para dibujar circunferencias basadas en los algoritmos con los que se genera el valor de **Pi**, en lugar de usar el valor de **Pi** desde alguna librería.

Ver el código en el archivo [https://github.com/jiriartem/html/bresenham.html](https://github.com/jiriartem/html/blob/main/bresenham.html)

![image](https://github.com/jiriartem/html/assets/77533807/f63cdd46-38c9-42bd-a151-c76640d955b5)

Referencias relacionadas:

Taylor-series and Monte-Carlo-method uncertainty estimation of the width of a probability distribution based on varying bias and random error
https://iopscience.iop.org/article/10.1088/0957-0233/24/3/035301

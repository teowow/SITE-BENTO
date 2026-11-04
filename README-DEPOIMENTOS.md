# Depoimentos — validação local

A página `conquistas.html` reúne as três conquistas anteriores e os 13 depoimentos do pacote, totalizando 16 cards. O site é estático, sem etapa de build ou scripts de testes configurados.

## Arquivos

- `dados/depoimentos.json`: cópia integral do JSON fornecido, sem alterar seus campos ou textos. É a fonte dos 13 novos registros.
- `assets/conquistas/*.webp`: as 13 fotografias originais do pacote, copiadas sem recompressão. As três fotos anteriores permanecem no mesmo diretório.
- `conquistas-page.js`: carrega o JSON por HTTP, adapta os campos aos cards existentes e reconcilia registros por ID ou nome, sem duplicá-los. O caminho `imagem` é resolvido como `assets/conquistas/<nome do arquivo>`.
- `novas-paginas.css`: estilos da expansão do depoimento e do foco de teclado, usando a identidade visual existente.
- `conquistas.html`: atualização das versões dos dois assets alterados para invalidar o cache.

`conquistas-data.js` permanece intacto, com as três conquistas anteriores. Os novos registros usam a categoria existente Emprego/Estágio. Campos sem valor são omitidos. Formação, ingresso e período de estudos têm rótulos distintos; nenhum deles alimenta o filtro de ano da conquista. O resumo aparece no card e o texto integral pode ser aberto em “Ler depoimento completo”, com os parágrafos preservados e inseridos como texto, sem interpretar HTML.

As imagens mantêm o contêiner de proporção 2:3 do layout existente, com `object-fit: contain`, sem recortar os rostos, além de `alt`, `loading="lazy"` e `decoding="async"`.

## Como conferir antes de publicar

Na pasta `bq-site`, execute:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Abra <http://127.0.0.1:8765/conquistas.html>. Use o servidor HTTP, pois abrir o HTML diretamente como arquivo não permite carregar o JSON via `fetch`.

1. Confira os 16 cards, as fotos e as três conquistas anteriores.
2. Busque por um nome ou cargo e confira os filtros e “Limpar seleção”.
3. Busque “assessora parlamentar”: esse relato não deve exibir nome, curso ou ano, pois esses campos não foram fornecidos.
4. Confira “Ingresso: 1999” para Mariele e “Ingresso: 2001” para Francine; não devem aparecer como formação.
5. Abra os relatos com vários parágrafos, inclusive pelo teclado: Tab até o controle, Enter ou Espaço para expandir/recolher.
6. Confira o layout em desktop e celular e a ausência de erros locais no console e na aba de rede.

Encerre o servidor com Ctrl+C.

## Verificação executada

- Sintaxe dos dois JavaScripts de conquistas validada com `node --check`.
- Automação em Microsoft Edge com Playwright: 16 cards, sendo 13 novos e três preservados; sem duplicações.
- JSON e 13 WebPs comparados por SHA-256 com o pacote original; dados anteriores também comparados com a cópia anterior à alteração.
- Correspondência de textos, parágrafos, nomes, fotos e atributos; ausência de elementos de campos opcionais sem valor e de rótulos de empresa inventados.
- As 16 imagens carregadas e decodificadas no navegador, sem fallback ou respostas HTTP locais com erro.
- Busca sem acentos, filtros, limpeza e expansão/recolhimento de todos os 13 relatos pelo teclado.
- Larguras de 1440, 768, 390 e 320 pixels: três, duas, uma e uma colunas, respectivamente; sem transbordamento horizontal da página ou dos cards. Capturas de desktop e celular também inspecionadas visualmente.
- Nenhum erro de JavaScript ou console durante a verificação local. Recursos externos de fontes e rastreamento foram isolados na automação; as integrações externas existentes não foram validadas por esse teste.

Não foi feito deploy. Ao publicar pelo fluxo existente do Firebase Hosting, inclua o JSON, as 13 fotos e os três arquivos alterados. Este documento é excluído do deploy pela regra `**/*.md` já existente em `firebase.json`.

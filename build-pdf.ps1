# Rebuilds the resume PDF from main.tex and copies it into assets/.
# Requires MiKTeX (winget install MiKTeX.MiKTeX --scope user).

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$pdflatex = (Get-Command pdflatex -ErrorAction SilentlyContinue)?.Source
if (-not $pdflatex) { $pdflatex = "$env:LOCALAPPDATA\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" }
if (-not (Test-Path $pdflatex)) { throw "pdflatex not found. Install MiKTeX first." }

# Two passes so hyperref outlines settle.
1..2 | ForEach-Object {
  & $pdflatex -interaction=nonstopmode -halt-on-error -file-line-error main.tex | Out-Null
  if ($LASTEXITCODE -ne 0) { throw "pdflatex failed on pass $_. See main.log." }
}

Copy-Item main.pdf assets/Parth_Thakre_Resume.pdf -Force
Remove-Item main.aux, main.log, main.out -ErrorAction SilentlyContinue
"Built assets/Parth_Thakre_Resume.pdf"

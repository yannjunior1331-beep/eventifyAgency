Add-Type -AssemblyName System.Drawing

function Compress-Jpg($src, $dest, $quality, $maxW, $maxH) {
    $img = [System.Drawing.Image]::FromFile($src)
    
    # Calculate scale
    $ratio = [Math]::Min($maxW / $img.Width, $maxH / $img.Height)
    $newW = [int]($img.Width * $ratio)
    $newH = [int]($img.Height * $ratio)
    
    $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $newW, $newH)
    $g.Dispose()
    $img.Dispose()
    
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)
    $bmp.Save($dest, $codec, $encParams)
    $bmp.Dispose()
    
    $len = (Get-Item $dest).Length
    Write-Output "Saved $dest ($newW x $newH) -> $len bytes"
}

$s1 = 'C:\Users\ae101\.gemini\antigravity-ide\brain\aab3713e-65ea-4c43-aac6-3691d0f9c169\queen_portrait_1791233922131.jpg'
$d1 = 'c:\Users\ae101\Desktop\yangman\queen_of silence\resources\portrait_opt.jpg'
$s2 = 'C:\Users\ae101\.gemini\antigravity-ide\brain\aab3713e-65ea-4c43-aac6-3691d0f9c169\queen_sanctuary_1791233940372.jpg'
$d2 = 'c:\Users\ae101\Desktop\yangman\queen_of silence\resources\sanctuary_opt.jpg'

Compress-Jpg $s1 $d1 65 640 850
Compress-Jpg $s2 $d2 58 600 450
[Convert]::ToBase64String([IO.File]::ReadAllBytes('resources\sanctuary_opt.jpg')) | Set-Content 'resources\sanctuary_b64.txt'

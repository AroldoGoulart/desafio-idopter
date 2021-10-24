export function validEmail(email: string): boolean {
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
}
  
export function firstLetterUpperCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function addErrorLine (localText: string, addText: string): string  {
    let tratedText = ''
    if (localText.length <= 0) {
        tratedText = firstLetterUpperCase(addText)
    }
    else {
        tratedText = `${localText}, ${addText}`
    }
    return tratedText
}
